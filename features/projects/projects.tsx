// app/components/projects.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "motion/react";
import {
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectsData } from "@/lib/constants";


type Project = typeof projectsData[0];

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
    y: 40,
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

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/20 transition-all duration-500 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 ${
        project.featured
          ? "ring-1 ring-foreground/20 ring-offset-2 ring-offset-background"
          : ""
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 rounded-full bg-foreground/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background backdrop-blur-sm">
          Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/9] bg-secondary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-foreground/90 px-5 py-2.5 text-sm font-medium text-background backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-foreground/25"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="size-4" />
              Live Demo
            </span>
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <FaGithub className="size-4" />
              Code
            </span>
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary/50 px-2.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors group-hover:bg-foreground/10 group-hover:text-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full bg-secondary/50 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-end gap-2 border-t border-border/40 pt-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
            aria-label="Live Demo"
          >
            <ExternalLink className="size-4" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
            aria-label="GitHub Repository"
          >
            <FaGithub className="size-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "-50px",
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden border-t border-border/40 py-16 sm:py-20 lg:py-18"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-foreground/3 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-foreground/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-foreground/2 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base text-muted-foreground sm:text-lg"
            >
              A selection of my recent work showcasing my skills and expertise
              in modern web development.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* View More CTA */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-4"
          >
            <motion.a
              href="https://github.com/qasem-21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 rounded-full border border-border/60 bg-secondary/20 px-6 py-3 text-sm font-medium transition-all hover:border-foreground/20 hover:bg-secondary/50 hover:shadow-lg"
            >
              <FaGithub className="size-4" />
              View More on GitHub
              <Sparkles className="size-4 text-muted-foreground transition-transform group-hover:rotate-12" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}