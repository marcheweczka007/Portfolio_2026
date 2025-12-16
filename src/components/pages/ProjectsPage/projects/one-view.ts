import { Project } from "./types";

export const oneView: Project = {
  id: "One-view",
  title: "One view dashboard",
  description:
    "Developing a dashboard for lenders to manage clients and make better, more personalised decisions. The dashboard brings all borrower information into one place, creating a full 360° view of the customer. This view combines data from the Ascent platform with external sources, helping lenders understand each borrower’s situation more clearly. Because the data and requirements were still evolving, the project involved a lot of iteration and exploring different ways to visualise what this 360° view could look like.",
  imageUrl: "/src/assets/OneView/OneView.png",
  tags: ["SaaS Product", "Dashboard", "FinTech UX"],
  overviewSection: {
    overviewTitle: "Overview",
    overviewDescription:
      "Designing a dashboard that gives lenders a clear, unified 360° view of each borrower. The goal was to bring all key information into one place, helping lenders make better, more personalised decisions based on data from the Ascent platform and external sources.",

    executionTitle: "Execution",
    executionDescription:
      "The project focused on exploring how the ‘one view’ of a borrower could be displayed in a simple and useful way. As the data and requirements were still evolving, the work involved iterating on layouts, visuals, and information hierarchy to define what this dashboard could become.",

    exectutionBullets: [
      "Map out what data should appear in the 360° borrower view",
      "Explore layouts and visual patterns for a simple, easy-to-read dashboard",
      "Design early dashboard concepts showing how lenders could use the one-view experience to make informed decisions",
    ],
  },

  sectionStart: {
    overviewTitle: "One view",
    description:
      "My responsibilities on this project included designing what the 360° borrower view could look like, creating the widgets and components used in the dashboard, and shaping the overall dashboard layout. I worked closely with the VP of Design throughout the process. This project gave me the chance to design a variety of widgets, refine their usability, and ensure they worked well together within the dashboard.",
    imageUrl: "/src/assets/OneView/SectionStart.png",
  },
  imageSection01: {
    title: "Requirements",
    description:
      "The requirements were layed out by the design team. At first we had a brainstorming session to figure out what data should be included in the 360° borrower view. As it was new feature and not yet defined, we had to explore different ways to visualise the data. I remember in particular the discussion around the data quality indicators, and how to visualise them in a way that was easy to understand and use.",
    imageUrl: "/src/assets/OneView/Requirements.png",
  },
  imageSection02: {
    title: "The Process",
    description:
      "This stage focused on understanding what information lenders need when viewing a borrower and how that information connects. I started by mapping out key data points—such as personal details, accounts, relationships, credit information, and tasks—to see how they relate to each other and what actions a lender might want to take from each area. Using sticky notes, I explored questions like:",
    bullets: [
      "What is the lender trying to do when they click on a specific user?",
      "Are they checking eligibility, reviewing accounts, or looking for upsell opportunities?",
      "How should different pieces of information connect to create a clear 360° view?",
    ],
    description2:
      "This mapping exercise helped define the structure of the dashboard, identify the main widgets and sections needed, and clarify how the user flow should work. It also guided early decisions about hierarchy, layout, and what information should be surfaced first.",
    images: [
      "/src/assets/OneView/userType.png",
      "/src/assets/OneView/relationships.png",
    ],
    bottomImageUrl: "/src/assets/OneView/sketchesOneView.png",
  },
  imageSection03: {
    title: "Widgets & components",
    description:
      "This stage focused on designing the core building blocks of the 360° borrower view. I explored different ways to present key information, such as personal details, financial data, products, and credit insights—in a clean and readable format.",
    description2:
      "I created a range of widget layouts, testing how each one could be used within the dashboard. The goal was to make the widgets flexible, easy to understand, and consistent across different borrower types. I also designed a widget management panel, allowing lenders to add, remove, or reorder widgets based on their needs. This work helped define the visual language of the dashboard and ensured that each component could scale as more data and features were added.",
    images: [
      "/src/assets/OneView/widgets01.png",
      "/src/assets/OneView/widgets02.png",
    ],
  },
  sectionMiddle: {
    title: "Members view",
    description:
      "The members view provides a quick overview of each borrower’s personal details and financial information. Lenders can search for a specific borrower or filter the entire member list using a wide range of criteria, depending on the context or the type of loan they want to recommend. They can also switch between a list view and a grid view to see all members in whichever format suits their workflow best.",
    imageUrl: "/src/assets/OneView/SectionMid.png",
  },
  sideBySideSectionsLeft: [
    {
      title: "Detailed member view",
      description:
        "These wireframes focused on determinating what key information should be diplayed for each member, but alos what type of filters and sorting options should be displayed to the lender.",
      description2:
        "The initilal idea was to show filters in form of buttons, where the lender can click on the button to filter the members by the selected criteria.",
      image: "/src/assets/OneView/detailedMView.png",
    },
    {
      title: "Member card",
      description:
        "I have build the components for the member card, featuring the grid & list view. The cards included key information about the membet, with the ability to see more details on the one view page.",
      image: "/src/assets/OneView/Member.png",
    },
  ],
  sectionEnd: {
    title: "Team view",
    description: "Placeholder Text",
    imageUrl: "/src/assets/OneView/SectionEnd.png",
  },
  sideBySideSectionsRight: [
    {
      title: "Invite member",
      description: "Placeholder Text",
      image: "/src/assets/OneView/FinalOutcome.png",
    },
    {
      title: "Lender view",
      description: "Placeholder Text",
      image: "/src/assets/OneView/FinalOutcome.png",
    },
  ],
  twoColumnSection: [
    {
      title: "Wireframes",
      description:
        "The wireframes were the starting point for the members view. They were used to test the layout and the information hierarchy. On the left you can see the top image, with the green (the largest one), yellow, and then red (the smallest one) this idea was proposed to allow the lender to quickly scan and see which member is best suited for the loan they are looking for or for any other purpose the lender filtered for.",
      image: "/src/assets/OneView/gridLow.png",
    },
    {
      title: "Chatbot",
      description:
        "Additionally, this view included an AI chatbot that helped lenders identify the best members to recommend a loan to. Lenders could either choose from predefined prompts or type in their own custom questions to get personalised recommendations.",
      image: "/src/assets/OneView/chatLow.png",
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

  sectionIds: {
    overviewTitle: "Overview",
    sectionStart: "projectSectionStart",
    imageSection01: "requirements",
    imageSection02: "process",
    imageSection03: "widgets",
    sectionMiddle: "All-members",
    sectionEnd: "Team-view",
    showcaseGallery: "final-outcome",
    results: "results",
  },

  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "Overview",
        label: "Project Overview",
      },
      {
        id: "projectSectionStart",
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
          { id: "members-wireframes", label: "Wireframes" },
          { id: "members-card", label: "Member card" },
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
        subsections: [{ id: "results", label: "Reflection" }],
      },
    ],
  },
};
