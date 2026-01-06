import { Mail, Linkedin } from "lucide-react";
import { getContent } from "@/data/content";

const content = getContent("en");

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          {content.contact.title}
        </h2>
        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
          {content.contact.cta}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            <Mail size={20} />
            {content.contact.email}
          </a>
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary font-medium rounded-lg transition-all hover:bg-primary hover:text-white"
          >
            <Linkedin size={20} />
            {content.contact.labels.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}
