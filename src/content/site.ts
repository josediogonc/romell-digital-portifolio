export type SiteNavigationItem = {
  href: string;
  label: string;
};

export type SiteSocialLink = {
  label: "Instagram" | "LinkedIn" | "Vimeo" | "YouTube";
  url: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  email: string;
  navigation: readonly SiteNavigationItem[];
  socials: readonly SiteSocialLink[];
};

export const siteConfig: SiteConfig = {
  name: "Romell Tabosa",
  role: "Production Tech & Camera Operator",
  location: "San Diego, California",
  email: "",
  navigation: [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ],
  socials: [
    { label: "Instagram", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Vimeo", url: "" },
    { label: "YouTube", url: "" },
  ],
};
