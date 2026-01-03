import {
  ActionIcon,
  Container,
  Group,
  Image,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import { SectionTitle } from "../components/ui/SectionTitle";
import { socialLinks } from "../data/socialLinks";

export const AboutMe = () => {
  return (
    <Container>
      <SectionTitle>About Me</SectionTitle>
      <Stack gap="xs">
        <Text
          style={{
            fontSize: "2.0rem",
            fontWeight: "bold",
          }}
        >
          Yusuke Ikemoto
        </Text>
        <Text
          style={{
            fontSize: "1.25rem",
            color: "var(--mantine-color-gray-7)",
            marginTop: rem(-12),
          }}
        >
          Machine Learning Engineer@Preferred Networks, Inc.
        </Text>
        <Group wrap="nowrap" gap="md" align="flex-start">
          <Stack align="center" gap="xs">
            <Image
              src="/profile.png"
              radius="md"
              h={160}
              w="auto"
              fit="contain"
              style={{ border: "1px solid var(--mantine-color-green-9)" }}
            />
            <Group gap="xs" justify="center">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <ActionIcon
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="default"
                  radius="xl"
                  size="md"
                  aria-label={label}
                >
                  <Icon size={18} color="var(--mantine-color-green-9)" />
                </ActionIcon>
              ))}
            </Group>
          </Stack>
          <Text style={{ whiteSpace: "pre-line" }}>
            I am a machine engineer with 5+ years of experience in applying
            machine learning and generative AI to real-world business problems.
            I have experience working in client-facing roles with large
            enterprises, covering the full machine learning lifecycle—from
            requirement definition and modeling to prototyping and deployment
            into production environments. In addition to hands-on development, I
            have led projects and managed teams, bridging technical work and
            stakeholder communication. {"\n"}
            Outside of my professional work, I actively participate in Kaggle as
            a hobby and am a Kaggle Master with 3 gold medals. I have competed
            across a wide range of domains, including tabular data, natural
            language processing, and computer vision.{"\n"}I am motivated to
            solve real-world challenges by combining ML/AI technologies with
            solid software engineering practices.
          </Text>
        </Group>
      </Stack>
    </Container>
  );
};
