import { Brain, Search, Shield, FileStack, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Answers",
    description: "Get precise answers from your documents using advanced language models.",
  },
  {
    icon: Search,
    title: "Fast Document Search",
    description: "Instantly search through hundreds of pages to find exactly what you need.",
  },
  {
    icon: Shield,
    title: "Secure File Storage",
    description: "Your documents are encrypted and stored securely. We never share your data.",
  },
  {
    icon: FileStack,
    title: "Works with Large PDFs",
    description: "Upload documents of any size. Our system handles even the largest files.",
  },
  {
    icon: Sparkles,
    title: "Smart Summarization",
    description: "Get concise summaries of entire documents or specific sections instantly.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to understand your PDFs
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Powerful AI tools that make working with documents effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
