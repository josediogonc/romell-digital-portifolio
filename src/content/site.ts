export type SiteNavigationItem = {
  href: string;
  label: string;
};

export type SiteSocialLink = {
  label: "Instagram" | "LinkedIn" | "Vimeo" | "YouTube";
  url: string;
  display?: string;
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
  role: "Camera Operator & Grip / G&E",
  location: "San Diego, California",
  url: "https://romelltabosa.com",
  description: "San Diego based camera operator and production professional working across camera, Grip & Electric, and video production.",
  email: "romelltabosa@gmail.com",
  phone: {
    display: "+1 323 328 4987",
    value: "+13233284987",
  },
  navigation: [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],
  socials: [
    { label: "Instagram", url: "https://instagram.com/taboshots", display: "@taboshots" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/romelltabosa", display: "linkedin.com/in/romelltabosa" },
    { label: "Vimeo", url: "" },
    { label: "YouTube", url: "" },
  ],
};
