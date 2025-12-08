import { Project } from "./types";

export const mobileBanking: Project = {
  id: "mobile-banking",
  title: "Grand Bank - Mobile Banking",
  description:
    "Designed an alternative application flow for declined credit card applicants to apply for Grand Bank loans with customizable add-ons, e-sign their application, and track status via mobile app.",
  imageUrl: "/src/assets/GrandBank/GrandBankHero.png",
  tags: ["Mobile", "Online Banking", "Loan Application"],
  year: "2025",
  role: "Product Designer",
  client: "Grand Bank",
  duration: "2 months",
  overview:
    "This project involved designing and developing a bespoke, mobile-first loan application flow for borrowers who might not qualify for traditional loan products. The aim was to create a clear, compliant experience that guided users through complex eligibility requirements.",
  challenge:
    "One of the biggest challenges was the feedback and iteration process. Because communication with the client was routed through another stakeholder, feedback often arrived late or in large batches, making it harder to maintain momentum. The project was also heavily high-fidelity and Figma-driven, which led to lengthy design revisions. I prefer environments where I can prototype directly in code to refine interactions more efficiently, but this workflow wasn’t possible in this role or project. Additionally, strict legal and client-specific constraints particularly around disclosures gradually reduced the simplicity of the early UX concept. While I understood the necessity of these requirements, they made the flow more complex than I would have ideally designed. With more direct communication and a more flexible prototyping setup, I would aim to maintain a cleaner, more intuitive experience.",

  shipping:
    "I worked closely with the developers to ship the project. We would check on frequently to make sure the project is on the right track. ",
  // highlightSection: {
  //   title: "Extra Section",
  //   content: "Placeholder text",
  // },

  // summaryText: "Placeholder text",
  // images: [],

  imageSection01: {
    title: "Loan application flow mapping",
    description:
      "This is a mapping of the loan application flow for Grand Bank. It shows the different steps involved in the loan application process. We used this to understand the user flow and design around any constraints or limitations.",
    imageUrl: "/src/assets/GrandBank/Research/ProdMappingGB.png",
  },
  imageSection02: {
    title: "Low fidelity sketches",
    description:
      "When time allowed, I would sketch out the different screens and flows for the loan application process. My go to tool was excalidraw. As it allows me to quickly sketch out ideas and iterate on them. I would then share the sketches with the team and get feedback on the different screens and flows. For this particular project, I did both desktop and mobile sketches. The clients requirement wa to go mobile first.",
    images: [
      "/src/assets/GrandBank/Ideation/LowFiGB.png",
      "/src/assets/GrandBank/Ideation/LowFiMobile.png",
    ],
  },
  imageSection03: {
    title: "High fidelity wireframes",
    description:
      "After the low fidelity sketches, I would then create high fidelity wireframes for the loan application process. I used Figma to create the wireframes. The client was able to see the different screens and flows for the loan application process and provide feedback on the different screens and flows. The client was also able to see the different interactions for the loan application process and provide feedback on the different interactions.",
    images: [
      "/src/assets/GrandBank/Wireframes/WireframeGB.png",
      "/src/assets/GrandBank/Wireframes/WireframeMobile.png",
    ],
  },
};
