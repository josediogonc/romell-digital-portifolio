export type SiteNavigationItem = {
  href: string;
  label: string;
};

export type SiteSocialLink = {
  label: "Instagram" | "LinkedIn" | "Vimeo" | "YouTube";
  url: string;
};

export type SitePhone = {
  display: string;
  value: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  url: string;
  description: string;
  email: string;
  phone: SitePhone;
  navigation: readonly SiteNavigationItem[];
  socials: readonly SiteSocialLink[];
};

export const siteConfig: SiteConfig = {
  name: "Romell Tabosa",
  role: "Production Tech & Camera Operator",
  location: "San Diego, California",
  url: "https://romelltabosa.com",
  description: "Production Tech, Camera Operator and production crew member based in San Diego, California. Camera, grip, audio, focus pulling and on-set support for commercial and branded productions.",
  email: "romelltabosa@gmail.com",
  phone: {
    display: "(+1) 323 328 4987",
    value: "+13233284987",
  },
  navigation: [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ],
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/taboshots/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/romelltabosa" },
    { label: "Vimeo", url: "" },
    { label: "YouTube", url: "" },
  ],
};
