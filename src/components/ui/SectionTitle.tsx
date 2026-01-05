import { Title } from "@mantine/core";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Title
      order={1}
      style={{
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: "var(--mantine-color-green-8)",
        textDecorationThickness: 3,
        textUnderlineOffset: 9,
        marginBottom: 12,
      }}
    >
      {children}
    </Title>
  );
};
