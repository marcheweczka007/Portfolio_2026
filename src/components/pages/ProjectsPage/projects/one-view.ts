import { Project } from "./types";

export const oneView: Project = {
  id: "One-view",
  title: "One view dashboard",
  description:
    "Developing a dashboard that helps lenders manage clients and make more personalised decisions. The dashboard brings all borrower information into one place, creating a clear 360° view by combining data from the Ascent platform with external sources. Because the data and requirements were still evolving, the work involved a lot of iteration and exploring different ways to visualise this view.",
  imageUrl: "/src/assets/MyProjects/OneView/OneView.png",
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
    imageUrl: "/src/assets/MyProjects/OneView/SectionStart.png",
  },
  imageSection01: {
    title: "Requirements",
    description:
      "The requirements were layed out by the design team. At first we had a brainstorming session to figure out what data should be included in the 360° borrower view. As it was new feature and not yet defined, we had to explore different ways to visualise the data. I remember in particular the discussion around the data quality indicators, and how to visualise them in a way that was easy to understand and use.",
    imageUrl: "/src/assets/MyProjects/OneView/Requirements.png",
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
      "/src/assets/MyProjects/OneView/userType.png",
      "/src/assets/MyProjects/OneView/relationships.png",
    ],
    bottomImageUrl: "/src/assets/MyProjects/OneView/sketchesOneView.png",
  },
  imageSection03: {
    title: "Widgets & components",
    description:
      "This stage focused on designing the core building blocks of the 360° borrower view. I explored different ways to present key information, such as personal details, financial data, products, and credit insights—in a clean and readable format.",
    description2:
      "I created a range of widget layouts, testing how each one could be used within the dashboard. The goal was to make the widgets flexible, easy to understand, and consistent across different borrower types. I also designed a widget management panel, allowing lenders to add, remove, or reorder widgets based on their needs. This work helped define the visual language of the dashboard and ensured that each component could scale as more data and features were added.",
    images: [
      "/src/assets/MyProjects/OneView/widgets01.png",
      "/src/assets/MyProjects/OneView/widgets02.png",
    ],
  },
  sectionMiddle: {
    title: "Members view",
    description:
      "The members view provides a quick overview of each borrower’s personal details and financial information. Lenders can search for a specific borrower or filter the entire member list using a wide range of criteria, depending on the context or the type of loan they want to recommend. They can also switch between a list view and a grid view to see all members in whichever format suits their workflow best.",
    imageUrl: "/src/assets/MyProjects/OneView/SectionMid.png",
  },
  twoColumnSection: [
    {
      title: "Wireframes",
      description:
        "The wireframes were the starting point for the members view. They were used to test the layout and the information hierarchy. On the left you can see the top image, with the green (the largest one), yellow, and then red (the smallest one) this idea was proposed to allow the lender to quickly scan and see which member is best suited for the loan they are looking for or for any other purpose the lender filtered for.",
      image: "/src/assets/MyProjects/OneView/gridLow.png",
    },
    {
      title: "Chatbot",
      description:
        "Additionally, this view included an AI chatbot that helped lenders identify the best members to recommend a loan to. Lenders could either choose from predefined prompts or type in their own custom questions to get personalised recommendations.",
      image: "/src/assets/MyProjects/OneView/chatLow.png",
    },
  ],
  sideBySideSectionsLeft: [
    {
      title: "Detailed member view",
      description:
        "These wireframes focused on determinating what key information should be diplayed for each member, but alos what type of filters and sorting options should be displayed to the lender.",
      description2:
        "The initilal idea was to show filters in form of buttons, where the lender can click on the button to filter the members by the selected criteria.",
      image: "/src/assets/MyProjects/OneView/detailedMView.png",
    },
    {
      title: "Member card",
      description:
        "I have build the components for the member card, featuring the grid & list view. The cards included key information about the membet, with the ability to see more details on the one view page.",
      image: "/src/assets/MyProjects/OneView/Member.png",
    },
  ],
  sectionEnd: {
    title: "Team view",
    description:
      "This feature gives lenders a personalised starting point where they can quickly access key tools and teams they work with. Each card highlights a service area, like Universal Banking, Account Opening, or Treasury Management with a brief description and the team members involved. Features outside the lender’s current plan appear locked with an upgrade option, making it clear what’s available and what requires higher access. ",
    imageUrl: "/src/assets/MyProjects/OneView/SectionEnd.png",
  },
  sideBySideSectionsRight: [
    {
      title: "Invite member",
      description:
        "The Team View gives lenders a clear overview of the borrowers assigned to a specific banking team. It lists each member along with key details such as years with the institution, account number, and the financial products they hold. A search bar and filters help lenders quickly find a specific borrower, and an invite button allows them to add new members to the team.This view helps lenders manage their portfolio more efficiently by keeping all team-related borrower information in one organised place.",
      image: "/src/assets/MyProjects/OneView/UBT.png",
    },
    {
      title: "Account Opening",
      description:
        "This view allows lenders to see all new account applications as they come in. Each lead includes key borrower details, the products they’re interested in, and a timestamp showing when the application was submitted. Lenders can quickly scan new leads, search for a specific applicant, and open any profile to review the details or take the next action.",
      image: "/src/assets/MyProjects/OneView/AO.png",
    },
  ],

  results: [
    "This feature was used as a selling point for the Ascent platform clients to showcase the power of the platform and the value it can bring to their business.",
    "I was leading the user interface design for this project, and collaborated with the VP of design and UX designer to bring the feature to life.",
    "This project was a great opportunity to design a variety of widgets, refine their usability, and ensure they worked well together within the dashboard.",
    "I really enjoyed working on the early stages of the project, where the requirements were still evolving, but my creativity and ability to iterate quickly were put to the test.",
  ],

  showcaseGallery: {
    title: "Final outcome",
    description: "Final outcome of the one view dashboard.",
    images: [
      "/src/assets/MyProjects/OneView/1.png",
      "/src/assets/MyProjects/OneView/2.png",
      "/src/assets/MyProjects/OneView/3.png",
      "/src/assets/MyProjects/OneView/4.png",
      "/src/assets/MyProjects/OneView/5.png",
      "/src/assets/MyProjects/OneView/6.png",
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
          { id: "leaflet-section-2", label: "Account Opening" },
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
