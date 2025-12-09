import { Project } from "./types";
import { sectionIdsOneView } from "./types";

export const oneView: Project = {
  id: "One-view",
  title: "One view dashboard",
  description:
    "A story about joining a team with an existing design system and discovering the challenges of maintaining alignment between designers and developers. Through this experience, I learned that true consistency comes from collaboration, communication, and shared ownership.",
  imageUrl: "/src/assets/OneView/OneView.png",
  tags: ["SaaS", "Dashboard", "UI/UX"],
  year: "2025",
  role: "Product Designer",
  client: "Internal Project",
  duration: "4 months",
  overviewSection: {
    overviewTitle: "Overview",
    overviewDescription:
      "Collaboration with Infracost to create an e-book for the FinOps community. The e-book helped visualise the benefits of FinOps and how it can help businesses save money.",
    executionTitle: "Execution",
    executionDescription:
      "This project was a collaboration with Infracost to create an e-book for  a FinOps community. Along with the e-book I designed a leaflet and business cards that were used diging the conference.",
    exectutionBullets: [
      "Design and showcase the business cards",
      "Ensure the leaflet is consistent with the company branding and prepare for printing",
      "Create illustrations for the e-book to help visualise the benefits of FinOps and how it can help businesses save money",
    ],
  },
  sectionStart: {
    overviewTitle: "One view",
    description: "Placeholder Text",
    imageUrl: "/src/assets/OneView/SectionStart.png",
  },
  imageSection01: {
    title: "Requirements",
    description: "Placeholder Text",
    imageUrl: "/src/assets/OneView/Requirements.png",
  },
  imageSection02: {
    title: "The Process",
    description: "Placeholder Text",
    images: [
      "/src/assets/OneView/Wireframes.png",
      "/src/assets/OneView/OneViewTasks.png",
    ],
  },
  sectionMiddle: {
    title: "Members view",
    description: "Placeholder Text",
    imageUrl: "/src/assets/OneView/Widgets.png",
  },
  sideBySideSectionsLeft: [
    {
      title: "Invite member",
      description: "Placeholder Text",
      image: "/src/assets/OneView/InviteMember.png",
    },
    {
      title: "Lender view",
      description: "Placeholder Text",
      image: "/src/assets/OneView/LenderView.png",
    },
  ],
  sectionEnd: {
    title: "Team view",
    description: "Placeholder Text",
    imageUrl: "/src/assets/OneView/FinalOutcome.png",
  },
  sideBySideSectionsRight: [
    {
      title: "Final outcome",
      description: "Placeholder Text",
      image: "/src/assets/OneView/FinalOutcome.png",
    },
    {
      title: "Final outcome",
      description: "Placeholder Text",
      image: "/src/assets/OneView/FinalOutcome.png",
    },
  ],
      results: [
    "The e-book was well received by the client and was used to promote the FinOps community.",
    "The business card was well received by the client and was used to promote the FinOps community.",
  ],

  showcaseGallery: {
    title: "Final outcome",
    description: "Final outcome of the one view dashboard.",
    images: [
      "/src/assets/OneView/FinalOutcome.png",
      "/src/assets/OneView/FinalOutcome.png",
    ],
  },

  sectionIdsOneView: {
    overviewSection: "Overview",
  },

  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "Overview",
        label: "Overview",
      },
      {
        id: "Discovery-wireframes",
        label: "One view",
        subsections: [
          { id: "requirements", label: "Requirements" },
          { id: "process", label: "The Process" },
          { id: "widgets", label: "Widgets & components" },
        ],
      },
      {
        id: "All-members",
        label: "Members view",
        subsections: [
          { id: "dashboard", label: "Dashboard" },
          { id: "business-card-section-2", label: "Consumer view" },
        ],
      },
      {
        id: "Team-view",
        label: "Team view",
        subsections: [
          { id: "leaflet-section-1", label: "Invite member" },
          { id: "leaflet-section-2", label: "Lender view" },
        ],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
      },
    ],
  },
};
