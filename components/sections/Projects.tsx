import { FolderGit2 } from "lucide-react";
import { getContent } from "@/data/content";

const content = getContent("en");

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          {content.projects.title}
        </h2>
        <div className="flex flex-col items-center justify-center py-16 px-6 bg-cream/30 rounded-xl border border-cream">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <FolderGit2 size={32} />
          </div>
          <p className="text-lg text-muted text-center max-w-lg">
            {content.projects.status}
          </p>
        </div>
      </div>
    </section>
  );
}
