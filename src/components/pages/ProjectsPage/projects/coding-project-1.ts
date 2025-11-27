import { Project } from "./types";

export const codingProject1: Project = {
  id: "Coding-Poject-1",
  title: "Coding Project 01 (Coming soon)",
  description: "Design engineering project.",
  comingSoon: true,
  imageUrl: "/src/assets/Other/ComingSoon.png",
  tags: [],
  year: "",
  role: "Design Engineer",
  client: "Personal Projects",
  duration: "1 months",
  overview:
    "LendingTree needed to redesign their product card interface for loan applications. The existing design had high drop-off rates and users found the information overwhelming and difficult to compare between different loan products.",
  challenge:
    "The main challenge was presenting complex financial information in a way that was both comprehensive and digestible. Users needed to understand interest rates, terms, fees, and eligibility requirements without feeling overwhelmed. The application process itself was taking an average of 15 minutes, leading to 68% abandonment rate.",
  solution:
    "I redesigned the product cards with a layered information architecture that progressively discloses details. The new design features clear visual hierarchy, comparison tools, and a streamlined application flow that guides users step-by-step. We added smart defaults and pre-filled information to reduce cognitive load.",
  discovery:
    "Through heatmap analysis and user testing sessions with 18 participants, I identified the specific points where users were getting confused or frustrated. I analyzed competitor products and conducted card sorting exercises to understand how users expected information to be organized.",
  exploration:
    "I created multiple layout variations, testing different ways to present APR, monthly payments, and loan terms. We explored card-based designs, list views, and comparison tables. Rapid prototyping and A/B testing helped us identify which patterns were most effective at driving conversions while maintaining transparency.",
  design:
    "The final design uses a card-based layout with expandable sections, allowing users to quickly scan key information or dive deeper into details. I designed an intelligent comparison tool that highlights differences between products and a progress indicator that shows users exactly where they are in the application process.",
  shipping:
    "We implemented the redesign using a gradual rollout strategy, monitoring key metrics at each stage. I created detailed documentation for the development team and conducted design QA throughout implementation. We launched with comprehensive analytics tracking to measure the impact on conversion and user satisfaction.",
  results: [
    "Application completion rate increased by 142%",
    "Time to complete application reduced from 15 to 6 minutes",
    "User confusion incidents decreased by 81%",
    "Conversion rate improved by 67%",
  ],
  images: [],
};
