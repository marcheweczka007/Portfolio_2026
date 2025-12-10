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
      "The main focus of this project was to design a FinOps e-book that would promote the framework and its benefits to potential clients and companies. I was given a lot of creative freedom, which made it one of my favourite projects to work on. It allowed for a more playful approach and required me to create illustrations and lean into a more graphic-design–driven style.",
    imageUrl: "/src/assets/E-bookProject/EBookHero.png",
  },
  imageSection01: {
    title: "Requirements",
    description:
      "Once I had the requirements, I created a visual representation of every page to better understand the content and structure of the e-book. This helped me determine how many illustrations I needed to create and allowed me to give the client an accurate project estimate.",
    imageUrl: "/src/assets/E-bookProject/Requirements.png",
  },
  imageSection02: {
    title: "Moodboard",
    description:
      "Once I understood the requirements what content would go into the e-book, the illustrations, and the overall direction, I shifted into my creative mode. I explored different examples, colours, and layout approaches to gather inspiration. I started with a moodboard to help define the look and feel I wanted to achieve. The client already had an established colour palette, which I incorporated into the moodboard. The core themes included shifting left, engineering, cost optimisation, and other FinOps-related topics.",
    images: [
      "/src/assets/E-bookProject/Moodboard.png",
      "/src/assets/E-bookProject/Moodboard01.png",
    ],
  },
  imageSection03: {
    title: "Cover examples",
    description:
      "The project was divided into three parts—or rather, three feedback loops. The first focused on the cover design. I created three different concepts with several variations to show the client possible directions for the e-book. The middle pink cover was the one the client selected. From there, I refined the design further and added more detail and polish.",
    imageUrl: "/src/assets/E-bookProject/Covers.png",
  },
  imageSection04: {
    title: "First and last page examples",
    description:
      "With the cover selected, I had better idea on what the first and last pages will look like. Next step was to provide examples of these pages to show the client how the e-book will look like.",
    images: [
      "/src/assets/E-bookProject/FrontPages.png",
      "/src/assets/E-bookProject/EndPages.png",
    ],
  },

  textBlock01: [
    "The rest of the project was focused on the content and illustrations. Where I had to create illustrations for the content and make sure the layout is consistent and easy to read.",
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
  
  button: {
    title: "View the e-book",
    link: "https://www.infracost.io/shifting-finops-left-linkedin/",
  },
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
    "I can honestly say, this project was so much fun to work on. I had pleasure to work with Infracost team, and they were great in to work with. I'm please with the outcome and the work we did together.",
    "I’m always excited to take on new projects and challenge myself, whether it’s a graphic design project or a coding project. I’m keen to challenge myself and learn new things along the way.",
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
