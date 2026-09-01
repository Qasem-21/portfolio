'use client'
import { about } from "@/lib/constants";
import { Briefcase, FolderGit2, MapPin } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-50px",
  });

  return (
    <section
      id= "about"
      ref={ref}
      className="relative overflow-hidden border-t border-border/40 py-18 lg:py-20"
    >
      <div className="container-page">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            {/* Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                About
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              {about.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]"
            >
              {about.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="space-y-1.5 rounded-2xl border border-border/60 bg-secondary/30 p-5 backdrop-blur-sm transition-colors hover:border-border sm:p-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  <span className="text-[0.7rem] font-medium uppercase tracking-wider">
                    {about.location.label}
                  </span>
                </div>
                <p className="text-[0.95rem] font-semibold sm:text-[1.05rem]">
                  {about.location.value}
                </p>
              </div>

              <div className="space-y-1.5 rounded-2xl border border-border/60 bg-secondary/30 p-5 backdrop-blur-sm transition-colors hover:border-border sm:p-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="size-4" />
                  <span className="text-[0.7rem] font-medium uppercase tracking-wider">
                    {about.experience.label}
                  </span>
                </div>
                <p className="text-[0.95rem] font-semibold sm:text-[1.05rem]">
                  {about.experience.value}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Experience Card */}
              <motion.div
                variants={statVariants}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/0 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-foreground/10 p-2.5 text-foreground">
                      <Briefcase className="size-5" />
                    </div>
                    <span className="text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                      Experience
                    </span>
                  </div>
                  <p className="text-[clamp(2.8rem,5vw,4.2rem)] font-bold leading-[1] tracking-[-0.03em]">
                    {about.experience.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {about.experience.label}
                  </p>
                </div>
              </motion.div>

              {/* Projects Card */}
              <motion.div
                variants={statVariants}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/0 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-foreground/10 p-2.5 text-foreground">
                      <FolderGit2 className="size-5" />
                    </div>
                    <span className="text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                      Projects
                    </span>
                  </div>
                  <p className="text-[clamp(2.8rem,5vw,4.2rem)] font-bold leading-[1] tracking-[-0.03em]">
                    {about.projects.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {about.projects.label}
                  </p>
                </div>
              </motion.div>

              {/* Decorative "Get in touch" hint */}
              <motion.div
                variants={statVariants}
                className="col-span-1 sm:col-span-2"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/20 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Want to work together?
                      </p>
                      <p className="text-[1rem] font-semibold sm:text-[1.1rem]">
                        Let&apos;s build something amazing
                      </p>
                    </div>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-foreground/20"
                    >
                      Get in touch
                      <span className="opacity-70">→</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
