import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Footer } from "./ui/Footer";

interface ProcessesPageProps {
  onBack: () => void;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
}

const processes = {
  backToHome: "Back to Home",
  title: "Processes",
  subtitle: "How I work as a product design (engineer*)",
};

const sections = [
  { id: "prototyping", label: "Lean prototyping in code" },
  { id: "component-first", label: "Component-first thinking" },
  { id: "feedback-loop", label: "Design → Code feedback loop" },
  { id: "small-team", label: "Making small teams faster" },
];

export function ProcessesPage({
  onBack,
  onProjectsClick,
  onProcessesClick,
  onAboutClick,
}: ProcessesPageProps) {
  const t = processes;
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
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {t.backToHome}
        </Button>
      </div>

      {/* Header */}
      <section className="container mx-auto max-w-6xl px-6 mb-12 relative">
        <div className="absolute -top-20 right-0 w-64 h-64 blob-purple opacity-30 -z-10 animate-pulse-glow" />
        <h1 className="mb-6">{t.title}</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          {t.subtitle}
        </p>
      </section>

      {/* Navigation Pills */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-xl border-b border-primary/10 mb-12">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        {/* Lean Prototyping in code */}
        <section id="prototyping" className="scroll-mt-32 mb-24">
          <div className="mb-12">
            <h2 className="mb-3">Lean prototyping in code</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Section about the lean prototyping. Add here why you think lean
              prototyping is best approach for a start-up and how you use it at
              work or in your experiments.
            </p>
          </div>

          {/* Lean prototyping - more info */}
          <div className="mb-12">
            <h3 className="mb-4">
              More information about the lean prototyping.
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Tell us how you are applying the lean prototyping in your work or
              projects.
            </p>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Benefits of lean prototyping */}
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="w-6 h-6 " />
                    Benefits of lean prototyping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Validate ideas fast",
                      "You cut down on endless design cycles",
                      "Engineers love it — it removes ambiguity",
                      "It reveals technical constraints early",
                      "Users give better feedback on real interactions",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Why is working well */}
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle>Why this approach works well?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Lean prototyping works well because it lets teams test ideas
                    quickly without wasting time on perfect designs. You build
                    something simple, real, and interactive so you can learn
                    fast, get clear feedback, and spot technical issues early.
                    This keeps everyone aligned, reduces back-and-forth, and
                    helps a small team move forward with{" "}
                    <span className="italic">confidence and speed</span>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* My Perspective */}
          <div className="mb-12">
            <h3 className="mb-4">My perspective</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              I believe that when it comes to building for start-ups, having a
              foundation system (like shadcn/ui or using pre-built design
              systems) works wonders and lets you create spaces more faster.{" "}
              <span className="font-medium text-foreground">
                collaborative faster
              </span>
              , at a much lower complexity.
            </p>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Build in-house (Foundation) */}
              <Card className="bg-primary text-primary-foreground border-primary">
                <CardHeader>
                  <CardTitle className="text-primary-foreground flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Build in-house (Foundation)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Don't be vendor locked-in to UI lib (Ant, MUI etc.)",
                      "Start to develop things quicker, so click-thru will take you couple days",
                      "Don't waste time building library, iterate fast on the actual product",
                      "Having the open & docs available and copying over is almost zero-effort",
                      "Having that set-up & code (as it's made by a dev-ish) will almost feel native after implementation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-primary-foreground/90 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Why & Benefits */}
              <div className="space-y-6">
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Why?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      You get best time — react on the user & specific
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                      Or when you hear, "Imagine if building our own (aka we are
                      going with API component like audit, only users of the
                      product)".
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Need to design helps you to spread out
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                      As designs are built out — system grows with you
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <Card className="border-l-4 border-l-primary bg-muted/30">
            <CardHeader>
              <CardTitle>Why it matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I can not see any case for our use-case they believe what this.
                Building a system system from the ground up is an investment
                that drains time and resources from your core product. Your
                users don't care about your component library; they care about
                the value your product brings, and maintaining a foundation
                based system requires less of capability and at the same time is
                ready for the users.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Component First Thinking */}
        <section id="component-first" className="scroll-mt-32 mb-24">
          <h2 className="mb-12">Component first thinking</h2>

          {/* Reasuable pieces */}
          <div className="mb-12">
            <h3 className="mb-4">Build reusable pieces for your UI</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Tools like story book are amazing for applying this approach, it
              keeps the components and their interactions all in one place. This
              way design and developers have a plce witha single source of
              truth.
            </p>
          </div>

          {/* Components life cycle */}
          <div className="mb-8">
            {/* <h3 className="mb-8">Component life cycle</h3> */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <Card className="flex-1 bg-primary text-primary-foreground border-primary w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg mb-2">Identify</p>
                  <p className="text-md text-primary-foreground/80">
                    Look for repetition and patterns
                  </p>
                </CardContent>
              </Card>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0 flex-shrink-0" />
              <Card className="flex-1 bg-primary text-primary-foreground border-primary w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg mb-2">Build</p>
                  <p className="text-md text-primary-foreground/80">
                    Create your components and reuse
                  </p>
                </CardContent>
              </Card>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0 flex-shrink-0" />
              <Card className="flex-1 bg-primary text-primary-foreground border-primary w-full">
                <CardContent className="p-6 text-center">
                  <p className="text-lg mb-2">Assemble</p>
                  <p className="text-md text-primary-foreground/80">
                    Use the componnts as lego blocks
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "Repeat the 'better UX' loop for each decision point",
                    "Collaboration over - Programs development kit builds require context",
                    "Focus on fast iteration and real user feedback",
                    "Keep process lean and agile",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feedback loop */}
        <section id="feedback-loop" className="scroll-mt-32 mb-24">
          <div className="mb-8">
            <h2 className="mb-3">Design and development feedback loop</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              In this section talk about the design and development feedback
              loop and how important it is, especially in small teams.
            </p>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {[
                  { tool: "Miro", purpose: "team alignment & workshops" },
                  {
                    tool: "Figma",
                    purpose:
                      "design & prototyping (where we come up with the high-fid idea)",
                  },
                  { tool: "Notion", purpose: "documentation & specs" },
                ].map((item) => (
                  <li key={item.tool} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">
                        {item.tool}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        — {item.purpose}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Small team */}
        <section id="small-team" className="scroll-mt-32 mb-24">
          <h2 className="mb-4 mt-8">
            How you reduce friction between design and engineering
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed max-w-3xl">
            Section about the lean prototyping. Add here why you think lean
            prototyping is best approach for a start-up and how you use it at
            work or in your experiments.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Detailed */}
            <Card className="bg-primary text-black border-primary">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Lightweight
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Key points to embark action",
                    "Not heavy at specs → light note",
                    "You can ping easily",
                    "Agile and fast",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Lightweight */}
            <Card className="bg-primary text-primary-foreground border-primary">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Lightweight
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Key points to embark action",
                    "Not heavy at specs → light note",
                    "You can ping easily",
                    "Agile and fast",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-4 border bg-muted/30">
            Ctrl/Cmd + Shift + P
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                In fast-moving startups, lightweight handoffs result in faster
                execution. Detailed files are not always the most effective way
                to move into product design / start early. I've noticed that
                over-documenting in the previous startup I was at delayed dev
                work while lightweight specs helped both designers and
                developers iterate faster and align better.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This approach enables collaboration to happen more through
                conversations than formal documentation. It's both more flexible
                and cost-efficient in a startup environment with agile
                requirements, and allows for the right balance of structure
                without bureaucracy. I don't think we have a need or should be
                using a handoff approach at a smaller early stage team.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="mb-24">
          <Card className="relative overflow-hidden border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <CardContent className="relative z-10 text-center p-12">
              <h2 className="mb-4 text-lg text-primary-foreground">
                Ready to collaborate?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how these processes can help bring your product
                vision to life.
              </p>
              <Button size="lg" variant="secondary" onClick={onBack}>
                Back to Portfolio
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer
        onHomeClick={onBack}
        onProjectsClick={onProjectsClick}
        onProcessesClick={onProcessesClick}
        onAboutClick={onAboutClick}
      />
    </div>
  );
}
