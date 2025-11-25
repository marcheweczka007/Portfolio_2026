import React from "react";
import { Button } from "../ui/button";
import Timeline from "../ui/timeline";
import ascentLogo from "../../assets/experience/ascentplatformLogo.jpg";

import grafterrLogo from "../../assets/experience/grafterrLogo.png";
import infracostLogo from "../../assets/experience/infracostLogo.png";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../../App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import {
  ArrowLeft,
  Zap,
  Search,
  Box,
  Sparkles,
  Layers,
  Code2,
} from "lucide-react";
import portraitImage from "../../assets/zuza_portfolio.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Footer } from "../ui/Footer";

interface AboutPageProps {
  onBack: () => void;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
}

const aboutContent = {
  backToHome: "Back to Home",
  pageTitle: "Hello again 👋 Here’s a little about me and my experience.",
  bioP1:
    "I'm a product designer with nearly 3 years of experience working for SaaS companies. I'm comfortable wearing multiple hats—from shaping design systems to putting together an e-book for a marketing campaign.",
  bioP2:
    " I work closely with developers, and lately I’ve been learning to code myself. With the help of AI tools, I prototype and test ideas quickly, turning concepts into real, usable solutions much faster.",
  bioP3:
    "I’ve worked solo and inside cross-functional teams, and I’ve learned that the best work happens when everyone builds together.",
  bioP4: "Open to new opportunities where I can contribute and grow.",
  expertiseTitle: "Areas of Expertise",
  leanUx: "Lean UX",
  leanUxContent1:
    "I practice Lean UX to minimize waste and maximize learning through rapid experimentation. This approach focuses on getting ideas in front of users quickly, gathering feedback, and iterating based on real-world insights rather than assumptions.",
  leanUxContent2: "Key principles I apply include:",
  leanUxPoint1: "Cross-functional collaboration from day one",
  leanUxPoint2: "Building MVPs and testable hypotheses",
  leanUxPoint3: "Continuous user validation throughout the design process",
  leanUxPoint4: "Prioritizing outcomes over outputs",
  leanUxPoint5: "Embracing uncertainty and learning from failure",
  research: "Research",
  researchContent1:
    "Research is the foundation of all my design decisions. I employ both qualitative and quantitative methods to deeply understand user behaviors, motivations, and pain points.",
  researchContent2: "My research toolkit includes:",
  researchPoint1: "User interviews and contextual inquiry",
  researchPoint2: "Usability testing (moderated and unmoderated)",
  researchPoint3: "Survey design and analysis",
  researchPoint4: "Analytics interpretation and behavioral data analysis",
  researchPoint5: "Competitive analysis and market research",
  researchPoint6: "Journey mapping and service design blueprints",
  researchPoint7: "Card sorting and tree testing for information architecture",
  ooux: "OOUX",
  oouxContent1:
    "Object-Oriented UX (OOUX) is a methodology that helps me design scalable, coherent digital systems by thinking in terms of objects rather than pages or screens.",
  oouxContent2: "How I apply OOUX:",
  oouxPoint1:
    "Identifying core objects and their relationships early in the design process",
  oouxPoint2: "Creating object maps to visualize system architecture",
  oouxPoint3: "Defining object attributes and actions to ensure consistency",
  oouxPoint4:
    "Building flexible, modular designs that adapt to different contexts",
  oouxPoint5: "Collaborating with developers using a shared mental model",
  oouxPoint6:
    "Reducing technical debt through thoughtful object-based design decisions",
  aiPrototyping: "AI + Rapid Prototyping",
  aiPrototypingContent1:
    "I leverage cutting-edge AI tools to accelerate the design process and explore more possibilities in less time. AI enhances rather than replaces the creative process, allowing me to focus on strategic thinking and user empathy.",
  aiPrototypingContent2: "My AI-enhanced workflow includes:",
  aiPrototypingPoint1: "Using AI for rapid ideation and concept generation",
  aiPrototypingPoint2: "Generating realistic copy and content for prototypes",
  aiPrototypingPoint3:
    "Creating multiple design variations to test different approaches",
  aiPrototypingPoint4:
    "Automating repetitive tasks to focus on high-impact work",
  aiPrototypingPoint5:
    "Synthesizing research findings and identifying patterns",
  aiPrototypingPoint6: "Building interactive, high-fidelity prototypes faster",
  aiPrototypingPoint7:
    "Exploring AI-powered personalization and adaptive interfaces",
  designSystem: "Design Systems",
  designSystemContent1:
    "I believe in the power of design systems to create consistency, accelerate product development, and improve collaboration between design and engineering teams.",
  designSystemContent2: "My design system philosophy:",
  designSystemPoint1:
    "Start small with foundational elements (colors, typography, spacing)",
  designSystemPoint2:
    "Build component libraries that are flexible yet opinionated",
  designSystemPoint3:
    "Document patterns and usage guidelines for the entire team",
  designSystemPoint4: "Establish design token architecture for scalability",
  designSystemPoint5:
    "Create governance processes that balance consistency with innovation",
  designSystemPoint6:
    "Prioritize accessibility and inclusive design from the start",
  designSystemPoint7:
    "Leverage existing systems (Material, Ant Design, shadcn/ui) when appropriate",
  coding: "Coding",
  codingContent1:
    "My coding skills enable me to communicate more effectively with engineering teams, prototype interactions that would be difficult to convey in static designs, and understand technical constraints early in the design process.",
  codingContent2: "Technical capabilities:",
  codingPoint1: "HTML, CSS, and modern JavaScript (ES6+)",
  codingPoint2: "React and component-based architecture",
  codingPoint3: "CSS frameworks (Tailwind CSS, styled-components)",
  codingPoint4: "Building functional prototypes with real data",
  codingPoint5: "Version control with Git and collaborative workflows",
  codingPoint6: "Understanding of responsive design implementation",
  codingPoint7: "Basic knowledge of APIs and data structures",
  codingPoint8: "Performance optimization and accessibility best practices",
};
const processesContent = {
  backToHome: "Back to Home",
  title: "Processes",
  subtitle: "How I work as a product design (engineer*)",
};
const projectsContent = {
  backToHome: "Back to Home",
  backToProjects: "Back to Projects",
  projects: "Projects",
  pageTitle: "Projects",
  pageDescription:
    "A collection of my work across different platforms and industries",
  grandBank: {
    title: "Grand Bank",
    tags: ["Mobile app", "Banking", "SaaS"],
  },
  productCard: {
    title: "Product card",
    tags: ["Re-design", "Loan application", "SaaS"],
  },
  oneView: {
    title: "One view",
    tags: ["Dashboard", "SaaS"],
  },
  promoEbook: {
    title: "Promo E-Book",
    tags: ["FinOps", "Marketing", "Freelance"],
  },
  kiosk: {
    title: "Kiosk",
    tags: ["SaaS", "Large screen"],
  },
  funProjects: {
    title: "Fun projects",
    tags: ["UI experimentations", "Personal project"],
  },
};

export function AboutPage({
  onBack,
  onProjectsClick,
  onProcessesClick,
  onAboutClick,
}: AboutPageProps) {
  const t = aboutContent;

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-purple opacity-20 -z-10 animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 left-0 w-64 h-64 blob-purple opacity-20 -z-10 animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />

      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {t.backToHome}
        </Button>
      </div>

      {/* Profile Section */}
      <section className="container mx-auto max-w-4xl px-6 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
              <ImageWithFallback
                src={portraitImage}
                alt="Zuza Marchewka"
                className="w-full h-full object-cover rounded-8xl"
              />
            </div>
          </div>

          <div className="md:w-3/5">
            <h1 className="mb-6">{t.pageTitle}</h1>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.bioP1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.bioP2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.bioP3}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mt-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary">{t.bioP4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section className="container mx-auto max-w-4xl px-6 mb-20">
        <h2 className="mb-8">{t.expertiseTitle}</h2>

        <Accordion type="multiple" className="space-y-4">
          <AccordionItem
            value="lean-ux"
            className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.leanUx}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">{t.leanUxContent1}</p>
              <p className="mb-4">{t.leanUxContent2}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.leanUxPoint1}</li>
                <li>{t.leanUxPoint2}</li>
                <li>{t.leanUxPoint3}</li>
                <li>{t.leanUxPoint4}</li>
                <li>{t.leanUxPoint5}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="research"
            className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.research}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">{t.researchContent1}</p>
              <p className="mb-4">{t.researchContent2}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.researchPoint1}</li>
                <li>{t.researchPoint2}</li>
                <li>{t.researchPoint3}</li>
                <li>{t.researchPoint4}</li>
                <li>{t.researchPoint5}</li>
                <li>{t.researchPoint6}</li>
                <li>{t.researchPoint7}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="ooux"
            className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.ooux}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">{t.oouxContent1}</p>
              <p className="mb-4">{t.oouxContent2}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.oouxPoint1}</li>
                <li>{t.oouxPoint2}</li>
                <li>{t.oouxPoint3}</li>
                <li>{t.oouxPoint4}</li>
                <li>{t.oouxPoint5}</li>
                <li>{t.oouxPoint6}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="ai-prototyping"
            className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.aiPrototyping}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">{t.aiPrototypingContent1}</p>
              <p className="mb-4">{t.aiPrototypingContent2}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.aiPrototypingPoint1}</li>
                <li>{t.aiPrototypingPoint2}</li>
                <li>{t.aiPrototypingPoint3}</li>
                <li>{t.aiPrototypingPoint4}</li>
                <li>{t.aiPrototypingPoint5}</li>
                <li>{t.aiPrototypingPoint6}</li>
                <li>{t.aiPrototypingPoint7}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="design-system"
            className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.designSystem}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">{t.designSystemContent1}</p>
              <p className="mb-4">{t.designSystemContent2}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.designSystemPoint1}</li>
                <li>{t.designSystemPoint2}</li>
                <li>{t.designSystemPoint3}</li>
                <li>{t.designSystemPoint4}</li>
                <li>{t.designSystemPoint5}</li>
                <li>{t.designSystemPoint6}</li>
                <li>{t.designSystemPoint7}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="coding"
            className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.coding}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">{t.codingContent1}</p>
              <p className="mb-4">{t.codingContent2}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.codingPoint1}</li>
                <li>{t.codingPoint2}</li>
                <li>{t.codingPoint3}</li>
                <li>{t.codingPoint4}</li>
                <li>{t.codingPoint5}</li>
                <li>{t.codingPoint6}</li>
                <li>{t.codingPoint7}</li>
                <li>{t.codingPoint8}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="container mx-auto max-w-4xl px-6 mb-10">
        Work Experience
      </section>
      {/* Experience Timeline */}
      <section className="container mx-auto max-w-4xl px-6 mb-20">
        <Timeline
          items={[
            {
              icon: ascentLogo,
              company: "Ascent Platrorm",
              role: "Product Designer",
              year: "2024–2025",
            },
            {
              icon: infracostLogo,
              company: "Infracost ",
              role: " (Freelance) Graphic Designer",
              year: "2024",
            },
            {
              icon: grafterrLogo,
              company: "Grafterr",
              role: "Junior UX Designer",
              year: "2023",
            },
          ]}
        />
      </section>

      <Footer
        onHomeClick={onBack}
        onProjectsClick={onProjectsClick}
        onProcessesClick={onProcessesClick}
        onAboutClick={onAboutClick}
      />
    </div>
  );
}
