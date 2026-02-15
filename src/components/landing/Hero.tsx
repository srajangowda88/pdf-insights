import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative section-padding pt-32 md:pt-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-tight relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6 fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now in Public Beta
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 fade-up stagger-1 text-balance">
            Turn Any PDF Into an{" "}
            <span className="gradient-text">AI Assistant</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 fade-up stagger-2 text-balance">
            Upload your document and ask questions instantly. Get accurate, AI-powered answers from any PDF in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 fade-up stagger-3">
            <Link to="/signup">
              <Button size="lg" className="gap-2 px-8 text-base font-semibold">
                Start Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="px-8 text-base">
                See Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Mock Chat UI */}
        <div className="max-w-2xl mx-auto fade-up stagger-4">
          <div className="glass-hero glow p-1">
            <div className="rounded-[calc(1.5rem-4px)] bg-background/80 p-4 md:p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-accent/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  annual-report-2024.pdf
                </span>
              </div>

              <div className="space-y-3">
                <ChatBubble
                  role="user"
                  message="What was the total revenue in Q4?"
                />
                <ChatBubble
                  role="ai"
                  message="Based on the annual report, Q4 2024 total revenue was $14.2M, representing a 23% increase year-over-year. The growth was primarily driven by enterprise subscriptions."
                />
                <ChatBubble
                  role="user"
                  message="Summarize the key risks mentioned."
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <div className="flex-1 rounded-xl border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm text-muted-foreground">
                  Ask anything about your PDF...
                </div>
                <Button size="sm" className="rounded-xl h-10 px-4">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatBubble = ({ role, message }: { role: "user" | "ai"; message: string }) => (
  <div className={`flex gap-3 ${role === "user" ? "justify-end" : ""}`}>
    {role === "ai" && (
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Bot className="h-3.5 w-3.5" />
      </div>
    )}
    <div
      className={`rounded-2xl px-4 py-2.5 text-sm max-w-[80%] ${
        role === "user"
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/60 text-foreground"
      }`}
    >
      {message}
    </div>
    {role === "user" && (
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
        <User className="h-3.5 w-3.5" />
      </div>
    )}
  </div>
);

export default Hero;
