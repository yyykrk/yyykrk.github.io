import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { SectionTitle } from "../components/ui/SectionTitle";
import { socialLinks } from "../data/socialLinks";
import classes from "./AboutMe.module.css";

export const AboutMe = () => {
  const highlightTags = [
    "ML/AI Solution Development",
    "Project Management",
    "Kaggle Master",
  ];

  const stats = [
    { label: "Years in ML", value: "5+" },
    { label: "Projects delivered", value: "5+" },
    { label: "Kaggle gold medals", value: "3" },
  ];

  return (
    <Container>
      <Stack>
        <SectionTitle>About Me</SectionTitle>
        <Card
          radius="xl"
          p={{ base: "lg", md: "xl" }}
          withBorder
          shadow="lg"
          className={classes.card}
        >
          <Card.Section inheritPadding py="md">
            <Stack gap={0}>
              <Text fw={800} className={classes.name}>
                Ikemoto Yusuke
              </Text>
              <Text size="xl" c="var(--mantine-color-gray-7)">
                Machine Learning Engineer
              </Text>
              <Group gap={8} wrap="nowrap">
                <FaBuilding
                  size={18}
                  color="var(--mantine-color-gray-6)"
                  aria-hidden="true"
                />
                <Text size="lg" c="var(--mantine-color-gray-7)">
                  Preferred Networks, Inc.
                </Text>
              </Group>
              <Group gap={8} wrap="nowrap">
                <FaMapMarkerAlt
                  size={18}
                  color="var(--mantine-color-gray-6)"
                  aria-hidden="true"
                />
                <Text size="lg" c="var(--mantine-color-gray-7)">
                  Tokyo, Japan
                </Text>
              </Group>
            </Stack>
          </Card.Section>
          <Group align="stretch" gap="xl" justify="space-between" wrap="wrap">
            <Stack align="center" gap="md">
              <Paper radius="lg" p="sm" withBorder>
                <Image
                  src="/profile.png"
                  radius="md"
                  h={160}
                  w="100%"
                  fit="cover"
                  alt="Profile Image"
                />
              </Paper>
              <Group gap="xs" justify="center">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <ActionIcon
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtle"
                    radius="xl"
                    size="lg"
                    aria-label={label}
                  >
                    <Icon size={20} color="var(--mantine-color-green-7)" />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>

            <Stack gap="md" className={classes.detailsStack}>
              <Text
                c="var(--mantine-color-gray-7)"
                size="md"
                className={classes.description}
              >
                {"　"}I am a machine learning engineer with 5+ years of
                experience in applying machine learning and generative AI to
                real-world business problems. I have experience working in
                client-facing roles with large enterprises, covering the full
                machine learning lifecycle—from requirement definition and
                modeling to prototyping and deployment into production
                environments. In addition to hands-on development, I have led
                projects and managed teams, bridging technical work and
                stakeholder communication.
                {"\n　"}Outside of my professional work, I actively participate
                in Kaggle as a hobby and am a Kaggle Master with 3 gold medals.
                I have competed across a wide range of domains, including
                tabular data, natural language processing, and computer vision.
                {"\n　"}I am motivated to solve real-world challenges by
                combining ML/AI technologies with solid software engineering
                practices.
              </Text>
              <Group gap="xs" wrap="wrap">
                {highlightTags.map((tag) => (
                  <Badge
                    key={tag}
                    color="green"
                    variant="light"
                    size="md"
                    tt="none"
                  >
                    {tag}
                  </Badge>
                ))}
              </Group>
              <Divider color="var(--mantine-color-gray-2)" />
              <Group gap="xl" wrap="wrap">
                {stats.map(({ label, value }) => (
                  <Stack key={label} gap={2}>
                    <Text fw={700} className={classes.statValue}>
                      {value}
                    </Text>
                    <Text size="sm" c="var(--mantine-color-gray-6)">
                      {label}
                    </Text>
                  </Stack>
                ))}
              </Group>
            </Stack>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
};
