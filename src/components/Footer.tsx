import { Mail, MapPin, Clock, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="gradient-navy text-navy-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Image Voiage</h3>
            <p className="font-body text-navy-foreground/70 leading-relaxed text-sm max-w-xs">
              Where inner transformation meets outer expression. Step confidently into your next chapter.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-navy-foreground/50 hover:text-sky transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-navy-foreground/50 hover:text-sky transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-navy-foreground/50 hover:text-sky transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-navy-foreground/70">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-sky" />
                <a href="mailto:victoria@imagevoiyagellc.com" className="hover:text-sky transition-colors">
                  victoria@imagevoiyagellc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-sky" />
                <span>Available for in-person & virtual consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 text-sky" />
                <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-navy-foreground/40">
            © {new Date().getFullYear()} Image Voiage Consulting LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
