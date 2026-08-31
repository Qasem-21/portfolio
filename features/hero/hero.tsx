"use client";

import Image from "next/image";
import { motion,type Variants } from "motion/react";
import { ArrowUpRight, Mail, MoveUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { hero, profile, socialLinks } from "@/lib/constants";

const container : Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.12,
    },
  },
};

const item : Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SocialIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return <FaGithub className="size-6" />;
  }

  if (label === "LinkedIn") {
    return <FaLinkedin className="size-6" />;
  }

  return <ArrowUpRight className="size-6" />;
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-3rem)] overflow-hidden">
      <div className="container-page relative min-h-[calc(100svh-3rem)]">
        {/* Main Hero Content */}
        <div className="grid min-h-[calc(100svh-3rem)] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center justify-center text-center sm:py-16 lg:items-start lg:py-10 lg:pl-28 lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="mb-7">
              <div className="relative inline-flex">
                <span className="rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm">
                  {hero.eyebrow}
                </span>

                {/* Speech bubble */}
                <span
                  className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rotate-45 bg-foreground"
                  aria-hidden
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="max-w-2xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
            >
              {profile.name.split(" ").map((word, index) => (
                <span
                  key={word}
                  className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                >
                  {word}

                  {index === 0 && (
                    <span className="text-muted-foreground">.</span>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={item}
              className="mt-8 text-base font-semibold tracking-tight text-muted-foreground sm:text-lg"
            >
              {profile.role}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-10 max-w-md text-base leading-8 text-muted-foreground sm:mt-14 sm:text-lg"
            >
              {profile.introduction}
            </motion.p>

            {/* CTA */}
            <motion.div variants={item} className="mt-6">
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex size-28 items-center justify-center rounded-full bg-foreground text-center text-sm font-medium text-background transition-transform sm:size-32"
              >
                <span className="absolute inset-2 rounded-full border border-background/40" />

                <span className="relative flex flex-col items-center">
                  Let&apos;s
                  <br />
                  talk
                </span>

                {/* <MoveUpRight className="absolute right-8 top-8 size-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[420px] items-end justify-center lg:min-h-0"
          >
            {/* Decorative Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-[4%] right-[4%] aspect-square w-[78%] max-w-[600px] rounded-full"
            />

            {/* Portrait Image */}
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 h-[90%] w-[80%] max-w-[520px] lg:h-[75%] lg:w-[85%] lg:max-w-[650px]"
            >
              <Image
                src="/images/qasem.png"
                alt={`${profile.name} portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 50vw"
                className="object-contain object-bottom"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.aside
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute top-96 left-16 z-20 flex -translate-x-1/2 flex-col items-center gap-7 lg:bottom-12 lg:left-6 lg:translate-x-0 lg:flex-col"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ x: 4, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground transition-colors hover:text-foreground lg:hover:translate-x-1"
            >
              <SocialIcon label={social.label} />
            </motion.a>
          ))}
        </motion.aside>
      </div>

      {/* Bottom Email Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground lg:flex"
      >
        <Mail className="size-3" />
        Lets build something
      </motion.div>
    </section>
  );
}
