import { getContent } from "@/data/content";

const content = getContent("en");

export function Footer() {
  const year = new Date().getFullYear();
  const copyrightText = content.footer.copyright.replace("{year}", year.toString());

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-muted">{copyrightText}</p>
      </div>
    </footer>
  );
}
