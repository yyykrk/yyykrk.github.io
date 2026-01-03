import { AppShell, Container, Text } from "@mantine/core";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <AppShell.Footer
      withBorder={false}
      style={{
        position: "static",
        borderTop: "1px solid var(--mantine-color-gray-3)",
        padding: "1rem 0",
      }}
    >
      <Container size="lg">
        <Text size="sm" ta="center" c="dimmed">
          © {year} Yusuke Ikemoto. All Rights Reserved.
        </Text>
      </Container>
    </AppShell.Footer>
  );
};
