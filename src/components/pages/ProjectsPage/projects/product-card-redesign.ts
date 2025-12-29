import { Project } from "./types";

export const productCardRedesign: Project = {
  id: "Product-Card-Redesign",
  title: "Product Card Redesign",
  description:
    "This project required me to improve the interface but also the information that is displayed on the card, to increase the application completion rate. The project was a collaboration with the product manager and the developer, and I was given a lot of creative freedom to explore new layouts and visual ideas.",
  imageUrl: "/src/assets/MyProjects/ApplicationCards/ApplicationCards.png",
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
    imageUrl: "/src/assets/MyProjects/ApplicationCards/startSection.png",
  },
  imageSection01: {
    title: "Requirements",
    description:
      "The requirements for this feature focused on showing the borrower which stage of the application they were currently in. There were three main stages: Eligibility Checker (stage one), Full Application (stage two), and Submitted, which means the borrower has completed the process. In addition to the stage, the design also needed to show the status of the application — indicating whose hands the application was currently in. Both the stage and the status needed to be flexible, as they could change over time.",
    images: [
      "/src/assets/MyProjects/ApplicationCards/TheFlow.png",
      "/src/assets/MyProjects/ApplicationCards/ProductCardElements.png",
    ],
  },
  imageSection02: {
    title: "Moodboard",
    description:
      "Like with most of my projects, I started with a moodboard. This helped me understand the look and feel I wanted to achieve. For this card, I needed to include many elements, such as the logo, application stages, statuses, and other details. Having a moodboard and some visual examples gave me a good starting point and made it easier to explore different ideas.",
    imageUrl: "/src/assets/MyProjects/ApplicationCards/moodboard.png",
  },
  imageSection03: {
    title: "Wireframes",
    description:
      "At this stage, I explored different layout ideas for the product card and identified the key information the borrower needed to see. I sketched out early concepts on paper and then moved into low-fidelity wireframes to test structure, hierarchy, and content placement.",
    description2:
      "The wireframes helped me organise elements such as the logo, application stage, status, dates, call-to-action buttons, and any required user actions. I also mapped simple logic flows, like when the “Continue” button should appear and when the user should see an action required.This process of iteration made it easier to compare different layouts, remove unnecessary elements, and focus on the clearest way to show the application state. Usually I sak for a lot of feedback during this phase to make sure I'm on the right track.",
    images: [
      "/src/assets/MyProjects/ApplicationCards/wireframes.png",
      "/src/assets/MyProjects/ApplicationCards/wireframes02.png",
    ],
  },
    sectionMiddle: {
    title: "Product Categories",
    description: "Placeholder Text",
    imageUrl: "/src/assets/MyProjects/ApplicationCards/sizing.png",
  },

  sideBySideSectionsLeft: [
    {
      title: "Product Categories",
      description: "Placeholder Text",
      image: "/src/assets/MyProjects/ApplicationCards/categories.png",
    },
    {
      title: "Sizes",
      description:
        "Ensure the card is responsive and looks good on all devices. We needed to make sure the illustration will still look good on smaller horizontal cards.",
      image: "/src/assets/MyProjects/ApplicationCards/sizing.png",
    },
  ],

  sectionEnd: {
    title: "High fidelity design",
    description:
      "The high-fidelity designs below show three different states of the product card, based on the stage of the application. The top left card is what the borrower sees first when looking for the right loan to apply for. The top right card shows an application in progress, where the borrower can see where they left off and what they need to do next. The bottom left card represents a live application, showing the current status, submission date, and amount borrowed. From here, the borrower can view the application or add any missing information. ",
    imageUrl: "/src/assets/MyProjects/ApplicationCards/hiFi.png",
  },
  sideBySideSectionsRight: [
    {
      title: "Before re-design",
      description: "Placeholder Text",
      image: "/src/assets/MyProjects/ApplicationCards/before.png",
    },
    {
      title: "After re-design",
      description:
        "Ensure the card is responsive and looks good on all devices. We needed to make sure the illustration will still look good on smaller horizontal cards.",
      image: "/src/assets/MyProjects/ApplicationCards/DevReady.pdf",
    },
  ],


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
    overviewTitle: "overviewTitle",
    sectionStart: "projectSectionStart",
    imageSection01: "Image01",
    imageSection02: "Image02",
    imageSection03: "Image03",
    sectionMiddle: "hiFidelity",
    showcaseGallery: "final-outcome",
    results: "results",
    sideBySideSectionsLeft: "sideBySideSectionsLeft",
    sideBySideSectionsRight: "sideBySideSectionsRight",
  },
  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "overviewTitle",
        label: "Project Overview",
      },
      {
        id: "projectSectionStart",
        label: "Product Card Redesign",
        subsections: [
          { id: "Image01", label: "Requirements" },
          { id: "Image02", label: "Moodboard" },
          { id: "Image03", label: "Wireframes" },
        ],
      },
      {
        id: "sectionMiddle",
        label: "Product Categories",
        subsections: [
          { id: "sideBySideSectionsLeft", label: "Type of product" },
        ],
      },
      {
        id: "sectionEnd",
        label: "High fidelity design",
        subsections: [{ id: "results", label: "Before vs After" }],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
        subsections: [{ id: "results", label: "Reflection" }],
      },
    ],
  },
};
