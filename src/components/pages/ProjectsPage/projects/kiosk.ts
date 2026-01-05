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
    title: "Competitor Analysis & Initial Sketch",
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
};
