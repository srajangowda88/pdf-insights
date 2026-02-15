const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Stripe",
    quote: "PDFChat AI has completely changed how I review product specs. What used to take hours now takes minutes.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Legal Analyst",
    quote: "I use it daily to parse through legal contracts. The accuracy is impressive and it saves me so much time.",
    avatar: "MJ",
  },
  {
    name: "Priya Patel",
    role: "Research Scientist",
    quote: "Being able to ask questions about research papers in natural language is a game-changer for my workflow.",
    avatar: "PP",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by thousands of users
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 hover-lift">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
