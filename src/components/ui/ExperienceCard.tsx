import { Badge, Card, Group, List, Stack, Text } from "@mantine/core";
import type { Experience } from "../../data/experiences";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="md">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Stack gap={4} flex={1}>
            <Text fw={600}>{experience.title}</Text>
            <Text size="sm" c="dimmed">
              {experience.organization}
            </Text>
            <Text size="sm" c="dimmed">
              {experience.location}
            </Text>
          </Stack>
          <Text size="sm" fw={500} c="dimmed">
            {experience.from} – {experience.to || "Present"}
          </Text>
        </Group>
      </Card.Section>

      <Card.Section inheritPadding py="md">
        <List spacing="xs" center>
          {experience.description.map((desc, index) => (
            <List.Item key={index}>
              <Text size="sm">{desc}</Text>
            </List.Item>
          ))}
        </List>
      </Card.Section>

      {experience.skills && experience.skills.length > 0 && (
        <Card.Section inheritPadding py="md">
          <Stack gap={6}>
            <Text size="sm" fw={600} c="dimmed">
              Skills
            </Text>
            <Group gap="xs" wrap="wrap">
              {experience.skills.map((skill) => (
                <Badge
                  key={skill}
                  color="green"
                  variant="light"
                  radius="sm"
                  tt="none"
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Card.Section>
      )}
    </Card>
  );
};
