import {
  Anchor,
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { AppShell } from "@mantine/core";
import type { SectionDefinition } from "../../data/sections";

type HeaderProps = {
  sections: SectionDefinition[];
  activeSectionId: string | null;
};

export const Header = ({ sections, activeSectionId }: HeaderProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const mainItems = sections.map((section) => (
    <Anchor<"a">
      href={`#${section.id}`}
      key={section.id}
      className={classes.mainLink}
      data-active={section.id === activeSectionId || undefined}
      onClick={close}
    >
      {section.label}
    </Anchor>
  ));

  return (
    <>
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
            aria-label="Toggle navigation menu"
          />
        </Container>
      </AppShell.Header>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="100%"
        position="left"
        padding="lg"
        withOverlay={false}
        hiddenFrom="sm"
        classNames={{ inner: classes.drawerInner }}
      >
        <Stack gap="lg" className={classes.mobileLinks}>
          {mainItems}
        </Stack>
      </Drawer>
    </>
  );
};
