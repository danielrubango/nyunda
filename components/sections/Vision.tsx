"use client";

import { Lightbulb } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function Vision() {
  const { content } = useLocale();

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          {content.vision.title}
        </h2>
        <div className="flex gap-6 items-start">
          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0">
            <Lightbulb size={24} />
          </div>
          <p className="text-lg text-muted leading-relaxed">
            {content.vision.content}
          </p>
        </div>
      </div>
    </section>
  );
}
