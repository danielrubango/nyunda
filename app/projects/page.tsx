"use client";

import Link from "next/link";
import { FolderGit2, ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function ProjectsPage() {
  const { content } = useLocale();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {content.nav.about}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          {content.projects.title}
        </h1>

        <div className="flex flex-col items-center justify-center py-24 px-6 bg-cream/30 rounded-xl border border-cream">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8">
            <FolderGit2 size={40} />
          </div>
          <p className="text-lg text-muted text-center max-w-lg leading-relaxed">
            {content.projects.status}
          </p>
        </div>
      </div>
    </div>
  );
}
