import { Project } from "./types";

export const mobileBanking: Project = {
  id: "kitchen-display",
  title: "Kitchen Display System",
  description:
    "Designed an alternative application flow for declined credit card applicants to apply for Grand Bank loans with customizable add-ons, e-sign their application, and track status via mobile app.",
  imageUrl: "/src/assets/KitchenDisplay/Hero.png",
  tags: ["Kitchen Display", "SaaS", "Business"],
  year: "",
  role: "Product Designer",
  client: "Grand Bank",
  duration: "2 months",
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
      "Create illustrations for the e-book to help visualise the benefits of FinOps and how it can help businesses save money",
    ],
  },
  sectionStart: {
    overviewTitle: "Discovery",
    description: "Placeholder Text",
    imageUrl: "/src/assets/KitchenDisplay/moodboard.png",
  },

  imageSection01: {
    title: "Personas",
    description:
      "This is a mapping of the loan application flow for Grand Bank. It shows the different steps involved in the loan application process. We used this to understand the user flow and design around any constraints or limitations.",
    imageUrl: "/src/assets/KitchenDisplay/Personas.png",
  },
  imageSection02: {
    title: "Low fidelity sketches",
    description:
      "When time allowed, I would sketch out the different screens and flows for the loan application process. My go to tool was excalidraw. As it allows me to quickly sketch out ideas and iterate on them. I would then share the sketches with the team and get feedback on the different screens and flows. For this particular project, I did both desktop and mobile sketches. The clients requirement wa to go mobile first.",
    images: [
      "/src/assets/GrandBank/Ideation/LowFiGB.png",
      "/src/assets/GrandBank/Ideation/LowFiMobile.png",
    ],
  },
  imageSection03: {
    title: "High fidelity wireframes",
    description:
      "After the low fidelity sketches, I would then create high fidelity wireframes for the loan application process. I used Figma to create the wireframes. The client was able to see the different screens and flows for the loan application process and provide feedback on the different screens and flows. The client was also able to see the different interactions for the loan application process and provide feedback on the different interactions.",
    images: [
      "/src/assets/GrandBank/Wireframes/WireframeGB.png",
      "/src/assets/GrandBank/Wireframes/WireframeMobile.png",
    ],
  },
  sectionMiddle: {
    title: "Members view",
    description: "Placeholder Text",
    imageUrl: "/src/assets/OneView/SectionMid.png",
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

  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "Overview",
        label: "Overview",
      },
      {
        id: "Placeholder Text",
        label: "Discovery",
        subsections: [
          { id: "requirements", label: "Personas" },
          { id: "process", label: "The Process" },
          { id: "widgets", label: "Widgets & components" },
        ],
      },
      {
        id: "Placeholder Text",
        label: "Placeholder Text",
        subsections: [
          { id: "dashboard", label: "Dashboard" },
          { id: "business-card-section-2", label: "Consumer view" },
        ],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
      },
    ],
  },
};
