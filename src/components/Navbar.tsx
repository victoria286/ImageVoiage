import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo1.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Booking", href: "#booking" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md shadow-soft`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logoImg} alt="Image Voiage logo" className="h-12 w-auto" />
          <span
            className="text-lg font-semibold tracking-[0.04em] text-blue-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Image Voiage
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full gradient-cta font-body text-sm font-semibold text-cta-foreground shadow-soft hover:shadow-elevated transition-all hover:scale-105"
        >
          Book a Session
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-[1.025rem] text-foreground/80 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      const target = document.querySelector(link.href);
                      if (target) {
                        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  className="inline-flex items-center px-6 py-3 rounded-full gradient-cta font-body text-sm font-semibold text-cta-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
