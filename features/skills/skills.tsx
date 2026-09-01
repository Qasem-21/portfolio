// app/components/skills.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { skills } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const skillIconMap: Record<string, React.ElementType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  MySQL: SiMysql,
  "Git & GitHub": SiGit,
  Docker: SiDocker,
};

// Skill categories for organization
const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
  },
  {
    name: "Database",
    icon: "🗄️",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20",
  },
  {
    name: "Tools & DevOps",
    icon: "🛠️",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/20",
  },
];

// Group skills by category
const getSkillCategory = (skillName: string): string => {
  const frontend = ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"];
  const backend = ["Node.js", "Express.js", "NestJS"];
  const database = ["PostgreSQL", "Prisma", "MySQL"];
  const tools = ["Git & GitHub", "Docker"];

  if (frontend.includes(skillName)) return "Frontend";
  if (backend.includes(skillName)) return "Backend";
  if (database.includes(skillName)) return "Database";
  if (tools.includes(skillName)) return "Tools & DevOps";
  return "Frontend";
};

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skillIconMap[skill.name];

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/20 p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-start gap-4">
        {/* Icon and Name */}
        <div className="flex w-full items-center gap-3">
          <div className="rounded-xl bg-foreground/10 p-2.5 text-foreground transition-colors group-hover:bg-foreground/20">
            {Icon && <Icon className="size-5" />}
          </div>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Proficiency</span>
            <span className="font-mono font-medium tabular-nums">
              {skill.percentage}%
            </span>
          </div>
          <div className="relative mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{
                duration: 1.2,
                delay: 0.3 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-foreground/80 to-foreground"
              style={{
                width: isHovered ? `${skill.percentage}%` : undefined,
              }}
            />
          </div>
        </div>

        {/* Percentage number that appears on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="absolute right-4 top-4 rounded-full bg-foreground/10 px-2.5 py-1 text-[10px] font-mono font-medium tabular-nums"
        >
          {skill.percentage}%
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "-50px",
  });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = getSkillCategory(skill.name);
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative overflow-hidden border-t border-border/40 py-12 sm:py-12 lg:py-14"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-foreground/3 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-foreground/3 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Skills & Expertise
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              Technologies I Work With
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base text-muted-foreground sm:text-lg"
            >
              A comprehensive overview of my technical toolkit and proficiency
              levels across different domains.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => {
              const skillsInCategory = groupedSkills[category.name] || [];
              if (skillsInCategory.length === 0) return null;

              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg bg-gradient-to-r ${category.color} p-2`}
                    >
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {category.name}
                    </h3>
                    <div className="h-px flex-1 bg-border/60" />
                    <span className="text-sm text-muted-foreground">
                      {skillsInCategory.length}
                    </span>
                  </div>

                  {/* Skills Cards */}
                  <div className="cursor-pointer grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {skillsInCategory.map((skill, index) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={index + categoryIndex * 10}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-12 rounded-3xl border border-border/60 bg-secondary/20 p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight">
                  {skills.length}
                </p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight">4</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight">88%</p>
                <p className="text-sm text-muted-foreground">Average Proficiency</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight">✨</p>
                <p className="text-sm text-muted-foreground">Always Learning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}