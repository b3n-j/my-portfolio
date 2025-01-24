"use client";

import { cn } from "@/app/_utils/class-names";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Accueil" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "education", label: "Formation" },
  { id: "tech", label: "Technologies" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={cn(
            "relative flex items-center gap-2 group",
            activeSection === id ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
          <motion.div
            className="h-2 w-2 rounded-full bg-current"
            animate={{
              scale: activeSection === id ? 1 : 0.5,
            }}
          />
        </a>
      ))}
    </nav>
  );
} 