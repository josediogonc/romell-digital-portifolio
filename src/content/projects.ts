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
  },
  {
    slug: "branded-content-01",
    title: "Branded Content 01",
    category: "Branded Content",
    year: "Year pending",
    roles: ["Role details pending"],
  },
  {
    slug: "surf-film-01",
    title: "Surf Film 01",
    category: "Outdoor Filmmaking",
    year: "Year pending",
    roles: ["Role details pending"],
  },
  {
    slug: "surf-photography-01",
    title: "Surf Photography 01",
    category: "Surf Photography",
    year: "Year pending",
    roles: ["Role details pending"],
  },
];
