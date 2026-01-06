"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getContent } from "@/data/content";

const content = getContent("en");

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: content.nav.about },
    { href: "#skills", label: content.nav.skills },
    { href: "#experience", label: content.nav.experience },
    { href: "#projects", label: content.nav.projects },
    { href: "#contact", label: content.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            DR
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
