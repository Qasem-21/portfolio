"use client";

import { hero, profile } from "@/lib/constants";
import { Code2, Mail, MoveUpRight, Sparkles, Zap } from "lucide-react";
import type { TargetAndTransition } from "motion/react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatAnimation: TargetAndTransition = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-foreground/3 blur-2xl" />
      </div>

      <div className="container-page relative min-h-[calc(100vh-4rem)]">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center py-8 lg:py-12"
          >
            {/* Status Badge */}
            <motion.div variants={item} className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {hero.eyebrow || "Available for work"}
                </span>
              </div>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              variants={item}
              className="max-w-3xl text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em]"
            >
              {profile.name.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                  {index === 0 && (
                    <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      .
                    </span>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Animated Role */}
            <motion.div variants={item} className="mt-4">
              <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground sm:text-xl">
                <Code2 className="size-5" />
                <span>
                  <TypeAnimation
                    sequence={[
                      profile.role || "Frontend Developer",
                      2000,
                      "Next.js Developer",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "React.js Developer",
                      2000,
                      "typeScript",
                      2000,
                      "Nest.js Developer",
                      2000,
                      "Express.js Developer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                  />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.introduction ||
                "Passionate Frontend Developer crafting modern, responsive, and user-centric digital experiences with cutting-edge web technologies."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-foreground/25"
              >
                Lets Talk
                <MoveUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/50"
              >
                View Projects
                <Sparkles className="size-4" />
              </motion.a>
            </motion.div>

            {/* Tech Stack Tags */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Nest",
                  "Express",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center py-8 lg:py-0"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={floatAnimation}
                className="absolute -inset-4 rounded-full border border-foreground/10"
              />

              {/* Decorative circles */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-foreground/5"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.2 }}
                className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-foreground/5"
              />

              {/* Portrait Image Container */}
              <motion.div
                animate={floatAnimation}
                className="relative aspect-square w-[320px] sm:w-[380px] lg:w-[440px]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5" />
                <Image
                  src="/images/qasem.png"
                  alt={`${profile.name} portrait`}
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 440px"
                  className="rounded-full object-cover object-center"
                  style={{
                    objectPosition: "center 55%", // Moves image down slightly
                  }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 rounded-2xl bg-background/90 px-4 py-2 shadow-lg backdrop-blur-sm border border-border/60"
              >
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-foreground" />
                  <span className="text-xs font-medium">2+ Years</span>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -left-4 rounded-2xl bg-background/90 px-4 py-2 shadow-lg backdrop-blur-sm border border-border/60"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">10+ Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>

        {/* Bottom right email hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground lg:flex"
        >
          <Mail className="size-3" />
          {profile.email}
        </motion.div>
      </div>
    </section>
  );
}
