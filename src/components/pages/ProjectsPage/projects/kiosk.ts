import { Project } from "./types";

export const kiosk: Project = {
  id: "kiosk",
  title: "Kiosk (Self-checkout experience)",
  description:
    "This project involved redesigning a self-checkout kiosk for Grafterr clients. The goal was to simplify the checkout process, reduce friction for users, and create a touch-friendly interface suitable for a 15-inch screen.",
  imageUrl: "/src/assets/MyProjects/Kiosk/selfCheckout.png",
  tags: ["Kiosk", "Product design", "SaaS"],
  overviewSection: {
    overviewYear: "2023",
    overviewDuration: "3 month",
    overviewRole: "UI/UX Designer (Solo Project)",
    overviewClient: "Grafterr",
    overviewTitle: "Overview",
    overviewDescription:
      "This project focused on redesigning a self-checkout kiosk used by Grafterr clients. The goal was to improve the in-store checkout experience by making it faster, clearer, and easier to use on a 15-inch touchscreen. The design needed to support different user scenarios and work reliably in a real retail environment.",

    executionTitle: "Execution",
    executionDescription:
      "I worked closely with stakeholders, the product owner, and developers to understand both the business and technical requirements. The design focused on creating clear, touch-friendly components and simple user flows suitable for a kiosk interface. I validated ideas through in-house questionnaires with the sales team and by creating user scenarios to test different outcomes. The final designs were successfully built, and the kiosk is now live and used by Grafterr clients.",
    exectutionBullets: [
      "Designed custom UI components optimised for a 15-inch touchscreen",
      "Collaborated closely with the product owner, developers, and stakeholders",
      "Gathered insights through in-house questionnaires with the sales team",
      "Delivered designs that were built and are now used by real clients",
    ],
  },

  sectionStart: {
    overviewTitle: "Self-checkout experience",
    description: "Placeholder Text",
    imageUrl: "/src/assets/MyProjects/Kiosk/KioskUser.png",
  },
  imageSection01: {
    title: "Competitor Analysis",
    description:
      "At first I wanted to better understand how our competitors are approaching, not just the self-checkout experience, but the general purchasing process. I lookat at few different apps and went to a local fast food restaurant to observe the process in real life.",
    images: [
      "/src/assets/MyProjects/Kiosk/research.png",
      "/src/assets/MyProjects/Kiosk/sketch.png",
    ],
  },
  imageSection02: {
    title: "Requirements",
    description: "Placeholder Text",
    imageUrl: "/src/assets/MyProjects/Kiosk/scenarios.png",
  },
  imageSection03: {
    title: "Moodboard",
    description: "Placeholder Text",
    imageUrl: "/src/assets/MyProjects/Kiosk/wireframes.png",
  },

  sectionMiddle: {
    title: "Wireframes",
    description: "Placeholder Text",
    imageUrl: "/src/assets/MyProjects/Kiosk/KioskUser.png",
  },
  sideBySideSectionsLeft: [
    {
      title: "Initial Sketches",
      description: "Placeholder Text",
      image: "/src/assets/MyProjects/Kiosk/KioskUser.png",
    },
  ],
  twoColumnSection: [
    {
      title: "Original kiosk design",
      description: "Placeholder Text",
      image: "/src/assets/MyProjects/Kiosk/KioskUser.png",
    },
    {
      title: "Wireframes Detail",
      description: "Placeholder Text",
      image: "/src/assets/MyProjects/Kiosk/KioskUser.png",
    },
  ],
  sectionEnd: {
    title: "High fidelity designs",
    description: "Placeholder Text",
    imageUrl: "/src/assets/MyProjects/Kiosk/KioskUser.png",
  },
  sideBySideSectionsRight: [
    {
      title: "High fidelity flows",
      description: "Placeholder Text",
      image: "/src/assets/MyProjects/Kiosk/KioskUser.png",
    },
  ],
  showcaseGallery: {
    title: "Final outcome",
    description: "Placeholder Text",
    images: [
      "/src/assets/MyProjects/Kiosk/KioskUser.png",
      "/src/assets/MyProjects/Kiosk/KioskUser.png",
    ],
  },
  results: [
    "I'm overall happy with the outcome and the fresh new look of the cards. If I had the opportunity, I would also redesign the whole product page to add more space and better separate current applications from available products. I believe current applications and live products should live on the same page, where users can focus on managing tasks related to their applications and products. Available products should sit on a separate page, making it easier for users to explore new options without distraction.",
    "I'm overall happy with the outcome and the fresh new look of the cards. If I had the opportunity, I would also redesign the whole product page to add more space and better separate current applications from available products. I believe current applications and live products should live on the same page, where users can focus on managing tasks related to their applications and products. Available products should sit on a separate page, making it easier for users to explore new options without distraction.",
  ],

  sectionIds: {
    overviewTitle: "overviewTitle",
    sectionStart: "self-checkout-experience",
    imageSection01: "competitor-analysis",
    imageSection02: "requirements",
    imageSection03: "moodboard",
    sectionMiddle: "wireframes",
    sideBySideSectionsLeft: "self-checkout-experience-detail",
    sectionEnd: "high-fidelity-designs",
    sideBySideSectionsRight: "high-fidelity-flows",
    showcaseGallery: "final-outcome",
    results: "results",
  },
  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "overviewTitle",
        label: "Project Overview",
      },
      {
        id: "self-checkout-experience",
        label: "Self-checkout experience",
        subsections: [
          {
            id: "competitor-analysis",
            label: "Competitor Analysis",
          },
          { id: "requirements", label: "Requirements" },
          { id: "moodboard", label: "Moodboard" },
        ],
      },
      {
        id: "wireframes",
        label: "Wireframes",
        subsections: [
          {
            id: "self-checkout-experience-detail",
            label: "Initial Sketches",
          },
          { id: "before-and-after", label: "Original kiosk design" },
        ],
      },
      {
        id: "high-fidelity-designs",
        label: "High fidelity designs",
        subsections: [
          { id: "high-fidelity-flows", label: "High fidelity flows" },
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
