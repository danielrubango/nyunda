"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const sectionIds = ["about", "skills", "experience", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (pathname !== "/") {
      return null;
    }

    const scrollPosition = window.scrollY + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If near bottom of page, activate contact section
    if (window.scrollY + windowHeight >= documentHeight - 50) {
      return "contact";
    }

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          return id;
        }
      }
    }

    if (window.scrollY < 300) {
      return null;
    }

    return null;
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const onScroll = () => {
      const section = handleScroll();
      setActiveSection(section);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, handleScroll]);

  return { activeSection, pathname };
}
