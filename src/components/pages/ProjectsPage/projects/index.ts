import { Project } from "./types";
import { mobileBanking } from "./mobile-banking";
import { oneView } from "./one-view";
import { productCardRedesign } from "./product-card-redesign";
import { ebookAndBusinessCard } from "./e-book-and-business-card-design";
import { codingProject1 } from "./coding-project-1";
import { codingProject2 } from "./coding-project-2";

export const projects: Project[] = [
  mobileBanking,
  oneView,
  productCardRedesign,
  ebookAndBusinessCard,
  codingProject1,
  codingProject2,
];

export type { Project };
