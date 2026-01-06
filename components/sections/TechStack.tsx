"use client";

import { useLocale } from "@/lib/locale-context";

export function TechStack() {
  const { content } = useLocale();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {content.techStack.title}
        </h2>
        <p className="text-lg text-muted mb-12">
          {content.techStack.intro}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {content.techStack.categories.map((category) => (
            <div
              key={category.name}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary/20 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
