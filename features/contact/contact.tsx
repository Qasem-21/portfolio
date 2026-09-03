"use client";

import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef, useState } from "react";

import { profile, socialLinks } from "@/lib/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { toast } from "sonner";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40 hover:shadow-blue-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kabul, Afghanistan",
    href: "https://maps.google.com/?q=Kabul,Afghanistan",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    hoverColor: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+93 77 860 3711",
    href: "tel:+93778603711",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/40 hover:shadow-purple-500/10",
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "-50px",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Show success toast
    toast.success("Message sent successfully! 🎉", {
      description: "I'll get back to you within 24 hours.",
      duration: 5000,
      icon: <CheckCircle className="size-5 text-emerald-500" />,
    });

    setFormState({ name: "", email: "", message: "" });

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    toast.success("Email copied to clipboard! 📋");
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden border-t border-border/40 py-16 sm:py-20 lg:py-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-foreground/3 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-foreground/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-foreground/2 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Contact
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              Let&apos;s Connect
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you. Feel free to reach out through any of the channels
              below.
            </motion.p>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="mt-8 space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isEmail = method.label === "Email";

                return (
                  <div key={method.label} className="group relative">
                    <a
                      href={method.href}
                      target={
                        method.label === "Location" ? "_blank" : undefined
                      }
                      rel={
                        method.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`relative flex items-center gap-4 rounded-2xl border border-border/60 bg-secondary/20 p-4 transition-all duration-300 ${method.hoverColor} hover:shadow-lg backdrop-blur-sm`}
                    >
                      <div
                        className={`rounded-xl bg-gradient-to-br ${method.color} p-3 transition-colors group-hover:scale-105`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium">{method.value}</p>
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </a>

                    {/* Copy email button */}
                    {isEmail && (
                      <button
                        onClick={copyEmail}
                        className="absolute right-14 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground opacity-0 group-hover:opacity-100"
                        aria-label="Copy email"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </button>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-sm text-muted-foreground">Follow me</span>
              <div className="h-px flex-1 bg-border/60" />
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon =
                    social.label === "GitHub"
                      ? FaGithub
                      : social.label === "LinkedIn"
                        ? FaLinkedin
                        : FaInstagram;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border border-border/60 p-2.5 text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-secondary/50 hover:text-foreground"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance work
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl border border-border/60 bg-secondary/10 p-6 backdrop-blur-sm sm:p-8"
            >
              {/* Form Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-foreground/10 p-2.5">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-emerald-500/10 p-8 text-center"
                >
                  <div className="rounded-full bg-emerald-500/20 p-3">
                    <CheckCircle className="size-8 text-emerald-500" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">Message Sent!</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full overflow-hidden rounded-xl bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-foreground/25 disabled:opacity-70"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  <p className="text-center text-xs text-muted-foreground">
                    <Sparkles className="inline size-3" />I typically respond
                    within 24 hours
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
