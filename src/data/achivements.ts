export type Achievement = {
  title: string;
  year: number;
  description: string;
  link?: string;
  badge?: {
    label: string;
    color?: string;
  };
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "The Learning Agency Lab - PII Data Detection (14th / 2,048 teams)",
    year: 2024,
    description:
      "Placed 14th / 2,048 with a gold medal in a Kaggle competition detecting personally identifiable information (PII) in student essays. Built various large language models (e.g. DeBERTa-v3) to detect PII.",
    link: "https://www.kaggle.com/competitions/pii-detection-removal-from-educational-data",
    badge: {
      label: "Kaggle Gold Medal（Team）",
      color: "yellow",
    },
  },
  {
    title: "Predict Student Performance from Game Play (3rd / 2,051 teams)",
    year: 2023,
    description:
      "Placed 3rd / 2,051 with a gold medal in a Kaggle competition predicting whether students will answer the next in-game question correctly. Built GBDTs (e.g. LightGBM) and transformer-based models to predict correctness from their in-game actions.",
    link: "https://www.kaggle.com/competitions/predict-student-performance-from-game-play",
    badge: {
      label: "Kaggle Gold Medal（Team）",
      color: "yellow",
    },
  },
  {
    title: "OSIC Pulmonary Fibrosis Progression (2nd / 2,097 teams)",
    year: 2020,
    description:
      "Placed 2nd / 2,097 with a gold medal in a Kaggle competition forecasting pulmonary fibrosis progression for OSIC. Built CNN-based models to predict forced vital capacity (FVC) from CT scans and tabular metadata.",
    link: "https://www.kaggle.com/competitions/osic-pulmonary-fibrosis-progression",
    badge: {
      label: "Kaggle Gold Medal（Solo）",
      color: "yellow",
    },
  },
];
