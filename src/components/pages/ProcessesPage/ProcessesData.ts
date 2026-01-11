const processes = {
  backToHome: "Back to Home",
  sectionLabel: "Processes",
  title: "Processes that I use as a design engineer*",
  subtitle:
    "*I'm still early in my design engineering journey, but I'm learning a lot and I'm excited to share my processes with you.",
};

export const requirements = {
  title: "My process",
  description:
    "I work at the intersection of design and engineering, using code as a core design tool to reduce handover friction and accelerate learning. My process is intentionally lean, iterative, and well-suited to fast-moving product teams.",
  image: "/src/assets/processes/diagramLinear.svg",
    benefitsTitle: "Benefits of design + code approach",
  benefits: [
    "Interactive prototypes",
    "Less time spend on handover",
    "Works well for small teams",
    "It reveals technical constraints early",
  ],
  whyItWorks: [
    "I’ve repeatedly seen teams invest heavily in design handovers, only for the final product to fall short of the original intent. By designing in code, this gap is significantly reduced, enabling faster iteration and clearer ownership, particularly valuable in small to mid-sized teams where momentum matters.",
  
  ],
};

export const componentFirstContent = {
  title: "Steps to build a product in code",
  description:
    "I use component-first thinking to build prototypes. I'm currently using Cursor, and frameworks like shadcn/ui, Tailwing CSS and React to build prototypes.",
};

export const sections = [
  { id: "process", label: "My Process" },
  { id: "component-first", label: "Component-first" },
  { id: "feedback-loop", label: "Feedback loop" },
  { id: "small-team", label: "Small team" },
];

export default processes;
