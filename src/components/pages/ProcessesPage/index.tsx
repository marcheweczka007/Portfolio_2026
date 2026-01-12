import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card.tsx";
import { ArrowRight, Check } from "lucide-react";
import processes, {
  sections,
  requirements,
  componentFirstContent,
} from "./ProcessesData.ts";
import BackButton from "../../pageUtilities/BackButton.tsx";
import PageLayout from "../../pageUtilities/PageLayout.tsx";
import { CTASection } from "../../ui/CustomUI/CTASection";
import { ScrollToTop } from "../../ui/scrollToTop.tsx";
export default function ProcessesPage() {
  const navigate = useNavigate();
  const processesContent = processes;
  const requirementsContent = requirements;
  const componentFirst = componentFirstContent;
  const [activeSection, setActiveSection] = useState("prototyping");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Account for sticky nav (top-20 = 80px) + nav bar height (~60px) + extra padding
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageLayout>
      <BackButton text={processesContent.backToHome} />

      {/* Header */}
      <div className=" Grid gap-10 container mx-auto max-w-6xl px-6">
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            {processesContent.sectionLabel}
          </p>
          <h2 className="text-4xl font-bold">{processesContent.title}</h2>
          <p className="text-muted-foreground mt-3 mb-4">
            {processesContent.subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="sticky top-20 z-40 bg-orange-100/10 backdrop-blur-xl border-b border-orange-200/10 mb-12">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-sm shadow-orange-200/50"
                    : "bg-orange-100 text-muted-foreground hover:bg-orange-200 hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Requirements and wireframes */}
      <div className="container mx-auto max-w-6xl px-6 ">
        <section id="process" className="scroll-mt-32 mb-24">
          <div className="mb-12">
            <h2 className="mb-3">{requirements.title}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-6xl">
              {requirements.description}
            </p>
            <img
              src={requirements.image}
              alt="Requirements and wireframes"
              className="w-full h-auto rounded-xl my-4"
            />
          </div>

          {/* Lean prototyping - more info */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-1 gap-6">
              {/* Benefits of lean prototyping */}
              <Card className="bg-gray-100/20 border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {requirements.benefitsTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>


            </div>
          </div>
        </section>

        {/* Component First Thinking */}
        <section id="component-first" className="scroll-mt-32 mb-24">
          <h2 className="text-xl font-medium mb-4">
            {" "}
            {componentFirstContent.title}
          </h2>


          {/* Step-by-step process */}
          <div className="mb-8">
            <h3 className="mb-8">The steps I would apply when building a product in code, this can vary depending on the project and the team.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-start gap-4 mb-8 justify-center">
              <Card className=" bg-orange-200/20 border-none  w-full min-w-[200px]">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium mb-2">1. Problem definition</p>
                  <p className="text-sm text-gray-700">
                    I start by clarifying the problem. I define the product goals, user needs, technical constraints, and success metrics. Understanding constraints early allows me to better plan the project and avoid rework.
                  </p>
                </CardContent>
              </Card>

              <Card className=" bg-orange-200/30 border-none  w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium mb-2">2. Low-fidelity exploration</p>
                  <p className="text-sm text-gray-700">
                    I explore ideas quickly through sketches, wireframes, and rough layout experiments. At this stage, speed matters more than polish, the goal is to validate structure, flow, and intent before investing in detail.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-orange-200/40 border-none  w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium mb-2">3. Lean prototyping in code</p>
                  <p className="text-sm text-gray-700">
                    Rather than relying on static high-fidelity designs, I build interactive prototypes directly in code. I treat code as the highest-fidelity design artefact, allowing it to be explored in the same medium the product will ship in.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-orange-200/50 border-none  w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium mb-2">4. Feedback</p>
                  <p className="text-sm text-gray-700">
                    Working in code enables early and frequent feedback from users, product managers, and engineers. Because prototypes are interactive, feedback is grounded in real usage rather than interpretation of static screens.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-orange-200/60 border-none  w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium mb-2">5. Visual refinement</p>
                  <p className="text-sm text-gray-700">
                    Once flows and interactions are validated, I polish visual hierarchy, spacing, motion, and accessibility directly within the codebase. This ensures design decisions remain aligned with technical realities and production standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-orange-200/70 border-none  w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium mb-2">6. Production ready handoff</p>
                  <p className="text-sm text-gray-700">
                    The result is production-ready code rather than a traditional design handoff. This significantly shortens feedback loops and reduces misalignment between design intent and the final experience
                  </p>
                </CardContent>
              </Card>
            </div>


          </div>
        </section>

        {/* Feedback loop */}
        <section id="feedback-loop" className="scroll-mt-32 mb-24">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Why this approach</h2>
            <p className="text-muted-foreground leading-relaxed max-w-6xl">
              An overview of why designing in code reduces friction, improves alignment, and helps teams move faster.
            </p>
          </div>

                      <Card className="bg-muted/30">
              <CardContent className="p-6">
                <p className="text-lg font-medium mb-4">Reasons why this approach works</p>
                <ul className="space-y-3">
                  {[
                    "This approach works best in fast-moving product teams where learning speed matters as much as execution. By collapsing design and engineering into a single workflow, feedback loops are shorter, intent is clearer, and decisions are validated earlier.",
                    "Designing in code doesn’t replace design thinking — it relocates it closer to production. Visual decisions, interaction details, and technical constraints are resolved together, rather than across handovers.",
                    "The result is fewer surprises late in development, stronger ownership of the final experience, and products that ship faster without sacrificing quality.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>


        </section>



        {/* Final CTA */}
        <CTASection />
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </PageLayout>
  );
}
