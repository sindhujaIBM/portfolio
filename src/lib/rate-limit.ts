import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const REGION = process.env.BEDROCK_REGION ?? "us-east-1";
const TABLE = process.env.RATE_LIMIT_TABLE ?? "portfolio-rate-limit";
const WINDOW_SECONDS = 5 * 60;
const MAX_REQUESTS = 8;

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

// Fixed-window counter shared across all compute instances via DynamoDB —
// a per-instance in-memory Map doesn't work here because Amplify/Lambda
// doesn't guarantee the same instance handles consecutive requests from
// the same IP. Each 5-minute window gets its own item, so concurrent
// requests just ADD to the same counter atomically; TTL cleans up old windows.
export async function isRateLimited(ip: string): Promise<boolean> {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const windowStart = Math.floor(nowSeconds / WINDOW_SECONDS) * WINDOW_SECONDS;
  const pk = `${ip}#${windowStart}`;

  const result = await ddb.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { pk },
      UpdateExpression: "ADD requestCount :one SET expiresAt = :exp",
      ExpressionAttributeValues: {
        ":one": 1,
        ":exp": windowStart + WINDOW_SECONDS * 2,
      },
      ReturnValues: "UPDATED_NEW",
    })
  );

  const count = (result.Attributes?.requestCount as number | undefined) ?? 0;
  return count > MAX_REQUESTS;
}
