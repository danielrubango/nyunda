import { ArrowDown, Mail } from "lucide-react";
import { getContent } from "@/data/content";

const content = getContent("en");

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground animate-fade-in">
          {content.hero.headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          {content.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            {content.hero.cta.projects}
            <ArrowDown size={18} />
          </a>
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
