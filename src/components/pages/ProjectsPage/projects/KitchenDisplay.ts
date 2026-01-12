import { Project } from "./types";

export const kitchenDisplay: Project = {
  id: "kitchen-display",
  title: "Kitchen Display System",
  description:
    "This project involved designing new features for a restaurant kitchen display system used by chefs, servers, and kitchen staff. The system supports day-to-day kitchen operations by showing orders, their status, and what actions are needed next. The new functionality aimed to improve communication across teams, reduce delays, and make it easier to manage complex order flows in busy restaurant environments.",
  imageUrl: "/assets/MyProjects/KitchenDisplay/Hero.png",
  tags: ["Kitchen Display", "SaaS", "Business"],
  overviewSection: {
    overviewYear: "2023",
    overviewDuration: "3 months",
    overviewRole: "Junior UX/UI Designer",
    overviewClient: "Grafterr",
    overviewTitle: "Overview",
    overviewDescription:
      "This project focused on designing new functionality for a restaurant kitchen display system. The goal was to improve communication between servers, chefs, and kitchen staff, while helping teams manage orders more efficiently. The requirements covered the full order lifecycle, from course progression and cooking status to cancellations, timing alerts, and completed orders.",
    executionTitle: "Execution",
    executionDescription:
      "I started by reviewing the requirements and mapping out how orders move through the kitchen, from being placed to being served or completed. I focused on making key actions and statuses easy to understand at a glance, especially in a fast-paced kitchen environment. The design needed to clearly show what required attention, what was ready, and what had changed, while keeping the interface simple and easy to scan.",
    exectutionBullets: [
      "Designed clear visual states for orders, including timing alerts, cancellations, and ready-to-serve status",
      "Explored colour-coding and visual cues to highlight urgent or overdue orders",
      "Considered different workflows such as course-based and order-based serving",
      "Supported more complex setups like multiple kitchen areas and supply chain flows",
    ],
  },
  sectionStart: {
    overviewTitle: "Discovery",
    description: "Placeholder Text",
    imageUrl: "/assets/MyProjects/KitchenDisplay/moodboard.png",
  },

  imageSection01: {
    title: "Personas",
    description:
      "This is a mapping of the loan application flow for Grand Bank. It shows the different steps involved in the loan application process. We used this to understand the user flow and design around any constraints or limitations.",
    imageUrl: "/assets/MyProjects/KitchenDisplay/personas.png",
  },
  imageSection02: {
    title: "Scenarios",
    description:
      "When time allowed, I would sketch out the different screens and flows for the loan application process. My go to tool was excalidraw. As it allows me to quickly sketch out ideas and iterate on them. I would then share the sketches with the team and get feedback on the different screens and flows. For this particular project, I did both desktop and mobile sketches. The clients requirement wa to go mobile first.",
    images: [
      "/assets/MyProjects/KitchenDisplay/scenarios.png",
      "/assets/MyProjects/KitchenDisplay/scenarios02.png",
    ],
  },
  imageSection03: {
    title: "Wireframes",
    description:
      "",
    images: [
      "/assets/MyProjects/KitchenDisplay/personaFlow.png",
      "/assets/MyProjects/KitchenDisplay/notify.png",
    ],
  },
  imageSection04: {
    title: "High fidelity wireframes",
    description:
      "After the wireframes, I would then create high fidelity wireframes for the loan application process. I used Figma to create the wireframes. The client was able to see the different screens and flows for the loan application process and provide feedback on the different screens and flows. The client was also able to see the different interactions for the loan application process and provide feedback on the different interactions.",
    images: [
      "/assets/MyProjects/KitchenDisplay/hfWireframes.png",
      "/assets/MyProjects/KitchenDisplay/hfWireframes02.png",
    ],
  },
  sectionMiddle: {
    title: "Members view",
    description: "Placeholder Text",
    imageUrl: "/assets/MyProjects/OneView/SectionMid.png",
  },
  sideBySideSectionsLeft: [
    {
      title: "Invite member",
      description: "Placeholder Text",
      image: "/assets/MyProjects/OneView/InviteMember.png",
    },
    {
      title: "Lender view",
      description: "Placeholder Text",
      image: "/assets/MyProjects/OneView/LenderView.png",
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
          { id: "personas", label: "Personas" },
          { id: "scenarios", label: "Scenarios" },
          { id: "wireframes", label: "Wireframes" },
          { id: "hfWireframes", label: "High fidelity wireframes" },
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
