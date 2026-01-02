import type { ComponentType } from "react";
import { AboutMe } from "../pages/AboutMe";
import { Award } from "../pages/Award";
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
    id: "award",
    label: "Award",
    Component: Award,
  },
];
