import { Project } from "./types";
import { ScrollProgress } from "../../../ui/scrollProgress";

export const infracostProjects: Project = {
  //Add a button when the user can view or download the e-book
  id: "E-book-and-business-card-design",
  title: "Infracost (Graphic design projects) ",
  description:
    "This project is a collection of graphic design projects I have worked on for Infracost. I have created a consistent look and feel for the 3 items.",
  imageUrl: "/src/assets/E-BookProject/InfraHero.png",
  tags: ["E-book", "Business card", "Leaflet"],
  year: "",
  overviewSection: {
    overviewTitle: "Overview",
    overviewDescription:
      "Collaboration with Infracost to create an e-book for the FinOps community. The e-book helped visualise the benefits of FinOps and how it can help businesses save money.",
    executionTitle: "Execution",
    executionDescription:
      "This project was a collaboration with Infracost to create an e-book for  a FinOps community. Along with the e-book I designed a leaflet and business cards that were used diging the conference.",
    exectutionBullets: [
      "Design and showcase the business cards",
      "Ensure the leaflet is consistent with the company branding and prepare for printing",
      "Create illustrations for the e-book to help visualise the benefits of FinOps and how it can help businesses save money",
    ],
  },
  summaryText: "",

  sectionStart: {
    overviewTitle: "E-book project",
    description:
      "The e-book project focused on designing an online resourse for the potential customers to learn about the benefits of FinOps. I was given lot of creative freedom, when working on this project, it was one of my favourite projects to work on.",
    imageUrl: "/src/assets/E-bookProject/EBookHero.png",
  },
  imageSection01: {
    title: "Requirements",
    description:
      "When I got the requirements, I decided to devide the e-book into presentation slides, to help me structure the content. This helped me recognise how many illustrations I need to create for the e-book.",
    imageUrl: "/src/assets/E-bookProject/Requirements.png",
  },
  imageSection02: {
    title: "Moodboard",
    description:
      "Once I understood the problems and requirements, I explored different ways of structuring the product card to improve clarity and reduce text overload. I started with quick sketches and low-fidelity wireframes to test different information hierarchies. The focus was on making the application status clear at a glance while keeping the design engaging and easy to scan.",
    images: [
      "/src/assets/E-bookProject/Moodboard.png",
      "/src/assets/E-bookProject/Moodboard01.png",
    ],
  },
  imageSection03: {
    title: "Cover examples",
    description:
      "I usually create 3–5 cover concepts so the client has options to react to. It gives them space to share feedback and helps us decide which direction to develop further.",
    imageUrl: "/src/assets/E-bookProject/Covers.png",
  },
  imageSection04: {
    title: "First and last page examples",
    description:
      "Examples of first and last page of the e-book, to show the client how the e-book will look like.",
    images: [
      "/src/assets/E-bookProject/FrontPages.png",
      "/src/assets/E-bookProject/EndPages.png",
    ],
  },
  textBlock01: [
    "The examples of the pages were designed to show the client how the e-book will look like. I sticked to the same content but mostly played with the layout and colour.",
    "For the last page, the requirement was to have a call to action button for potential customers to encourage them to sign up for a free trial.",
  ],

  sectionMiddle: {
    title: "Business card",
    description:
      "For this mini project I was given a simple brief and few examples of the business card. The client wanted to keep the same look and feel as the other items. At first I decided to play with colour, logo and layout, just to see what options we have. I created a few different versions to show the client the options.",
    imageUrl: "/src/assets/E-bookProject/BusinessCardSectionMiddle.png",
  },
  sideBySideSectionsLeft: [
    {
      title: "Experimentation phase",
      description:
        "I like to start broad, and experiment with different colours, logo and layout of the business card to see what options we have. At this stage, I try different colour combinations and layouts to see what works best.",
      image: "/src/assets/E-bookProject/BusinessCards02.png",
    },
    {
      title: "Examples for client",
      description:
        "I created a few different versions to show the client the options. The client liked the middle option the most. But they wanted to see few more veriations of this option.",
      image: "/src/assets/E-bookProject/BusinessCardsSection01.png",
    },
  ],
  sectionEnd: {
    title: "Feaflet",
    description:
      "For this mini project I was given a simple brief and few examples of the business card. The client wanted to keep the same look and feel as the other items. At first I decided to play with colour, logo and layout, just to see what options we have. I created a few different versions to show the client the options.",
    imageUrl: "/src/assets/E-bookProject/LeafletSectionEnd.png",
  },
  sideBySideSectionsRight: [
    {
      title: "Experimentation phase",
      description:
        "For the leaflet, I was given a colour palette and few examples of the leaflet. I started with a moodboard to get a sense of the look and feel of the leaflet. I then created a few different versions to show the client the options.",
      image: "/src/assets/E-bookProject/LeafletExperiment.png",
    },
    {
      title: "Examples for client",
      description:
        "The leaflet was the most challenging from all the mini projects. As it contained a lot of text and images, I had to be careful with the layout and spacing. I was required to show all the imformation, and still make it look visually appealing. I think the most difficult about design is the content, and how to presemt it well whch keeping all the required information.",
      image: "/src/assets/E-bookProject/LeafletExamples.png",
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

  sectionIds: {
    sectionStart: "projectSectionDescriptionStart",
    imageSection01: "Image01",
    imageSection02: "Image02",
    imageSection03: "Image03",
    imageSection04: "Image04",
    sectionMiddle: "business-card",
    sectionEnd: "leaflet",
    showcaseGallery: "final-outcome",
    overviewTitle: "overviewTitle",
  },
    results: [
    "The e-book was well received by the client and was used to promote the FinOps community.",
    "The business card was well received by the client and was used to promote the FinOps community.",
  ],
  tableOfContents: {
    title: "Table of Contents",
    items: [
      {
        id: "overviewTitle",
        label: "Overview",
      },
      {
        id: "projectSectionDescriptionStart",
        label: "E-book project",
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
