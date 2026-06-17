"use client";

import { useState, useRef, useEffect } from "react";

const BOT_NAME = "MD&A Assistant";

const QUICK_REPLIES = [
  "What services do you offer?",
  "Where are your locations?",
  "How do I request a quote?",
  "Emergency support?",
];

type Message = { role: "user" | "assistant"; content: string; time: string };

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm the MD&A virtual assistant. How can I help you today?", time: getTime() },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setUnread(0);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMsg: Message = { role: "user", content: trimmed, time: getTime() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply, time: getTime() }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please call (518) 399-3616.", time: getTime() }]);
    } finally {
      setTyping(false);
      if (!open) setUnread((n) => n + 1);
    }
  }

  function clearChat() {
    setMessages([{ role: "assistant", content: "Chat cleared! How can I help you?", time: getTime() }]);
  }

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        style={{
          position: "fixed", bottom: "1.75rem", right: "10px", zIndex: 999,
          width: "56px", height: "56px", borderRadius: "999px",
          background: "#c8392b", border: "none", cursor: "pointer",
          boxShadow: "0 6px 24px rgba(200,57,43,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg style={{ width: "24px", height: "24px", fill: "white" }} viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
        {!open && unread > 0 && (
          <span style={{
            position: "absolute", top: "-4px", right: "-4px",
            background: "#1a3a5c", color: "white", fontSize: "0.6rem", fontWeight: 800,
            borderRadius: "999px", width: "18px", height: "18px",
            display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white",
          }}>
            {unread}
          </span>
        )}
      </button>

      {/* ── Chat panel ── */}
      {open && (
        <div style={{
          position: "fixed", bottom: "5.5rem", right: "10px", zIndex: 999,
          width: "340px", maxWidth: "calc(100vw - 2rem)",
          borderRadius: "18px", overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)",
          display: "flex", flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.08)",
          animation: "chatSlideUp 0.22s ease",
        }}>
          {/* Header */}
          <div style={{ background: "#1a3a5c", padding: "1rem 1.1rem", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#c8392b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg style={{ width: "18px", height: "18px", fill: "white" }} viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 800, color: "white", fontSize: "0.85rem", lineHeight: 1.2 }}>{BOT_NAME}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#4ade80", display: "inline-block" }} />
                <p style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>Powered by Groq AI</p>
              </div>
            </div>
            {/* Delete button */}
            <button onClick={clearChat} title="Clear chat"
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.45)", padding: "4px" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c8392b")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
            {/* Close button */}
            <button onClick={() => setOpen(false)} title="Close"
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.45)", padding: "4px" }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", background: "#f8fafc", display: "flex", flexDirection: "column", gap: "10px", maxHeight: "340px", minHeight: "240px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "82%", padding: "0.6rem 0.85rem",
                  borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: m.role === "user" ? "#1a3a5c" : "white",
                  color: m.role === "user" ? "white" : "#1e3048",
                  fontSize: "0.8rem", lineHeight: 1.6, fontWeight: 500,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  whiteSpace: "pre-line",
                  border: m.role === "assistant" ? "1px solid #e4eaf0" : "none",
                }}>
                  {m.content}
                </div>
                <p style={{ fontSize: "0.58rem", color: "#9aabbf", marginTop: "3px", fontWeight: 500 }}>{m.time}</p>
              </div>
            ))}
            {typing && (
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{ background: "white", border: "1px solid #e4eaf0", borderRadius: "14px 14px 14px 4px", padding: "0.6rem 0.9rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", gap: "4px", alignItems: "center" }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#9aabbf", display: "inline-block", animation: `bounce 1s ease-in-out ${d * 0.15}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div style={{ background: "#f0f4f8", padding: "0.5rem 0.75rem", display: "flex", gap: "6px", flexWrap: "wrap", borderTop: "1px solid #e4eaf0" }}>
            {QUICK_REPLIES.map((q) => (
              <button key={q} onClick={() => sendMessage(q)}
                style={{ fontSize: "0.62rem", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", cursor: "pointer", background: "white", border: "1px solid #dbe4ec", color: "#1a3a5c", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1a3a5c"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#1a3a5c"; }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ background: "white", padding: "0.65rem 0.75rem", display: "flex", gap: "8px", alignItems: "center", borderTop: "1px solid #e4eaf0" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask about MD&A services..."
              style={{ flex: 1, border: "1.5px solid #e4eaf0", borderRadius: "10px", padding: "0.5rem 0.75rem", fontSize: "0.8rem", color: "#1e3048", outline: "none", fontFamily: "inherit", background: "#f8fafc" }}
              onFocus={e => (e.currentTarget.style.borderColor = "#1a3a5c")}
              onBlur={e => (e.currentTarget.style.borderColor = "#e4eaf0")}
            />
            <button onClick={() => sendMessage(input)}
              style={{ width: "36px", height: "36px", borderRadius: "10px", border: "none", cursor: "pointer", background: "#c8392b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#a62e22")}
              onMouseLeave={e => (e.currentTarget.style.background = "#c8392b")}
            >
              <svg style={{ width: "16px", height: "16px", fill: "white" }} viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
