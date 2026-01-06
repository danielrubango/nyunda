"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { useActiveSection } from "@/lib/use-active-section";
import { locales, localeNames, Locale } from "@/data/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale, content } = useLocale();
  const { activeSection, pathname } = useActiveSection();

  const navItems = [
    { href: "/#about", label: content.nav.about, sectionId: "about" },
    { href: "/#skills", label: content.nav.skills, sectionId: "skills" },
    { href: "/#experience", label: content.nav.experience, sectionId: "experience" },
    { href: "/projects", label: content.nav.projects, isPage: true },
    { href: "/blog", label: content.nav.blog, isPage: true },
    { href: "/#contact", label: content.nav.contact, sectionId: "contact" },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.isPage) {
      return pathname === item.href;
    }
    return item.sectionId === activeSection;
  };

  const handleLangChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            NYUNDA.DEV
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isPage ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                      isActive(item) ? "text-primary" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                      isActive(item) ? "text-primary" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span className="hidden sm:inline">{localeNames[locale]}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLangChange(loc)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        locale === loc
                          ? "text-primary bg-primary/5"
                          : "text-muted hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            {navItems.map((item) =>
              item.isPage ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                      isActive(item) ? "text-primary" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                      isActive(item) ? "text-primary" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        )}
      </nav>
    </header>
  );
}
