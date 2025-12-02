import { Project } from "./types";

export const ebookAndBusinessCard: Project = {
  //Add a button when the user can view or download the e-book
  id: "E-book-and-business-card-design",
  title: "E-book and business card design",
  description:
    "Comprehensive mobile banking solution with seamless user experience and advanced security features.",
  imageUrl: "/src/assets/E-BookProject/EBookHero.png",
  tags: ["E-book", "Branding", "Graphic Design"],
  year: "2024",
  role: "Graphic Designer (Freelance)",
  client: "Infracost",
  duration: "1 month",
  overview:
    "Collaboration with Infracost to create an e-book for the FinOps community. The e-book helped visualise the benefits of FinOps and how it can help businesses save money.",
  solution:
    "I created a consistent look and feel for the 3 items. The client was happy with the results and the e-book was well received by the community.",
  extraImage01: {
    title: "Requirements for the e-book and business card design",
    description:
      "When I got the requirements, I decided to devide the e-book into presentation slides, to help me structure the content. This helped me recognise how many illustrations I need to create for the e-book.",
    imageUrl: "/src/assets/E-bookProject/Requirements.png",
  },
  extraImage02: {
    title: "Sketches, wireframes, flows.",
    description:
      "Once I understood the problems and requirements, I explored different ways of structuring the product card to improve clarity and reduce text overload. I started with quick sketches and low-fidelity wireframes to test different information hierarchies. The focus was on making the application status clear at a glance while keeping the design engaging and easy to scan.",
    imageUrl: "/src/assets/E-bookProject/Moodboard.png",
  },
  extraImage03: {
    title: "Cover examples (Version 1)",
    description:
      "I usually create 3–5 cover concepts so the client has options to react to. It gives them space to share feedback and helps us decide which direction to develop further.",
    imageUrl: "/src/assets/E-bookProject/Covers.png",
  },
  extraImage04: {
    title: "First and last page (Version 1)",
    description:
      "Examples of first and last page of the e-book, to show the client how the e-book will look like.",
    imageUrl: "/src/assets/E-bookProject/Front_End_Pages.png",
  },
  images: [],
  // Section ID mapping - maps standard sections to their IDs for TOC navigation
  sectionIds: {
    hero: "ebook-design",
    overview: "ebook-section-1",
    solution: "ebook-section-2",
    images: "ebook-section-3",
    extraImage01: "ebook-section-4",
    extraImage02: "business-card",
    extraImages: "leaflet",
    results: "final-outcome",
  },
  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "ebook-design",
        label: "E-book design",
        subsections: [
          { id: "ebook-section-1", label: "Overview" },
          { id: "ebook-section-2", label: "The Solution" },
          { id: "ebook-section-3", label: "Visual Showcase" },
          { id: "ebook-section-4", label: "Requirements" },
        ],
      },
      {
        id: "business-card",
        label: "Business Card",
        subsections: [
          { id: "business-card-section-1", label: "Sketches" },
          { id: "business-card-section-2", label: "Design Process" },
        ],
      },
      {
        id: "leaflet",
        label: "Leaflet",
        subsections: [
          { id: "leaflet-section-1", label: "Design Exploration" },
          { id: "leaflet-section-2", label: "Final Design" },
        ],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
      },
    ],
  },
};
