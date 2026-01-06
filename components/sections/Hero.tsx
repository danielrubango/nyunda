"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { content } = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-cream/50">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-block mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary">
            {content.hero.title}
          </h1>
          <svg
            className="w-full h-3 mt-2"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8C50 2 150 2 198 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-accent"
            />
          </svg>
        </div>
        <p className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          {content.hero.headline}
        </p>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          {content.hero.subtitlePrefix}
          <span className="font-semibold text-foreground">{content.hero.subtitleName}</span>
          {content.hero.subtitleSuffix}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            {content.hero.cta.projects}
            <ArrowRight size={18} />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all hover:bg-accent-hover hover:shadow-lg"
          >
            {content.hero.cta.contact}
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
