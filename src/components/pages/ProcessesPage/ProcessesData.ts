const processes = {
  backToHome: "Back to Home",
  sectionLabel: "Processes",
  title: "How I’m moving closer to design engineering*",
  subtitle:
    "*I'm still early in my design engineering journey, but I'm learning a lot and I'm excited to share my processes with you. Building my portfolio in code has helped me stay closer to how products are actually made. It’s pushed me to think more in components, constraints, and real implementation. This way of working feels like the right direction for me as a product designer.",
};

export const requirements = {
  title: "My process",
  description:
    "I work at the intersection of design and engineering. I still start with product thinking and UX fundamentals, but I often use code as a design tool to reduce handover friction and learn faster.  ",
  image: "/assets/processes/diagramLinear.svg",
  benefitsTitle: "Benefits of design + code approach",
  benefits: [
    "Interactive prototypes",
    "Less time spend on handover",
    "Works well for small teams",
    "It reveals technical constraints early",
  ],
};

export const figmaVScodeContent = {
  title: "When I design in Figma vs code",
  description:
    "I don’t design everything in code. Early on, I use low-fidelity sketches, wireframes, and Figma to explore ideas quickly, align with stakeholders, and focus on user needs without technical noise. I move into code once structure, intent, and direction are clear, especially when interaction, state, or real constraints start to matter. That’s when code becomes the most honest design tool.",
  description2:
    "",
  image: "/assets/processes/desVScode.png",
};

export const componentFirstContent = {
  title: "Steps to build a product",
  description:
    "I use component-first thinking to build prototypes. I'm currently using Cursor, and frameworks like shadcn/ui, Tailwing CSS and React to build prototypes.",
};

export const sections = [
  { id: "process", label: "My Process" },
  { id: "figmaVScode", label: "When I design in Figma vs code" },
  { id: "component-first", label: "Steps to build a product" },
  { id: "feedback-loop", label: "Why this approach" },
];

export default processes;
