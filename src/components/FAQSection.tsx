import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "StyleGPS Experience — About Image Voiage Consulting",
    a: "More than a clothing makeover, this is a transformation journey. Clothing becomes a language of self-expression, reflecting your inner growth and confidence while aligning with your professional identity.",
  },
  {
    q: "Experience The Closet Refresh",
    a: "This isn't about throwing away clothes but reflecting on what no longer fits your goals or lifestyle, making space for renewal and growth.",
  },
  {
    q: "Personal Style, Rediscovered",
    a: "Rediscover and refine your personal style so it mirrors your evolution through color, fit, and silhouette.",
  },
  {
    q: "The Unique Journey",
    a: "Each journey is unique. Some clients focus on wardrobe and grooming; others dive deeper into self-discovery.",
  },
  {
    q: "Client Experiences",
    a: "Clients describe it as wardrobe therapy or executive presence coaching and report renewed confidence and enhanced visibility.",
  },
  {
    q: "Why Choose This Service",
    a: "Save time and money with tailored consultations including wardrobe selection, personalized shopping guides and optional makeup consultation.",
  },
  {
    q: "Ready to Begin Your Style Journey?",
    a: "Step confidently into your next chapter with Image Voiage Consulting, where inner transformation meets outer expression.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Questions & Answers
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-2xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-[1.025rem] text-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
