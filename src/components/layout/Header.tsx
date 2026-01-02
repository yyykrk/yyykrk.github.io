import { Anchor, Box, Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { AppShell } from "@mantine/core";
import type { SectionDefinition } from "../../data/sections";

type HeaderProps = {
  sections: SectionDefinition[];
  activeSectionId: string | null;
};

export const Header = ({ sections, activeSectionId }: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  const mainItems = sections.map((section) => (
    <Anchor<"a">
      href={`#${section.id}`}
      key={section.id}
      className={classes.mainLink}
      data-active={section.id === activeSectionId || undefined}
    >
      {section.label}
    </Anchor>
  ));

  return (
    <AppShell.Header className={classes.header}>
      <Container className={classes.inner}>
        <Box className={classes.links} visibleFrom="sm">
          <Group gap="sm" justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </AppShell.Header>
  );
};
