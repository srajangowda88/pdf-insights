import { Upload, Cpu, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload PDF",
    description: "Drag and drop your PDF or browse to upload. We support files up to 50MB.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Indexes Content",
    description: "Our AI reads and understands every page, building a searchable knowledge base.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Ask Questions",
    description: "Chat naturally with your document. Get accurate answers with source references.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Three steps to instant answers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center group">
              <div className="relative inline-flex mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.step}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
