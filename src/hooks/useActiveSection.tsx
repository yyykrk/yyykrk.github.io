import { useState } from "react";
import { useEffect } from "react";

type ActiveSectionHookProps = {
  sectionIds: string[];
  options?: IntersectionObserverInit;
};

export const useActiveSection = ({
  sectionIds,
  options,
}: ActiveSectionHookProps) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, options]);

  return activeSectionId;
};
