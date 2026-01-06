import type { ComponentType } from "react";
import { AboutMe } from "../pages/AboutMe";
import { Achievements } from "../pages/Achievements";
import { Experience } from "../pages/Experience";

export type SectionDefinition = {
  id: string;
  label: string;
  Component: ComponentType;
};

export const SECTIONS: SectionDefinition[] = [
  {
    id: "about",
    label: "About",
    Component: AboutMe,
  },
  {
    id: "experience",
    label: "Experience",
    Component: Experience,
  },
  {
    id: "achievements",
    label: "Achievements",
    Component: Achievements,
  },
];
