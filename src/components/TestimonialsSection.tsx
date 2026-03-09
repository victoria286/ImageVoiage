import { motion } from "framer-motion";

const testimonials = [
  {
    persona: "CEO",
    text: "Working with Victoria completely transformed how I show up in the boardroom. My wardrobe now reflects the leader I've become — powerful, intentional, and authentic.",
    recommendation: "Every executive needs this level of style clarity.",
  },
  {
    persona: "Educator",
    text: "I never realized how much my appearance was holding me back. Victoria helped me find pieces that feel like me and command respect from the moment I walk into a classroom.",
    recommendation: "The most empowering investment I've made in myself.",
  },
  {
    persona: "Founder",
    text: "As a startup founder, I needed to look credible fast. Victoria created a wardrobe system that saved me hours every morning and made pitching feel effortless.",
    recommendation: "Victoria's expertise is unmatched — trust the process.",
  },
  {
    persona: "Presenter",
    text: "Before my keynote, Victoria helped me choose looks that made me feel unstoppable on stage. The confidence boost was immediate and the audience noticed.",
    recommendation: "If you present publicly, this service is non-negotiable.",
  },
  {
    persona: "Professional",
    text: "In just one session, Victoria helped me see myself differently. My closet went from chaotic to curated, and getting dressed is finally something I enjoy again.",
    recommendation: "A life-changing experience — worth every moment.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Transformations That Speak
          </h2>
        </motion.div>
      </div>

      {/* Scrolling carousel */}
      <div className="group relative">
        <div className="flex animate-scroll-left hover:[animation-play-state:paused] w-max gap-6 px-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[360px] flex-shrink-0 bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold uppercase tracking-wider mb-5">
                {t.persona}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <p className="font-body text-sm text-foreground font-medium">
                — {t.recommendation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
