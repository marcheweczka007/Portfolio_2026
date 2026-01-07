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
    "The first step in design engineering is to get the requirements and wireframes right. This is a critical step in the design engineering process because it sets the foundation for the rest of the process. In my opinion wireframes are more important than the high-fidelity design because they are more flexible and can be easily changed. Aslo if I'm the designer who codes them, I dont need to have the high-fidelity design, because I can code them myself.",
  image: "/src/assets/processes/diagramLinear.svg",
    benefitsTitle: "Benefits of wireframes",
  benefits: [
    "Validate ideas fast",
    "You cut down on endless design cycles",
    "Engineers love it — it removes ambiguity",
    "It reveals technical constraints early",
    "Users give better feedback on real interactions",
  ],
  whyItWorks: [
    "Lean prototyping works well because it lets teams test ideas quickly without wasting time on perfect designs. You build something simple, real, and usable. Then you get feedback from users and iterate based on that feedback.",
  
  ],
};

export const componentFirstContent = {
  title: "Component-first thinking",
  description:
    "I use component-first thinking to build prototypes. I'm currently using Cursor, and frameworks like shadcn/ui, Tailwing CSS and React to build prototypes.",
};

export const sections = [
  { id: "process", label: "My Process" },
  { id: "component-first", label: "Component-first" },
  { id: "feedback-loop", label: "Design → Code feedback loop" },
  { id: "small-team", label: "Making small teams faster" },
];

export default processes;
