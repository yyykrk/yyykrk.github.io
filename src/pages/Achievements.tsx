import { Container, SimpleGrid, Stack } from "@mantine/core";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ACHIEVEMENTS } from "../data/achivements";
import { AchivementCard } from "../components/ui/AchivementCard";

export const Achievements = () => {
  return (
    <Container>
      <Stack>
        <SectionTitle>Achievements</SectionTitle>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {ACHIEVEMENTS.map((achievement) => (
            <AchivementCard key={achievement.title} achievement={achievement} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
