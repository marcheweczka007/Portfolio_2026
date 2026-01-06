import { Project, ProjectCardData } from "./types";
// import { kitchenDisplay } from "./KitchenDisplay";
import { oneView } from "./one-view";
import { productCardRedesign } from "./product-card-redesign";
import { infracostProjects } from "./infracostProjects";
import { kiosk } from "./kiosk";
import { codingProject2 } from "./coding-project-2";

// Helper function to extract only ProjectCard required fields
const toProjectCardData = (project: Project): ProjectCardData => ({
  id: project.id,
  title: project.title,
  description: project.description,
  imageUrl: project.imageUrl,
  tags: project.tags,
  year: project.year,
  comingSoon: project.comingSoon,
});

// Full projects array for detail pages
export const projects: Project[] = [
  oneView,
  infracostProjects,
  productCardRedesign,
  // kitchenDisplay,
  kiosk,
  codingProject2,
];

// Projects array with only ProjectCard fields
export const projectCardsData: ProjectCardData[] =
  projects.map(toProjectCardData);

export type { Project };
