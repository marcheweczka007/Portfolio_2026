import { Project } from "./types";

export const infracostProjects: Project = {
  //Add a button when the user can view or download the e-book
  id: "E-book-and-business-card-design",
  title: "Infracost (Graphic design projects) ",
  description:
    "This project is a collection of graphic design projects I have worked on for Infracost. I have created a consistent look and feel for the 3 items.",
  imageUrl: "/src/assets/E-BookProject/EBookHero.png",
  tags: ["E-book", "Business card", "Leaflet"],
  year: "2024",
  role: "Graphic Designer (Freelance)",
  client: "Infracost",
  duration: "1 month",
  overview:
    "Collaboration with Infracost to create an e-book for the FinOps community. The e-book helped visualise the benefits of FinOps and how it can help businesses save money.",
  solution: "",
  extraText: "",
  extraImage01: {
    title: "Requirements",
    description:
      "When I got the requirements, I decided to devide the e-book into presentation slides, to help me structure the content. This helped me recognise how many illustrations I need to create for the e-book.",
    imageUrl: "/src/assets/E-bookProject/Requirements.png",
  },
  extraImage02: {
    title: "Moodboard",
    description:
      "Once I understood the problems and requirements, I explored different ways of structuring the product card to improve clarity and reduce text overload. I started with quick sketches and low-fidelity wireframes to test different information hierarchies. The focus was on making the application status clear at a glance while keeping the design engaging and easy to scan.",
    images: [
      "/src/assets/E-bookProject/Moodboard.png",
      "/src/assets/E-bookProject/Moodboard01.png",
    ],
  },
  extraImage03: {
    title: "Cover examples",
    description:
      "I usually create 3–5 cover concepts so the client has options to react to. It gives them space to share feedback and helps us decide which direction to develop further.",
    imageUrl: "/src/assets/E-bookProject/Covers.png",
  },
  extraImage04: {
    title: "First and last page examples",
    description:
      "Examples of first and last page of the e-book, to show the client how the e-book will look like.",
    images: [
      "/src/assets/E-bookProject/FrontPages.png",
      "/src/assets/E-bookProject/EndPages.png",
    ],
  },
  descriptionExtra01: [
    "The examples of the pages were designed to show the client how the e-book will look like. I sticked to the same content but mostly played with the layout and colour.",
    "For the last page, the requirement was to have a call to action button for potential customers to encourage them to sign up for a free trial.",
  ],

  newSection01: {
    title: "Business card",
    description:
      "For this mini project I was given a simple brief and few examples of the business card. The client wanted to keep the same look and feel as the other items. At first I decided to play with colour, logo and layout, just to see what options we have. I created a few different versions to show the client the options.",
    images: [
      "/src/assets/E-bookProject/BusinessCards02.png",
      "/src/assets/E-bookProject/BusinessCardsSection01.png",
    ],
  },

  newSection02: {
    title: "Feaflet",
    description:
      "For this mini project I was given a simple brief and few examples of the business card. The client wanted to keep the same look and feel as the other items. At first I decided to play with colour, logo and layout, just to see what options we have. I created a few different versions to show the client the options.",
    images: ["", ""],
  },

  extraImages: {
    title: "Final outcome",
    description: "Final outcome of the e-book, business card and leaflet.",
    images: [
      "/src/assets/E-bookProject/BusinessCardsFinal.png",
      "/src/assets/E-bookProject/LeafletFinal.png",
      "/src/assets/E-bookProject/EbookFinal01.png",
      "/src/assets/E-bookProject/EbookFinal02.png",
    ],
  },
  images: [],
  // Section ID mapping - maps standard sections to their IDs for TOC navigation
  sectionIds: {
    hero: "ebook-design",
    extraImage01: "Image01",
    extraImage02: "Image02",
    extraImage03: "Image03",
    extraImage04: "Image04",
    newSection: "business-card",
    newSection01: "leaflet",
    extraImages: "final-outcome",
  },
  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "ebook-design",
        label: "E-book",
        subsections: [
          { id: "Image01", label: "Requirements" },
          { id: "Image02", label: "Moodboard" },
          { id: "Image03", label: "Cover examples" },
          { id: "Image04", label: "First and last page" },
        ],
      },
      {
        id: "business-card",
        label: "Business Card",
        subsections: [
          { id: "business-card-section-1", label: "Experimentation phase" },
          { id: "business-card-section-2", label: "Examples for client" },
        ],
      },
      {
        id: "leaflet",
        label: "Leaflet",
        subsections: [
          { id: "leaflet-section-1", label: "Experimentation phase" },
          { id: "leaflet-section-2", label: "Examples for client" },
        ],
      },
      {
        id: "final-outcome",
        label: "Final outcome",
      },
    ],
  },
};
