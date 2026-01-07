import { Container, Stack, Timeline } from "@mantine/core";
import { SectionTitle } from "../components/ui/SectionTitle";
import { EXPERIENCES } from "../data/experiences";
import { ExperienceCard } from "../components/ui/ExperienceCard";
import { motion } from "motion/react";

export const Experience = () => {
  return (
    <Container>
      <Stack>
        <SectionTitle>Experience</SectionTitle>
        <Timeline
          active={EXPERIENCES.length}
          bulletSize={28}
          lineWidth={4}
          color="var(--mantine-color-green-9)"
          styles={{
            itemBullet: {
              backgroundColor: "var(--mantine-color-green-9)",
              borderColor: "var(--mantine-color-green-9)",
            },
          }}
        >
          {EXPERIENCES.map((experience) => (
            <Timeline.Item
              key={`${experience.organization}-${experience.from}-${experience.to}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            </Timeline.Item>
          ))}
          <Timeline.Item
            styles={{
              itemBody: { display: "none" },
              itemBullet: { display: "none" },
            }}
          ></Timeline.Item>
        </Timeline>
      </Stack>
    </Container>
  );
};
