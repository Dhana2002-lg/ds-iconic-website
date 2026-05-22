import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form));

  setSubmitting(true);

  try {
    // 1. RESET FORM
    form.reset();

    // 2. SHOW THANK YOU MESSAGE
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    // 3. OPEN WHATSAPP
    setTimeout(() => {
      const msg = `
New Lead 🔥

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Project: ${data.project}
Message: ${data.message}
      `;

      window.open(
        `https://wa.me/916309508878?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    }, 800);

  } catch (err) {
    console.error("Form submit error:", err);
  } finally {
    setSubmitting(false);
  }
};
  return (
    <section id="contact" className="relative py-28 sm:py-40 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— Begin Your Legacy</span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1] text-balance">
            Let's plan your <span className="italic gradient-luxe-text">site visit</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-soft space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
  <Field
    label="Full Name"
    name="name"
    required
    placeholder="Enter your full name"
    pattern="^[A-Za-z ]+$"
    title="Only letters are allowed"
    onInput={(e) => {
      const target = e.currentTarget;

      // Remove numbers & special characters
      target.value = target.value.replace(/[^a-zA-Z ]/g, "");

      // Capitalize first letter of every word
      target.value = target.value.replace(
        /\b\w/g,
        (char) => char.toUpperCase()
      );
    }}
  />

  <Field
    label="Phone Number"
    name="phone"
    type="tel"
    required
    maxLength={10}
    placeholder="Enter phone number"
    pattern="[0-9]{10}"
    title="Enter valid 10 digit phone number"
    onInput={(e) => {
      const target = e.currentTarget;

      // Only numbers allowed
      target.value = target.value.replace(/\D/g, "");
    }}
  />
</div>

<div className="grid sm:grid-cols-2 gap-5">
  <Field
    label="Email"
    name="email"
    type="email"
    placeholder="Enter email"
    pattern="^[a-zA-Z0-9@.]+$"
    title="Only letters, numbers and @ allowed"
  />

  <Field
    label="Project Interested In"
    name="project"
    placeholder="e.g. Sandy Beach"
  />
</div>

<div>
  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
    Message
  </label>

  <textarea
    name="message"
    rows={4}
    placeholder="Tell us a little about what you're looking for..."
    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
    onInput={(e) => {
      const target = e.currentTarget;

      // Prevent special symbols except basic punctuation
      target.value = target.value.replace(
        /[^a-zA-Z0-9 .,!?@()-]/g,
        ""
      );
    }}
  />
</div>
            <div className="flex justify-center pt-4">
  <button
    disabled={submitting}
    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00883d] to-[#fb111f] text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg"
  >
    {submitting ? "Sending..." : "Request Site Visit"}
    <Send className="h-4 w-4" />
  </button>
 
</div>
 {submitted && (
  <div className="mt-5 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center">
    <h3 className="text-lg font-semibold text-green-600">
      Thank You!
    </h3>

    <p className="mt-1 text-sm text-muted-foreground">
      Our team will contact you within 24 hours regarding your site visit.
    </p>
  </div>
)}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-3xl bg-foreground text-background p-8 shadow-luxe">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-background/60">Office</div>
                  <p className="mt-1 leading-relaxed">
                    Opp. Reliance Smart, Bank Colony,<br />
                    Main Road, Narsipatnam – 531116
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-background/60">Director — D. Satyanarayana, M.Com</div>
                  <a href="tel:9398634198" className="mt-1 block font-display text-3xl text-shimmer">9398634198</a>
                </div>
              </div>
              <a
                href="https://wa.me/919398634198"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full rounded-full bg-accent-green text-white px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border h-64">
  <iframe
    title="DS Iconic location map"
    src="https://maps.google.com/maps?q=Opp.%20Reliance%20Smart,%20Bank%20Colony,%20Narsipatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
    className="h-full w-full"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        {...props}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
      />
    </div>
  );
}