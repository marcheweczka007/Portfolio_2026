import { Project } from "./types";

export const oneView: Project = {
  id: "One-view",
  title: "One view dashboard",
  description:
    "A story about joining a team with an existing design system and discovering the challenges of maintaining alignment between designers and developers. Through this experience, I learned that true consistency comes from collaboration, communication, and shared ownership.",
  imageUrl: "/src/assets/OneView/OneView.png",
  tags: ["SaaS", "Dashboard", "UI/UX"],
  year: "2024-2025",
  role: "Product Designer",
  client: "Internal Project",
  duration: "4 months",
  overview:
    "When I joined Ascent, I was introduced to our existing component library - which already included a wide range of components. However, many were inconsistent, outdated, or 'broken'. I was advised to create new components if I designed improved versions, rather than editing the existing ones. This approach made sense to me, especially after coming from my previous company, where no official design system existed. In that role, I noticed major inconsistencies across projects and took the initiative to create reusable components to bridge that gap. I aimed to bring visual and functional consistency to the product, even without formal guidance or a structured system.",
  challenge:
    "A few months later, a large bank client requested a custom loan application flow. The project became a turning point — it led to the decision to develop white-labelling capabilities so that the same flow could be adapted for multiple clients.Working closely with a developer, I conducted a page-by-page audit to align design and code. During this process, I discovered a critical issue:Our Figma components and the developers' code library were based on different versions of Material UI.This mismatch explained the frequent misalignments we had been seeing in design reviews and build outputs. At the same time, our internal design review process was overly rigid and pixel-perfect–focused. Instead of collaborative UI reviews to ensure usability and alignment, the reviews became detailed inspections of spacing, layer naming, and colour application. This slowed down progress and discouraged iteration.",
  solution:
    "I designed a modular dashboard system with pre-built templates and drag-and-drop functionality. The new interface features intelligent defaults, contextual help, and a progressive learning curve that reveals advanced features as users become more comfortable. We introduced data storytelling capabilities and collaborative features that transformed how teams work with data.",
  discovery:
    "Through contextual inquiry sessions with 20 users across different skill levels, I observed how they interacted with data visualization tools. I analyzed support tickets and conducted stakeholder interviews to identify the most critical pain points. The research phase included a comprehensive audit of the existing platform and competitive benchmarking.",
  exploration:
    "I facilitated design thinking workshops to generate ideas for simplifying complex workflows. We explored different approaches to progressive disclosure, template systems, and collaborative features. I created multiple concept sketches and tested them with users to validate assumptions before investing in high-fidelity designs.",
  design:
    "The design phase focused on creating a flexible component library that could support both simple and complex use cases. I designed an intelligent template system that learns from user behavior, a contextual toolbar that adapts based on the selected element, and a robust theming system. Every interaction was carefully crafted to feel responsive and predictable.",
  shipping:
    "I partnered with engineering to implement the design in sprints, prioritizing the template system and core visualization components first. We ran a closed beta with 50 power users who provided valuable feedback that shaped the final release. I created comprehensive documentation and tutorial videos to support the launch.",
  results: [
    "New user activation increased by 156% within first week",
    "Time to create first dashboard reduced from 45 minutes to 8 minutes",
    "Customer churn rate decreased by 42%",
    "Average session duration increased by 89%",
  ],
  images: [],
};
