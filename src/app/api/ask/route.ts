import { NextRequest, NextResponse } from "next/server";
import { askAssistant } from "@/lib/bedrock";
import { isRateLimited } from "@/lib/rate-limit";

const MAX_QUESTION_LENGTH = 500;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (await isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many questions — try again in a few minutes." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";

  if (!question) {
    return NextResponse.json({ error: "Ask something first." }, { status: 400 });
  }
  if (question.length > MAX_QUESTION_LENGTH) {
    return NextResponse.json({ error: "That question's a bit long — try trimming it down." }, { status: 400 });
  }

  try {
    const answer = await askAssistant(question);
    return NextResponse.json({ answer });
  } catch (err) {
    console.error("askAssistant failed:", err);
    return NextResponse.json({ error: "Something went wrong answering that — try again." }, { status: 500 });
  }
}
