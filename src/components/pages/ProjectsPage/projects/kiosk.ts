import { Project } from "./types";

export const kiosk: Project = {
  id: "kiosk",
  title: "Kiosk (Self-checkout experience)",
  description:
    "The self-checkout kiosk project involved redesigning and improving the user experience for Grafterr clients. The goal was to simplify the checkout process, reduce friction for users, and create a touch-friendly interface suitable for a 15-inch screen.",
  imageUrl: "../assets/MyProjects/Kiosk/selfcheckout.png",
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
    description:
      "This project focused on imporving the user experience and the overall design of the self-checkout kiosk for Grafterr clients.",
    imageUrl: "../assets/MyProjects/Kiosk/KioskUser.png",
  },
  imageSection01: {
    title: "Competitor Analysis",
    description:
      "As part of the discovery phase, I reviewed the self-checkout kiosk experiences of key competitors, focusing on UI patterns, user flows, and how users are guided through the journey.The analysis revealed clear differences in how each product handles simplicity, feedback, and complexity, as well as common pain points around progress visibility, accessibility, and error handling.These insights helped surface concrete opportunities and informed design decisions aimed at creating a kiosk experience that feels clear, reassuring, and easy to use in real-world environments.",
    imageUrl: "/assets/MyProjects/Kiosk/comparison.png",
  },
  imageSection02: {
    title: "Requirements",
    description: "Some of the requirements for the project were:",
    imageUrl: "/assets/MyProjects/Kiosk/ProjectRequrements.jpg",
  },
  imageSection03: {
    title: "Moodboard",
    description:
      "One of my favorite parts of the project is to create a moodbaord, it always helps me to generate ideas and keeps me excited about the user interface design. I like to see what is out there and what other designers are doing, with similar projects.",
    imageUrl: "/assets/MyProjects/Kiosk/moodboard.png",
  },

  sectionMiddle: {
    title: "Wireframes",
    description:
      "Wireframes helped me to test the layout and iterate quickly on the design. I like to draw out the diffrent screens, flows and test before moving to the next stage.",
    imageUrl: "/assets/MyProjects/Kiosk/wireframesGroup.png",
  },
  twoColumnSection: [
    {
      title: "Detailed sketch",
      description:
        "Drawing on paper helps me to quickly sketch out ideas and iterate on them. I like to use it as a starting point for the design.",
      image: "/assets/MyProjects/Kiosk/sketch.png",
    },
    {
      title: "Original Kiosk Design",
      description:
        "The original kiosk design was a staerting point for the re-design. It helped me understand the current state of the kiosk and the limitations of the design.",
      image: "/assets/MyProjects/Kiosk/OriginalKiosk.png",
    },
  ],
  sideBySideSectionsLeft: [
    {
      title: "Set meal flow",
      description:
        "This flow guides the user through building a set meal step by step. At the top, a progress indicator shows each stage of the process, helping the user understand where they are and what’s coming next. As the user selects items, completed steps are clearly marked. The user must complete the required selection before continuing, and helpful messages appear if something is missing. Users can go back to previous steps to change their choices, and the basket updates as they go. This keeps the process structured, clear, and easy to follow, while still giving users control over their order.",
      image: "/assets/MyProjects/Kiosk/Flow01.png",
    },
    {
      title: "Query purchase flow",
      description:
        "This flow introduces a quick add-on option while the user is browsing the menu. When a relevant item is selected, the user is asked if they would like to add a related meal deal, such as coffee and cake. The prompt is simple and easy to dismiss, so it doesn’t interrupt the main journey. If the user accepts the offer, they are guided through a short, focused flow to customise their selection, such as choosing a drink, milk type, or cake. Each step is clear and requires a selection before moving on. The price updates as choices are made, and the item can be added to the basket once the selection is complete. This approach encourages add-ons in a natural way, without making the ordering process feel complicated or forced.",
      image: "/assets/MyProjects/Kiosk/Flow02Query.png",
    },
  ],

  sectionEnd: {
    title: "High fidelity designs",
    description:
      "At this stage, the focus was on refining the interface and improving the overall look and feel of the kiosk. The design uses more white space, a clearer visual hierarchy, and consistent spacing to make the screens easier to scan and interact with. Key actions and choices are more prominent, helping users move through the flow with less effort. The updated UI feels cleaner and more modern, while still supporting all required steps, from item customisation to payment. Overall, the high-fidelity design improves usability and creates a more visually pleasing experience for users in a real-world kiosk environment.",
    imageUrl: "/assets/MyProjects/Kiosk/exampleScreensKiosk.png",
  },
  sideBySideSectionsRight: [
    {
      title: "White labelling",
      description:
        "White labelling was a key requirement for the kiosk. We needed to be able to brand the kiosk with the client's logo and colours.",
      image: "/assets/MyProjects/Kiosk/WhiteLabelling.png",
    },
  ],
  showcaseGallery: {
    title: "Final outcome",
    description:
      "Project was succesfully delivered and the kiosk is now used by real clients.",
    images: [
      "/assets/MyProjects/Kiosk/heroKiosk.png",
      "/assets/MyProjects/Kiosk/basketOverview.png",
      "/assets/MyProjects/Kiosk/NewUserPayment.png",
      "/assets/MyProjects/Kiosk/components.png",
    ],
  },

  results: [
    "Tackling this project on my own was a great learning expereince. I had to figure out, how to design on large touchscreen device, ensure the self-service kiosk is easy to use and still provide a clear and consistent user experience.It was not always easy, but I'm happy with the outcome and the kiosk is now used by real clients.",
    "If I had an opportunity to do this project again, I would spend more time on the inital flows, constraints and limitations of the kiosk. I would also focus more on the user research and testing to ensure the kiosk is easy to use for all users.",
  ],

  sectionIds: {
    overviewTitle: "overviewTitle",
    sectionStart: "self-checkout-experience",
    imageSection01: "competitor-analysis",
    imageSection02: "requirements",
    imageSection03: "moodboard",
    sectionMiddle: "wireframes",
    sideBySideSectionsLeft: "flows",
    sectionEnd: "high-fidelity-designs",
    sideBySideSectionsRight: "white-labelling",
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
          { id: "before-and-after", label: "Original kiosk design" },
          {
            id: "flows",
            label: "Flows",
          },
        ],
      },
      {
        id: "high-fidelity-designs",
        label: "High fidelity designs",
        subsections: [{ id: "white-labelling", label: "White labelling" }],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
        subsections: [{ id: "results", label: "Reflection" }],
      },
    ],
  },
};
