import { AppShell } from "@mantine/core";
import type { SectionDefinition } from "../../data/sections";

type MainProps = {
  sections: SectionDefinition[];
};

export const Main = ({ sections }: MainProps) => {
  return (
    <AppShell.Main>
      {sections.map(({ id, Component: SectionComponent }) => (
        <section key={id} id={id}>
          <SectionComponent />
        </section>
      ))}
    </AppShell.Main>
  );
};
