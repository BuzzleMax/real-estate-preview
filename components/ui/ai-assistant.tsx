"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiSuggestions, aiResponses } from "@/lib/data";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const defaultResponses = [
  "I'm your AI Property Concierge. I can help you find the perfect property, answer questions about neighborhoods, explain the buying process, or provide investment insights. How can I assist you today?",
  "Welcome to BuzzleMax Luxury Real Estate. I'm here to make your property search effortless. Feel free to ask me about our portfolio, schedule viewings, or get personalized recommendations."
];

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();

  // Check for exact matches in our curated responses
  for (const [key, response] of Object.entries(aiResponses)) {
    if (lower.includes(key)) {
      return response;
    }
  }

  // Intelligent fallback responses based on keywords
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hello! I'm your AI Property Concierge. How can I help you find your dream property today? You can ask me about luxury homes, apartments, investment properties, or specific neighborhoods.";
  }

  if (lower.includes("mortgage") || lower.includes("finance") || lower.includes("loan")) {
    return "Great question about financing! Our team works with premier lending partners who specialize in luxury property financing. Generally, jumbo loans for properties over $1M require 20-30% down payment, strong credit scores (720+), and documented assets. I can connect you with a mortgage specialist for a personalized consultation. Would you like me to arrange that?";
  }

  if (lower.includes("neighborhood") || lower.includes("area") || lower.includes("location")) {
    return "New York City offers incredible diversity in neighborhoods. Tribeca is known for its cobblestone streets and celebrity residents. The Upper East Side offers classic pre-war elegance. Brooklyn Heights provides stunning waterfront views with a more relaxed pace. SoHo blends historic architecture with modern luxury. Each neighborhood has its own character and price points. Which appeals to you most?";
  }

  if (lower.includes("price") || lower.includes("cost") || lower.includes("budget") || lower.includes("afford")) {
    return "Our portfolio spans from $1M to $25M+. Here's a quick overview:\n\n• $1M-$3M: Luxury studios and one-bedrooms in prime locations\n• $3M-$5M: Spacious two-bedrooms with premium amenities\n• $5M-$10M: Three-bedroom residences in full-service buildings\n• $10M-$20M: Penthouse suites and townhouses\n• $20M+: Trophy properties and estates\n\nWhat price range are you exploring?";
  }

  if (lower.includes("buy") || lower.includes("purchase") || lower.includes("process")) {
    return "The buying process at BuzzleMax is designed to be seamless:\n\n1. **Consultation** - We learn your preferences, timeline, and requirements\n2. **Curation** - Receive a personally selected shortlist of properties\n3. **Private Viewings** - In-person or virtual tours at your convenience\n4. **Negotiation** - Expert guidance through pricing and terms\n5. **Closing** - Coordinated support through final signatures\n\nThe entire process typically takes 45-60 days for qualified buyers. Would you like to schedule a consultation?";
  }

  if (lower.includes("invest") || lower.includes("roi") || lower.includes("return")) {
    return "Investment properties in NYC have shown strong resilience. Our investment team can help you identify:\n\n• High-yield rental properties with 4-6% cap rates\n• Fix-and-flip opportunities in emerging neighborhoods\n• Development projects with significant upside potential\n• 1031 exchange properties for tax deferment\n\nI can arrange a consultation with our investment advisory team for a detailed market analysis. Shall I do that?";
  }

  if (lower.includes("thank")) {
    return "You're most welcome! It's my pleasure to assist you. If you have any more questions about properties, neighborhoods, or the buying process, don't hesitate to ask. I'm here 24/7 to help you find your dream home.";
  }

  // Default intelligent response
  return "Thank you for your inquiry. I'd be happy to help you with that. Could you provide a bit more detail so I can give you the most relevant information? For example, you can ask me about:\n\n• **Luxury homes** - Browse our premium collection\n• **Apartments** - Find the perfect urban residence\n• **Investment properties** - Explore ROI opportunities\n• **Neighborhoods** - Learn about different areas\n• **Buying process** - Understand how it works\n• **Mortgage basics** - Get financing guidance";
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate thinking delay for natural feel
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 1200));

    const response = getAIResponse(text);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setIsTyping(false);
  };

  const handleSuggestion = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-royal via-plum to-emerald text-white shadow-xl shadow-plum/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-plum/40 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        aria-label="AI Property Assistant"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" strokeWidth="2.5" />
            <path d="M12 10h.01" strokeWidth="2.5" />
            <path d="M16 10h.01" strokeWidth="2.5" />
          </svg>
        )}
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-plum/30 animate-ping-slow" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 z-[60] w-[calc(100vw-32px)] max-w-[420px] sm:bottom-28 sm:right-8"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] shadow-2xl backdrop-blur-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-royal to-plum">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                      <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">AI Concierge</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-emerald">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:text-text transition"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="h-[400px] overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-royal to-plum text-white"
                          : "border border-white/10 bg-white/5 text-text"
                      }`}
                    >
                      {msg.content.split("\n").map((line, j) => (
                        <p key={j} className={j > 0 ? "mt-2" : ""}>
                          {line.startsWith("•") || line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") || line.startsWith("4.") || line.startsWith("5.") ? (
                            <span className="text-emerald">{line}</span>
                          ) : line.startsWith("**") && line.endsWith("**") ? (
                            <strong className="text-text">{line.replace(/\*\*/g, "")}</strong>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-muted/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 rounded-full bg-muted/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 rounded-full bg-muted/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              {messages.length <= 2 && (
                <div className="px-5 pb-3">
                  <div className="flex flex-wrap gap-2">
                    {aiSuggestions.slice(0, 4).map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestion(suggestion)}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] text-muted transition hover:border-plum/30 hover:bg-white/10 hover:text-text"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="border-t border-white/10 p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(input);
                  }}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about properties..."
                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-text outline-none placeholder:text-muted/50 transition focus:border-plum/40 focus:bg-white/8"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-royal to-plum text-white transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
