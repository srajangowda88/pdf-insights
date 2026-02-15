import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Bot, User, Send, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "ai";
  content: string;
};

const initialMessages: Message[] = [
  { role: "ai", content: "Hello! I've loaded your document. What would you like to know about it?" },
  { role: "user", content: "What is the main topic of this document?" },
  { role: "ai", content: "This document is an annual financial report for FY 2024. It covers revenue performance, market expansion, operational highlights, and forward-looking guidance for the next fiscal year." },
  { role: "user", content: "What was the total revenue?" },
  { role: "ai", content: "The total revenue for FY 2024 was $58.4 million, representing a 23% year-over-year increase. Q4 alone contributed $14.2M, making it the strongest quarter." },
];

const chatHistory = [
  { id: "1", name: "Annual Report 2024.pdf", active: true },
  { id: "2", name: "Contract Draft v3.pdf", active: false },
  { id: "3", name: "Research Paper.pdf", active: false },
];

// Placeholder API call
async function sendMessageToAI(message: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 1500));
  return "Based on the document, I can see that " + message.toLowerCase().replace("?", "") + " is addressed in section 3.2. The key findings suggest continued growth with a focus on enterprise adoption.";
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const response = await sendMessageToAI(userMsg);
      setMessages((prev) => [...prev, { role: "ai", content: response }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-8rem)] gap-4">
        {/* Chat History Sidebar */}
        <div className="hidden md:flex w-56 shrink-0 flex-col glass-card p-3">
          <p className="text-xs font-medium text-muted-foreground px-2 mb-3">Documents</p>
          <div className="space-y-1">
            {chatHistory.map((doc) => (
              <button
                key={doc.id}
                className={`w-full flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-left transition-colors ${
                  doc.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                <FileText className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{doc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col glass-card overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Annual Report 2024.pdf</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "ai" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm max-w-[75%] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/60 text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-secondary/60">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/40">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask anything about your PDF..."
                className="flex-1 rounded-xl border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                size="sm"
                className="rounded-xl h-10 px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
