import { AppShell, Stack } from "@mantine/core";
import type { SectionDefinition } from "../../data/sections";

type MainProps = {
  sections: SectionDefinition[];
};

export const Main = ({ sections }: MainProps) => {
  return (
    <AppShell.Main>
      <Stack gap="xl">
        {sections.map(({ id, Component: SectionComponent }, index) => {
          const backgroundColor =
            index % 2 === 0
              ? "var(--mantine-color-white)"
              : "var(--mantine-color-gray-0)";

          return (
            <section
              key={id}
              id={id}
              style={{
                backgroundColor: backgroundColor,
                padding: "var(--mantine-spacing-xl) 0",
              }}
            >
              <SectionComponent />
            </section>
          );
        })}
      </Stack>
    </AppShell.Main>
  );
};
