type WorkCategoryBase = {
  id: string;
  number: string;
  title: string;
  introduction?: string;
  hidden?: boolean;
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

export type VideoProductionProject = {
  title: string;
  credit: string;
  youtubeId: string;
  orientation: WorkVideo["orientation"];
};

type GripGalleryMedia =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "video"; src: string; label: string; orientation: "landscape" | "portrait" };

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

export const videoProductionProjects: readonly VideoProductionProject[] = [
  {
    title: "Juan — SqueegePrints | CVEC Profile",
    credit: "Camera · Lighting · Audio · Editing",
    youtubeId: "p5Ad1vYMQXg",
    orientation: "landscape",
  },
  {
    title: "Leah — SunDoc | CVEC Profile",
    credit: "Camera · Lighting · Audio · Editing",
    youtubeId: "rbnQpa_zFWc",
    orientation: "portrait",
  },
];

export const gripGalleryRows: readonly (readonly GripGalleryMedia[])[] = [
  [
    {
      kind: "video",
      src: "/images/grip/grip-horizontal-4.mp4",
      label: "Behind-the-scenes horizontal timelapse",
      orientation: "landscape",
    },
  ],
  [
    {
      kind: "image",
      src: "/images/grip/grip-vertical-1.JPG",
      alt: "Overhead lighting rig above a studio set",
      width: 4284,
      height: 5712,
    },
    {
      kind: "image",
      src: "/images/grip/grip-vertical-2.JPEG",
      alt: "Sound operator holding a boom microphone by the ocean",
      width: 4284,
      height: 5712,
    },
    {
      kind: "image",
      src: "/images/grip/grip-vertical-3.JPG",
      alt: "Camera monitor and lighting on a dark studio set",
      width: 3450,
      height: 4600,
    },
  ],
  [
    {
      kind: "image",
      src: "/images/grip/grip-horizontal-1.jpg",
      alt: "Camera and lighting setup in front of an LED forest backdrop",
      width: 5124,
      height: 3842,
    },
    {
      kind: "image",
      src: "/images/grip/grip-horizontal-2.JPG",
      alt: "Crew, camera, and lights on a studio set",
      width: 5712,
      height: 4284,
    },
  ],
  [
    {
      kind: "image",
      src: "/images/grip/grip-vertical-4.JPG",
      alt: "Camera track and lighting around a bedroom set",
      width: 4284,
      height: 5712,
    },
    {
      kind: "video",
      src: "/images/grip/grip-vertical-6.mp4",
      label: "Behind-the-scenes vertical timelapse",
      orientation: "portrait",
    },
    {
      kind: "image",
      src: "/images/grip/grip-vertical-5.JPG",
      alt: "Camera crew and lighting in front of an LED wall",
      width: 4284,
      height: 5712,
    },
  ],
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
    slots: videoProductionProjects.length,
    layout: "grid",
  },
  {
    id: "focus-pulling",
    number: "03",
    title: "1st AC / Focus Pulling",
    hidden: true,
    kind: "projects",
    slots: 2,
    layout: "grid",
  },
  {
    id: "grip-electric",
    number: "03",
    title: "Grip & Electric",
    introduction:
      "Grip and G&E have been a major part of my commercial production experience, supporting studio and location shoots across a wide range of projects.",
    kind: "bts-gallery",
  },
  {
    id: "surf-photography",
    number: "04",
    title: "Surf Photography",
    introduction:
      "Where it all started. Before moving to the US, I taught myself photography and built a small side business photographing surfers in Brazil. I sold photos directly to surfers, reinvested the income into equipment, and grew my Instagram into a personal photography brand.",
    kind: "surf-gallery",
  },
];
