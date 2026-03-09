import { motion } from "framer-motion";
import victoriaImg from "@/assets/victoria.png";
import founderBg from "@/assets/founder-bg.jpg";

const FounderSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with blue tint overlay */}
      <div className="absolute inset-0">
        <img
          src={founderBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/70 to-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-sky-200 mb-3">
            The Woman Behind the Vision
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Meet the Founder
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto"
        >
          {/* Photo */}
          <div className="w-64 h-80 md:w-80 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={victoriaImg}
              alt="Victoria, founder of Image Voiage"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">
              Victoria
            </h3>
            <p className="font-body text-sm font-medium text-sky-200 uppercase tracking-wider mb-6">
              Image Consultant 
            </p>
            <p className="font-body text-white leading-relaxed mb-4">
              Victoria is dedicated to helping individuals align their personal image with their evolving identity and professional presence. Her work focuses on building confidence through intentional wardrobe choices that reflect authenticity, clarity, and purpose.
            </p>
            <p className="font-body text-white leading-relaxed mb-8">
              Through a thoughtful and structured approach, she supports clients in refining their style, improving fit and coordination, and presenting themselves with confidence in both personal and professional environments.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 font-body text-sm font-semibold text-white shadow-soft hover:bg-white/30 hover:scale-105 transition-all"
            >
              Book a Session with Victoria
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
