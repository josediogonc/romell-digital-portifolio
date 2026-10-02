export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      title?: string;
    };

export type ProjectCredit = {
  label: string;
  value: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  client?: string;
  productionCompany?: string;
  category: string;
  year: number | string;
  roles: readonly string[];
  cover?: string;
  coverAlt?: string;
  featured?: boolean;
  status: "placeholder" | "published";
  summary?: string;
  description?: string;
  responsibilities?: readonly string[];
  heroMedia?: ProjectMedia;
  gallery?: readonly ProjectMedia[];
  credits?: readonly ProjectCredit[];
  externalUrl?: string;
};

// Temporary development entries. Replace with verified project details and media before launch.
export const portfolioProjects: readonly PortfolioProject[] = [
  {
    slug: "commercial-project-01",
    title: "Commercial Project 01",
    category: "Commercial Production",
    year: "Year pending",
    roles: ["Role details pending"],
    featured: true,
    status: "placeholder",
  },
  {
    slug: "branded-content-01",
    title: "Branded Content 01",
    category: "Branded Content",
    year: "Year pending",
    roles: ["Role details pending"],
    status: "placeholder",
  },
  {
    slug: "surf-film-01",
    title: "Surf Film 01",
    category: "Outdoor Filmmaking",
    year: "Year pending",
    roles: ["Role details pending"],
    status: "placeholder",
  },
  {
    slug: "surf-photography-01",
    title: "Surf Photography 01",
    category: "Surf Photography",
    year: "Year pending",
    roles: ["Role details pending"],
    status: "placeholder",
  },
];

export const publishedProjects = portfolioProjects.filter(
  (project) => project.status === "published",
);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export function getNextPublishedProject(slug: string) {
  const projectIndex = publishedProjects.findIndex((project) => project.slug === slug);

  if (projectIndex < 0 || publishedProjects.length < 2) {
    return undefined;
  }

  return publishedProjects[(projectIndex + 1) % publishedProjects.length];
}
