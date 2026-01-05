import { Title } from "@mantine/core";
import classes from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Title order={1} className={classes.title}>
      {children}
    </Title>
  );
};
