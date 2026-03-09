import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutBg}
          alt="Curated wardrobe and personal styling workspace"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/70 to-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-sky mb-4"
          >
            Image Consultancy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-6"
          >
            Discover Your{" "}
            <span className="text-sky italic">True Style,</span>
            <br />
            Embrace Your Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-lg leading-relaxed text-primary-foreground/80 mb-10 max-w-xl"
          >
            At Image Voiage, we believe everyone deserves to see themselves clearly and feel
            confident in their own skin. We're here to walk alongside you, helping you
            discover your true style and express who you really are—so you can embrace
            every change with grace and excitement.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#booking"
            className="inline-flex items-center px-8 py-4 rounded-full gradient-cta font-body text-base font-semibold text-cta-foreground shadow-elevated hover:scale-105 transition-transform"
          >
            Book Your Style Session
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
