import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of PDFs are supported?",
    a: "We support all standard PDF files including scanned documents with OCR. Text-based PDFs provide the best results.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All documents are encrypted at rest and in transit. We never share your data with third parties and you can delete your files at any time.",
  },
  {
    q: "How accurate are the AI answers?",
    a: "Our AI uses state-of-the-art language models and always references specific sections of your document. Accuracy typically exceeds 95% for well-formatted PDFs.",
  },
  {
    q: "Can I use it for large documents?",
    a: "Yes! PDFChat AI handles documents up to 500 pages. Enterprise plans support even larger files with priority processing.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-tight max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-border/50"
            >
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
