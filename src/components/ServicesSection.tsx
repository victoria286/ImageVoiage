import { motion } from "framer-motion";
import { ScanFace, Ruler, RefreshCw, Compass, Layers } from "lucide-react";

const services = [
  {
    icon: ScanFace,
    title: "Face & Body Shape Analysis",
    description: "Understand the unique proportions that make you, you — and learn which silhouettes elevate your presence.",
  },
  {
    icon: Ruler,
    title: "Proportion & Fit Guidance",
    description: "Master the art of fit so every piece you wear feels intentional and looks effortlessly polished.",
  },
  {
    icon: RefreshCw,
    title: "Wardrobe Refresh & Coordination",
    description: "Breathe new life into what you already own by creating cohesive, versatile combinations.",
  },
  {
    icon: Compass,
    title: "Personal Style Direction",
    description: "Define a style identity that mirrors your goals, values and the person you're becoming.",
  },
  {
    icon: Layers,
    title: "Cohesive Outfit Building",
    description: "Build complete looks that transition seamlessly from boardroom to evening with confidence.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-navy flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-4 rounded-full gradient-cta font-body text-base font-semibold text-cta-foreground shadow-soft hover:shadow-elevated hover:scale-105 transition-all"
          >
            Start Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
