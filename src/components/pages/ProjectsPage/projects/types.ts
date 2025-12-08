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
export type ImageSectionData = {
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
};

export type ContentSectionData = {
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
};

// Section ID keys for TOC navigation
export type SectionIdKey =
  | "hero"
  | "overview"
  | "overviewTitle"
  | "solution"
  | "challenge"
  | "process"
  | "images"
  | "imageSection01"
  | "imageSection02"
  | "imageSection03"
  | "imageSection04"
  | "imageSection05"
  | "showcaseGallery"
  | "contentSection"
  | "contentSection01"
  | "contentSection02"
  | "contentSection03"
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

export interface ProjectSectionDescriptionStart {
  overviewTitle: string;
  description: string;
}
export interface Project extends ProjectCardData {
  duration?: string;
  projectSectionDescriptionStart?: ProjectSectionDescriptionStart;
  overviewSection: {
    overviewTitle: string;
    overviewDescription: string;
    executionTitle?: string;
    executionDescription?: string;
    exectutionBullets?: string[];
    executionEnding?: string;
  };
  // Allow additional properties for flexibility
  [key: string]: any;
  challenge?: string;
  solution?: string;
  summaryText?: string;
  images?: string[];

  // Legacy fields for backward compatibility
  discovery?: string;
  exploration?: string;
  design?: string;
  shipping?: string;
  results?: string[];

  // Image gallery sections
  imageSection01?: ImageSectionData;
  imageSection02?: ImageSectionData;
  imageSection03?: ImageSectionData;
  imageSection04?: ImageSectionData;
  imageSection05?: ImageSectionData;

  // Text description blocks
  textBlock01?: string[];
  textBlock02?: string;
  textBlock03?: string;
  textBlock04?: string;
  textBlock05?: string;

  // Content/media sections
  contentSection01?: ContentSectionData;
  contentSection02?: ContentSectionData;
  contentSection03?: ContentSectionData;

  // Highlight/featured section
  highlightSection?: {
    title: string;
    content: string;
  };

  // Final showcase gallery
  showcaseGallery?: {
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
