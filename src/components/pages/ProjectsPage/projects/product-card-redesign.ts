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
  overview:
    "Re-design and imporve the overall experience for the borrower when they are applying for a loan. By improving the product card interface, and help borrower understand their loan stageg and progress.",
  challenge:
    "Unlike most projects, I wasn’t restricted by a design system. As it was one of my first projects at the company , my manager encouraged me to be creative and explore new approaches. The key challenge for me was understanding what information borrowers actually need from the product cards. Since I was working mostly independently, I asked many questions and collaborated closely with the developer and product manager to build a strong understanding of what was the card's role in the application flow.",
  solution:
    "I designed a mobile-first experience with rich product imagery, AR try-on features, and a streamlined checkout process. The new design includes personalized recommendations, social proof elements, and a persistent mini-cart that keeps users informed without interrupting their browsing. We also implemented a one-click checkout option and guest checkout to reduce friction.",
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
    imageUrl: "/src/assets/ApplicationCards/02_MappingTheFlow.png",
  },
  discovery:
    "I conducted extensive user research including shopping behavior analysis, cart abandonment surveys, and heatmap studies. We interviewed 30 target customers to understand their fashion shopping habits and pain points. The research revealed that trust, visual presentation, and mobile experience were the three critical factors affecting conversion.",
  exploration:
    "I explored various approaches to product presentation, including grid vs. masonry layouts, different filtering systems, and innovative checkout flows. We tested AR try-on features, virtual styling assistants, and social shopping features. I created clickable prototypes for each major concept and conducted A/B testing with real users to validate design decisions.",
  design:
    "The final design emphasized visual storytelling with large, high-quality product imagery and immersive full-screen views. I designed a smart filtering system that learns from user preferences, a streamlined checkout that works seamlessly on mobile, and integrated social proof elements throughout the shopping journey. The design system was built mobile-first with careful attention to touch targets and gesture interactions.",
  shipping:
    "We launched the redesign using a phased rollout strategy, starting with 10% of traffic and gradually increasing based on performance metrics. I worked with the development team to ensure pixel-perfect implementation and smooth animations. Post-launch, we ran continuous optimization experiments based on user behavior analytics and feedback.",
  results: [
    "Overall conversion rate increased from 1.2% to 3.8%",
    "Mobile conversion rate increased by 215%",
    "Cart abandonment reduced from 78% to 52%",
    "Average order value increased by 34%",
  ],
  images: [],
  // Process section configuration (optional - will use defaults if not provided)
  processTitle: "The Process",
  processDescription:
    "The project was flexible but followed a structured process to allow me to explore and deliver the best solution for the users.",
  processPhases: [
    {
      title: "Discovery",
      description:
        "I conducted extensive user research including shopping behavior analysis, cart abandonment surveys, and heatmap studies. We interviewed 30 target customers to understand their fashion shopping habits and pain points.",
      // image: "/src/assets/ApplicationCards/discovery-phase.png", // Optional image
    },
    {
      title: "Exploration",
      description:
        "I explored various approaches to product presentation, including grid vs. masonry layouts, different filtering systems, and innovative checkout flows. We tested AR try-on features and virtual styling assistants.",
      // image: "/src/assets/ApplicationCards/exploration-phase.png", // Optional image
    },
    {
      title: "Design",
      description:
        "The final design emphasized visual storytelling with large, high-quality product imagery and immersive full-screen views. I designed a smart filtering system that learns from user preferences.",
      // image: "/src/assets/ApplicationCards/design-phase.png", // Optional image
    },
    {
      title: "Shipping",
      description:
        "We launched the redesign using a phased rollout strategy, starting with 10% of traffic and gradually increasing based on performance metrics. Post-launch, we ran continuous optimization experiments.",
      // image: "/src/assets/ApplicationCards/shipping-phase.png", // Optional image
    },
  ],
};
