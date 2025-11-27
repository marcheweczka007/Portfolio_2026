// Minimal type for ProjectCard display
export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year?: string;
  comingSoon?: boolean;
}

// Full Project type for detail pages
export interface Project extends ProjectCardData {
  role: string;
  client?: string;
  duration?: string;
  overview: string;
  challenge: string;
  solution: string;
  discovery: string;
  exploration: string;
  design: string;
  shipping: string;
  results: string[];
  images: string[];
  // Optional fields for custom content
  extraImage?: string;
  extraImages?: string[];
  extraText?: string;
  extraSection?: {
    title: string;
    content: string;
  };
  customSections?: Array<{
    title: string;
    content: string;
    image?: string;
  }>;
}
