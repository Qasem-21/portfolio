"use client";

import {
    BookOpen,
    FileText,
    Mail,
    Menu,
    X
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, profile } from "@/lib/constants";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-50 border-t border-border bg-background"
    >
      <nav className="mx-auto flex h-20 max-w-[1800px] items-center border-x border-border px-6">
        {/* Logo */}
        <a
          href="#"
          className="flex h-full w-20 shrink-0 items-center justify-center"
        >
          <span className="font-mono text-xl font-bold tracking-[-0.15em]">
            Qasem
            <span className="text-muted-foreground">/</span>
          </span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className="hidden h-full items-center gap-2 border-r border-border px-6 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <Mail className="size-4 text-foreground" />
          {profile.email}
        </a>

        {/* Center */}
        <div className="hidden ml-4 items-center justify-center md:flex">
          <ThemeToggle />
        </div>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center md:flex">
          {navigation.map((item, index) => {
            const Icon =
              index === 0 ? FileText : index === 1 ? FaGithub : BookOpen;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-full py-2 items-center gap-2 border-l border-border px-5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="size-[18px]" />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex size-9 items-center justify-center"
            aria-label="Toggle navigation"
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border bg-background px-6 py-5 md:hidden"
        >
          <div className="flex flex-col">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-border py-4 text-sm"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}