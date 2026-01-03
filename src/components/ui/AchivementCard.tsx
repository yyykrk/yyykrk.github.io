import { Anchor, Badge, Card, Group, Stack, Text } from "@mantine/core";
import type { Achievement } from "../../data/achivements";

export const AchivementCard = ({
  achievement,
}: {
  achievement: Achievement;
}) => {
  const titleContent = achievement.link ? (
    <Anchor
      href={achievement.link}
      target="_blank"
      rel="noopener noreferrer"
      fw={600}
    >
      {achievement.title}
    </Anchor>
  ) : (
    <Text fw={600}>{achievement.title}</Text>
  );

  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Stack gap={4}>
            {titleContent}
            {achievement.badge && (
              <Badge
                color={achievement.badge.color ?? "gray"}
                variant="light"
                radius="sm"
                tt="none"
              >
                {achievement.badge.label}
              </Badge>
            )}
          </Stack>
          <Text size="sm" c="dimmed">
            {achievement.year}
          </Text>
        </Group>

        <Text size="sm" c="dimmed">
          {achievement.description}
        </Text>
      </Stack>
    </Card>
  );
};
