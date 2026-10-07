type WorkCategoryBase = {
  id: string;
  number: string;
  title: string;
  introduction?: string;
};

type WorkCategory = WorkCategoryBase & (
  | { kind: "projects"; slots: number; layout: "featured" | "grid" }
  | { kind: "bts-gallery" | "surf-gallery" }
);

export type WorkVideo = {
  label: string;
  youtubeId: string;
  orientation: "landscape" | "portrait";
};

export type VideoWorkProject = {
  title: string;
  role: string;
  production: string;
  videos: readonly [WorkVideo, ...WorkVideo[]];
};

export const cameraProjects: readonly VideoWorkProject[] = [
  {
    title: "Battle Bars",
    role: "Camera Operator",
    production: "Raindrop Agency",
    videos: [
      { label: "Battle Bars", youtubeId: "G8nUXY54G3s", orientation: "landscape" },
    ],
  },
  {
    title: "Dude Wipes — Lil Dudes",
    role: "Camera Operator",
    production: "Raindrop Agency",
    videos: [
      { label: "Lil Dudes 1", youtubeId: "gq-UV1OiW_g", orientation: "portrait" },
      { label: "Lil Dudes 2", youtubeId: "ECqgGDi8ATM", orientation: "portrait" },
      { label: "Lil Dudes 3", youtubeId: "Npdzv8wUQ2U", orientation: "portrait" },
    ],
  },
];

export const workCategories: readonly WorkCategory[] = [
  {
    id: "camera",
    number: "01",
    title: "Camera",
    introduction:
      "Worked as a Camera Operator on commercial productions through Raindrop Agency, shooting across studio environments, practical sets, and LED wall productions.",
    kind: "projects",
    slots: cameraProjects.length,
    layout: "featured",
  },
  {
    id: "video-production-editing",
    number: "02",
    title: "Video Production / Editing",
    introduction:
      "Small scale productions where I handled camera operation, composition, lighting, B camera, audio recording, and post production, including editing the final pieces.",
    kind: "projects",
    slots: 2,
    layout: "grid",
  },
  {
    id: "focus-pulling",
    number: "03",
    title: "1st AC / Focus Pulling",
    kind: "projects",
    slots: 2,
    layout: "grid",
  },
  {
    id: "grip-electric",
    number: "04",
    title: "Grip & Electric",
    introduction:
      "Grip and G&E have been a major part of my commercial production experience, supporting studio and location shoots across a wide range of projects.",
    kind: "bts-gallery",
  },
  {
    id: "surf-photography",
    number: "05",
    title: "Surf Photography",
    introduction:
      "Where it all started. Before moving to the US, I taught myself photography and built a small side business photographing surfers in Brazil. I sold photos directly to surfers, reinvested the income into equipment, and grew my Instagram into a personal photography brand.",
    kind: "surf-gallery",
  },
];
