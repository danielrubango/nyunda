"use client";

import { useLocale } from "@/lib/locale-context";

export function About() {
  const { content } = useLocale();

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          {content.about.title}
        </h2>
        <div className="space-y-6">
          {content.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-muted leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
