import { AppShell, Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <AppShell.Footer withBorder={false} className={classes.footer}>
      <Container size="lg">
        <Text size="sm" ta="center" c="dimmed">
          © {year} Yusuke Ikemoto. All Rights Reserved.
        </Text>
      </Container>
    </AppShell.Footer>
  );
};
