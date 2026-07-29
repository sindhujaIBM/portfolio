"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant" | "error";
  text: string;
};

const SUGGESTIONS = [
  "What's the AI Estimator in MaidLink?",
  "Tell me about a hard architecture decision she made",
  "What does she look for in engineering culture?",
];

export default function AskWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  async function send(question: string) {
    if (!question.trim() || loading) return;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setMessages((prev) => [...prev, { role: "assistant", text: data.answer }]);
    } catch (err) {
      const text = err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => [...prev, { role: "error", text }]);
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button className="ask-launcher" onClick={() => setOpen(true)}>
        Ask me anything →
      </button>
    );
  }

  return (
    <div className="ask-panel">
      <div className="ask-header">
        <h3>Ask about Sindhuja&apos;s work</h3>
        <button className="ask-close" onClick={() => setOpen(false)} aria-label="Close">
          ×
        </button>
      </div>

      <div className="ask-messages" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="ask-empty">
            <p>Ask anything about her engineering background, MaidLink, or how she works.</p>
            <div className="ask-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="ask-suggestion" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`ask-message ask-message-${m.role}`}>
            {m.text}
          </div>
        ))}
        {loading && <div className="ask-message ask-message-assistant">Thinking…</div>}
      </div>

      <form
        className="ask-form"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          className="ask-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question…"
          maxLength={500}
        />
        <button className="ask-send" type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}
