import { Container, SimpleGrid, Stack } from "@mantine/core";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ACHIEVEMENTS } from "../data/achivements";
import { AchivementCard } from "../components/ui/AchivementCard";
import { motion } from "motion/react";

export const Achievements = () => {
  return (
    <Container>
      <Stack>
        <SectionTitle>Achievements</SectionTitle>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              key={achievement.title}
            >
              <AchivementCard achievement={achievement} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
