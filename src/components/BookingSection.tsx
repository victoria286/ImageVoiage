import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const BookingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !date) return;

    const templateParams = {
      name: name,
      email: email,
      phone: phone || "Not provided",
      date: format(date, "PPP"),
      message: message || "None",
    };

    emailjs
      .send(
        "service_w1ysa9e",
        "template_voveu3k",
        templateParams,
        "tDUR_1ujy9j1cNGJK"
      )
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          console.error("Email failed:", error);
        }
      );
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 gradient-soft">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-6 text-center max-w-lg"
        >
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Request Received!
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Your booking request has been received. Victoria will contact you
            shortly to confirm your session.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Get Started
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Style Session
          </h2>

          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Reserve your personal styling consultation with Victoria.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-elevated space-y-6"
        >

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label>Preferred Date</Label>

            <Popover>
              <PopoverTrigger asChild>

                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-xl",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>

              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">

                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />

              </PopoverContent>
            </Popover>

          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Special Request
            </Label>

            <Textarea
              id="message"
              placeholder="Any notes for your session..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-xl min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full py-6 rounded-xl gradient-cta font-semibold text-base"
          >
            Request Booking
          </Button>

        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;