import { useMemo } from "react";

import { AppShell } from "@mantine/core";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { Footer } from "./components/layout/Footer";
import { SECTIONS } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

export const App = () => {
  const observerOptions = useMemo(
    () => ({ rootMargin: "-50% 0px -50% 0px" }),
    []
  );
  const activeSectionId = useActiveSection({
    sectionIds: SECTIONS.map((section) => section.id),
    options: observerOptions,
  });

  return (
    <AppShell padding="md" header={{ height: "var(--app-header-height)" }}>
      <Header sections={SECTIONS} activeSectionId={activeSectionId} />
      <Main sections={SECTIONS} />
      <Footer />
    </AppShell>
  );
};
