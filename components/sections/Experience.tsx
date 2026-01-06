import { Briefcase } from "lucide-react";
import { getContent } from "@/data/content";

const content = getContent("en");

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          {content.experience.title}
        </h2>
        <div className="flex gap-6 items-start">
          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
            <Briefcase size={24} />
          </div>
          <p className="text-lg text-muted leading-relaxed">
            {content.experience.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
