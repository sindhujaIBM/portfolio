import { NextRequest, NextResponse } from "next/server";
import { askAssistant } from "@/lib/bedrock";

const MAX_QUESTION_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

// Per-instance only — Amplify/Lambda compute isn't guaranteed to reuse the same
// instance across requests, so this throttles bursts on a warm instance rather
// than enforcing a hard global cap. Good enough as a first line of defense.
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
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
