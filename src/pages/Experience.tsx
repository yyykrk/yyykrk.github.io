import { Container, Stack, Timeline } from "@mantine/core";
import { SectionTitle } from "../components/ui/SectionTitle";
import { EXPERIENCES } from "../data/experiences";
import { ExperienceCard } from "../components/ui/ExperienceCard";

export const Experience = () => {
  return (
    <Container>
      <Stack>
        <SectionTitle>Experience</SectionTitle>
        {/* experienceをTimeline+Cardで表現 */}
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
              <ExperienceCard experience={experience} />
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
