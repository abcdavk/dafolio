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
    title: "MyShopLoader",
    status: "Deprecated",
    year: 2023,
    month: "December",
    description:
      "mSL will process everything you enter in the configuration file, then turn it into a form UI shop. Starting in version 2.0 you can create unlimited shop categories.",
    url: "https://github.com/abcdavk/mQapi/releases/tag/v2.0.0",
  },
  {
    title: "Sky World Gen",
    status: "Deprecated",
    year: 2023,
    month: "November",
    description:
      "Beautiful sky world generation 🌲.",
    url: "https://github.com/abcdavk/skies-worldgen",
  },
  {
    title: "MyShopAPI Legacy",
    status: "Deprecated",
    year: 2023,
    month: "June",
    description:
      "Make quests easily without having to type a lot of code with Open Source Quests.",
    url: "https://github.com/abcdavk/mQapi",
  },
  {
    title: "MyShopAPI Legacy",
    status: "Deprecated",
    year: 2023,
    month: "June",
    description:
      "Make quests easily without having to type a lot of code with Open Source Quests.",
    url: "https://github.com/abcdavk/myShopAPI",
  }
];
