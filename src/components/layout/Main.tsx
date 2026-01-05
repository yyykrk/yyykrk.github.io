import { AppShell, Stack } from "@mantine/core";
import type { SectionDefinition } from "../../data/sections";

type MainProps = {
  sections: SectionDefinition[];
};

export const Main = ({ sections }: MainProps) => {
  return (
    <AppShell.Main>
      <Stack gap="xl">
        {sections.map(({ id, Component: SectionComponent }) => (
          <section key={id} id={id}>
            <SectionComponent />
          </section>
        ))}
      </Stack>
    </AppShell.Main>
  );
};
