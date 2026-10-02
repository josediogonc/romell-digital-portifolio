export const aboutContent = {
  introduction:
    "I'm a Brazilian photographer, filmmaker and production crew member based in San Diego, California.",
  paragraphs: [
    "My path into filmmaking wasn't conventional. Before moving to the United States, I worked in government in Brazil. I eventually decided to leave that career behind and pursue visual media professionally.",
    "Photography — especially surf photography — was my entry point into the field. What started behind a still camera evolved into filmmaking and eventually into hands-on commercial production work.",
    "Today, I work both behind the camera and across production departments, with experience in camera, grip, audio, focus pulling and general on-set support.",
    "I enjoy being part of small, efficient crews where adaptability matters. Whether I'm operating a camera, helping build a setup or jumping departments to keep production moving, my goal is simple:",
  ],
  pullQuote: "Help the crew get the shot.",
  tools:
    "Photography · Film Production · On-Set Support · Adobe Lightroom · Adobe Premiere Pro",
} as const;

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  employmentType?: string;
  start: string;
  end: string;
  description: readonly string[];
};

export const experienceItems: readonly ExperienceItem[] = [
  {
    company: "Raindrop",
    role: "Production Tech",
    location: "San Diego, California",
    start: "Feb 2026",
    end: "Present",
    description: [
      "Production technician supporting commercial and branded content productions in a fast-paced agency environment. Work across camera, lighting, audio and general production needs, helping crews prepare, execute and wrap shoots efficiently.",
    ],
  },
  {
    company: "Raindrop",
    role: "Grip, Audio Mixer & Production Assistant",
    employmentType: "Freelance",
    location: "San Diego, California",
    start: "Jan 2024",
    end: "Present",
    description: [
      "Work as a contractor on commercial and branded content productions in multiple crew roles, including Grip, Audio Mixer and Production Assistant. Support lighting setups, equipment handling, cable management, on-set audio recording and production logistics while adapting to the needs of each shoot.",
    ],
  },
  {
    company: "Self-employed",
    role: "Freelance Photographer & Filmmaker",
    start: "Mar 2018",
    end: "Present",
    description: [
      "Surf and outdoor photographer and filmmaker working both in and out of the water. Handle projects from capture through final delivery, including photography, video production, editing, color work and media management using Adobe Premiere Pro and Lightroom.",
      "Experienced with DSLR and underwater camera systems in dynamic outdoor environments.",
    ],
  },
];
