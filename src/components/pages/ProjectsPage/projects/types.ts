export interface ProjectSection {
  id?: string; // for navigation
  title?: string;
  description?: string;
  image?: string; // single image
  images?: string[]; // multiple images
  extraText?: string;
  bullets?: string[];
}

// Type aliases for repeated structures
export type ExtraImageData = {
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
};

export type NewSectionData = {
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
};

// Section ID keys for TOC navigation
export type SectionIdKey =
  | "hero"
  | "overview"
  | "solution"
  | "challenge"
  | "process"
  | "images"
  | "extraImage01"
  | "extraImage02"
  | "extraImage03"
  | "extraImage04"
  | "extraImage05"
  | "extraImages"
  | "newSection"
  | "newSection01"
  | "newSection02"
  | "newSection03"
  | "results";

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

export interface Project extends ProjectCardData {
  role: string;
  client?: string;
  duration?: string;
  overview: string;
  // Allow additional properties for flexibility
  [key: string]: any;
  challenge?: string;
  solution?: string;
  extraText?: string;
  images?: string[];

  // Legacy fields for backward compatibility
  discovery?: string;
  exploration?: string;
  design?: string;
  shipping?: string;
  results?: string[];

  // Extra image sections
  extraImage01?: ExtraImageData;
  extraImage02?: ExtraImageData;
  extraImage03?: ExtraImageData;
  extraImage04?: ExtraImageData;
  extraImage05?: ExtraImageData;

  // Extra description fields
  descriptionExtra01?: string[];
  descriptionExtra02?: string;
  descriptionExtra03?: string;
  descriptionExtra04?: string;
  descriptionExtra05?: string;

  // New section fields
  newSection01?: NewSectionData;
  newSection02?: NewSectionData;
  newSection03?: NewSectionData;

  // Extra section
  extraSection?: {
    title: string;
    content: string;
  };

  // Extra images
  extraImages?: {
    title: string;
    description: string;
    images: string[];
  };

  // Custom sections
  customSections?: Array<{
    title: string;
    content: string;
    image?: string;
  }>;

  // Process section configuration (legacy)
  processTitle?: string;
  processDescription?: string;
  processPhases?: Array<{
    title: string;
    description: string;
    image?: string;
  }>;

  // Section ID mapping - maps standard sections to their IDs for TOC navigation
  sectionIds?: Partial<Record<SectionIdKey, string>> & {
    customSectionIds?: string[];
  };

  // Table of contents (legacy name, also supports toc)
  tableOfContents?: {
    title?: string;
    items: Array<{
      id: string;
      label: string;
      subsections?: Array<{
        id: string;
        label: string;
      }>;
    }>;
  };
}
