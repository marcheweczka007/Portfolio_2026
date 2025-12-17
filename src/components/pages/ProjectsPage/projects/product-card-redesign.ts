import { Project } from "./types";

export const productCardRedesign: Project = {
  id: "Product-Card-Redesign",
  title: "Product Card Redesign",
  description:
    "Improve the UX and design of the product card interface for loan applications.",
  imageUrl: "/src/assets/ApplicationCards/ApplicationCards.png",
  tags: ["Re-design", "Loan Application", "SaaS"],
  overviewSection: {
    overviewTitle: "Overview",
    overviewDescription:
      "This project focused on redesigning the product cards borrowers interact with during the application flow. Unlike many other projects, I wasn’t limited by a design system, which gave me the freedom to explore new layouts and visual ideas. A core challenge was understanding how borrowers used these cards and why many struggled to recognise which applications were active, incomplete, or required action.",
    executionTitle: "Execution",
    executionDescription:
      "I began by reviewing the existing card designs and identifying issues such as inconsistent formatting, overly text-heavy layouts, and unclear hierarchy. To better understand user behaviour, I collaborated closely with the product manager and developer, asking questions and mapping out the role of each card within the broader journey. This helped shape a direction that simplified the design, improved clarity, and supported a smoother borrower experience.",
    exectutionBullets: [
      "Identified usability issues in the original product cards, including unclear status indicators and poor hierarch",
      "Collaborated with the product manager and developer to understand borrower behaviour and business needs.",
      "Created a clearer, more efficient card design aimed at increasing application completion rates.",
    ],
  },

  sectionStart: {
    overviewTitle: "Product Card Redesign",
    description:
      "The product card is the first thing a borrower sees in the application flow, so it had to be clear and easy to understand. The card changes depending on the stage of the journey, but this version shows the very beginning of the application. At this point, I was trying different ideas with illustrations, colours, and photos to see what worked best and still met the project requirements.",
    imageUrl: "/src/assets/ApplicationCards/startSection.png",
  },
  imageSection01: {
    title: "Requirements",
    description:
      "The requirements for this feature focused on showing the borrower which stage of the application they were currently in. There were three main stages: Eligibility Checker (stage one), Full Application (stage two), and Submitted, which means the borrower has completed the process. In addition to the stage, the design also needed to show the status of the application — indicating whose hands the application was currently in. Both the stage and the status needed to be flexible, as they could change over time.",
    imageUrl: "/src/assets/ApplicationCards/02_MappingTheFlow.png",
  },
  imageSection02: {
    title: "Sketches, wireframes, flows.",
    description: "Placeholder Text",
    imageUrl: "/src/assets/ApplicationCards/03_SketchesWireframes.png",
  },

  sectionMiddle: {
    title: "Moodboard",
    description: "Placeholder Text",
    imageUrl: "/src/assets/ApplicationCards/04_Moodboard.png",
  },

  showcaseGallery: {
    title: "Final outcome",
    description: "Final outcome of the e-book, business card and leaflet.",
    images: [
      "/src/assets/E-bookProject/BusinessCardsFinal.png",
      "/src/assets/E-bookProject/LeafletFinal.png",
      "/src/assets/E-bookProject/EbookFinal01.png",
      "/src/assets/E-bookProject/EbookFinal02.png",
    ],
  },
  results: [
    "I can honestly say, this project was so much fun to work on. I had pleasure to work with Infracost team, and they were great in to work with. I'm please with the outcome and the work we did together.",
    "I’m always excited to take on new projects and challenge myself, whether it’s a graphic design project or a coding project. I’m keen to challenge myself and learn new things along the way.",
  ],
  sectionIds: {
    overviewTitle: "Overview",
    sectionStart: "projectSectionStart",
    imageSection01: "imageSection01",
    imageSection02: "imageSection02",
    sectionMiddle: "sectionMiddle",
    showcaseGallery: "final-outcome",
    results: "results",
  },
  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "overviewTitle",
        label: "Overview",
      },
      {
        id: "projectSectionStart",
        label: "Product Card Redesign",
        subsections: [
          { id: "Image01", label: "Requirements" },
          { id: "Image02", label: "Moodboard" },
          { id: "Image03", label: "Cover examples" },
          { id: "Image04", label: "First and last page" },
        ],
      },
      {
        id: "business-card",
        label: "Business Card",
        subsections: [
          { id: "business-card-section-1", label: "Experimentation phase" },
          { id: "business-card-section-2", label: "Examples for client" },
        ],
      },
      {
        id: "leaflet",
        label: "Leaflet",
        subsections: [
          { id: "leaflet-section-1", label: "Experimentation phase" },
          { id: "leaflet-section-2", label: "Examples for client" },
        ],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
        subsections: [{ id: "results", label: "Reflection" }],
      },
    ],
  },
};
