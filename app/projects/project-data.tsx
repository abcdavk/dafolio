export interface Project {
  title: string;
  status: string;
  year: number;
  month: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "MyQuestAPI v2",
    status: "Deprecated",
    year: 2024,
    month: "Apr",
    description:
      "Replacing the old configuration system with a new in-game configuration and new data storage system",
    url: "https://github.com/abcdavk/mQapi/releases/tag/v2.0.0",
  },
  {
    title: "MyShopLoader",
    status: "Deprecated",
    year: 2023,
    month: "Dec",
    description:
      "mSL will process everything you enter in the configuration file, then turn it into a form UI shop. Starting in version 2.0 you can create unlimited shop categories.",
    url: "https://github.com/abcdavk/mQapi/releases/tag/v2.0.0",
  },
  {
    title: "Procedural Sky World Generation",
    status: "Deprecated",
    year: 2023,
    month: "Nov",
    description:
      "Beautiful sky world generation.",
    url: "https://github.com/abcdavk/skies-worldgen",
  },
  {
    title: "MyQuestAPI Legacy",
    status: "Deprecated",
    year: 2023,
    month: "Jun",
    description:
      "Make quests easily without having to type a lot of code with Open Source Quests.",
    url: "https://github.com/abcdavk/mQapi/tree/master",
  }
];
