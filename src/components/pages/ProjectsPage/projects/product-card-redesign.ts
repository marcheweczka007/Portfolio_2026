import { Project } from "./types";

export const productCardRedesign: Project = {
  id: "Product-Card-Redesign",
  title: "Product Card Redesign",
  description:
    "Improve the UX and design of the product card interface for loan applications.",
  imageUrl: "/src/assets/ApplicationCards/ApplicationCards.png",
  tags: ["Re-design", "Loan Application", "SaaS"],
  year: "",
  role: "Product Designer",
  client: "Ascent Platform",
  duration: "2 months",
  overviewSection: {
    overviewTitle: "Overview",
    overviewDescription:
      "Re-design and imporve the overall experience for the borrower when they are applying for a loan. By improving the product card interface, and help borrower understand their loan stageg and progress.",
    executionTitle: "Execution",
    executionDescription:
      "As it was one of my first projects at the company , my manager encouraged me to be creative and explore new approaches. The key challenge for me was understanding what information borrowers actually need from the product cards. Since I was working mostly independently, I asked many questions and collaborated closely with the developer and product manager to build a strong understanding of what was the card's role in the application flow.",
    exectutionBullets: [
      "Improved and simplified interface for the product cards for the borrower to understand their loan stage and progress",
      "Rething the layout and hierarchy of the product cards to make it easier to understand in at a glance",
    ],
  },
  sectionStart: {
    overviewTitle: "Discovery",
    description: "Placeholder Text",
    images: [
      "/src/assets/ApplicationCards/02_MappingTheFlow.png",
      "/src/assets/ApplicationCards/01_OriginalProductCard.png",
    ],
  },
  imageSection01: {
    title: "The Original Product Cards",
    description:
      "There was a lot of information for the user to unfold here. The next objective was to reduce all the information that was excessive.",
    imageUrl: "/src/assets/ApplicationCards/01_OriginalProductCard.png",
  },
  imageSection02: {
    title: "Sketches, wireframes, flows.",
    description:
      "Once I understood the problems and requirements, I explored different ways of structuring the product card to improve clarity and reduce text overload. I started with quick sketches and low-fidelity wireframes to test different information hierarchies. The focus was on making the application status clear at a glance while keeping the design engaging and easy to scan.",
    imageUrl: "/src/assets/ApplicationCards/",
  },
  sectionMiddle: {
    title: "Placeholder",
    description: "Placeholder Text",
    images: [
      "/src/assets/ApplicationCards/",
      "/src/assets/ApplicationCards/",
    ],
  },

};
