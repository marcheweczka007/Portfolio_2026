import React from "react";
import { ProjectCard } from "../ui/ProjectCard";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Target,
  Mail,
  Sparkles,
} from "lucide-react";
import { Footer } from "../ui/Footer";
import { SendHorizontal } from "lucide-react";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "../../App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  role: string;
}

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
  projects: Project[];
  onViewProjects: () => void;
  onViewProcesses: () => void;
  onViewAbout: () => void;
}

const homeContent = {
  availability: "Available for freelance projects",
  heroTitle1: "I'm a Product Designer",
  heroTitle2: "(transitioning into Design Engineering)",
  name: "Hey, I'm Zuza 👋",
  heroDescription:
    "Bridging design & engineering | Fast iteration | Developer-friendly workflows | SaaS-focused",
  viewProjects: "View projects",
  getInTouch: "Get in touch",
  processesTitle: "Processes",
  processesDescription:
    "I keep my design practical. Sketch first, test early, get feedback, and refine quickly with the team. For me, progress beats perfection, and collaboration beats handoff. For example, I understand the problem, ideate, test, and implement.",
  processStep1: "Understand the problem",
  processStep2: "Ideate",
  processStep3: "Test",
  processStep4: "Implement",
  projectsTitle: "Projects",
  projectsDescription:
    "I design digital products for start-ups with a focus on usability, clarity, and creating real business impact.  I’ve collaborated closely with developers and founders to turn ideas into intuitive, experiences that help products grow and evolve.",
  projectStat1: "Mobile Product Design",
  projectStat2: "Web Platforms",
  projectStat3: "Design Systems & UI Libraries",
  projectStat4: "Data-Heavy Dashboards",
  featuredWorkLabel: "Portfolio",
  featuredWorkTitle: "Featured Work xxx",
  featuredWorkDescription: "A selection of recent projects",
  viewAll: "View All",
  philosophyTitle: "Work Philosophy",
  philosophyQuote:
    "Great design is invisible. It doesn't draw attention to itself—it enhances the user's experience and helps them achieve their goals effortlessly.",
  philosophyDescription:
    "I strive to create interfaces that are not only beautiful but also functional, accessible, and delightful to use. Every pixel serves a purpose, every interaction feels natural, and every decision is backed by research and empathy.",
  ctaTitle: "Interested in working together?",
  ctaDescription: "Let's chat and see if we're a good fit.",
  copyright: "© 2025 Zuza Marchewka. All rights reserved.",
};

export function HomePage({
  onProjectClick,
  projects,
  onViewProjects,
  onViewProcesses,
  onViewAbout,
}: HomePageProps) {
  const t = homeContent;
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-32 right-0 w-[800px] h-[600px] blob-purple animate-pulse-glow -z-10" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-purple animate-pulse-glow -z-10"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gradient-mesh -z-20" />

        <div className="pt-12 container mx-auto max-w-12xl">
          <div className="flex flex-col items-center text-center relative">
            <h1 className="text-5xl md:text-6xl leading-tight mb-8 tracking-tight font-medium max-w-4xl">
              Hey, I'm Zuza 👋 <br /> A SaaS{" "}
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/20 text-orange-600 text-3xl md:text-5xl font-medium mx-1">
                Product designer
              </span>
              learning to build in code and{" "}
              <span
                className="relative inline-block underline decoration-2 decoration-[#DE5516] underline-offset-4"
                style={{
                  textDecorationLine: "underline",
                  textDecorationColor: "#DE5516",
                  textDecorationThickness: "2px",
                  textDecorationStyle: "wavy",
                }}
              >
                collaborate
              </span>{" "}
              more closely with engineering.
            </h1>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together">
                  {t.getInTouch} <SendHorizontal className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={onViewProjects}
              >
                {t.viewProjects} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Processes & Projects Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Processes */}
            <Card
              id="processes"
              className="group relative bg-gradient-to-br from-orange-50/50 to-orange-100/50 rounded-3xl border-orange-200/20 hover:border-orange-300/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer overflow-hidden p-0"
              onClick={onViewProcesses}
            >
              <div className="absolute top-0 right-0 w-32 h-32 blob-purple opacity-50 -z-10" />
              <div className="absolute top-8 right-8 text-[120px] leading-none opacity-[0.03] select-none">
                01
              </div>
              <CardContent className="p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2>{t.processesTitle}</h2>
                </div>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {t.processesDescription}
                </p>
                <div className="space-y-1">
                  {[
                    { label: t.processStep1 },
                    { label: t.processStep2 },
                    { label: t.processStep3 },
                    { label: t.processStep4 },
                  ].map((item) => (
                    <div className="flex items-center py-4 gap-4 group/item">
                      <div className="flex-1 h-px bg-orange-200/15" />
                      <span className="text-md text-gray-900">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects Overview */}
            <Card
              className="group relative gradient-purple text-white rounded-3xl border-0 overflow-hidden hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-300 cursor-pointer animate-gradient p-0"
              onClick={onViewProjects}
            >
              <div className="absolute top-8 right-8 text-[120px] leading-none opacity-[0.08] select-none">
                02
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <CardContent className="p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2>{t.projectsTitle}</h2>
                </div>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {t.projectsDescription}
                </p>
                <div className="space-y-1">
                  {[
                    { label: t.projectStat1 },
                    { label: t.projectStat2 },
                    { label: t.projectStat3 },
                    { label: t.projectStat4 },
                  ].map((item, index) => (
                    <div
                      key={`stat-${index}`}
                      className="flex items-center justify-between py-4 border-b border-white/10 last:border-0 group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 bg-orange-50/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                {t.featuredWorkLabel}
              </p>
              <h2 className="text-5xl">{t.featuredWorkTitle}</h2>
              <p className="text-gray-500 mt-3">{t.featuredWorkDescription}</p>
            </div>
            <Button
              variant="ghost"
              className="gap-2 group"
              onClick={onViewProjects}
            >
              {t.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const isDisabled =
                project.id === "Coding Poject 1" ||
                project.id === "Coding Poject 2";
              return (
                <div
                  key={project.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <ProjectCard
                    {...project}
                    onClick={() => onProjectClick(project.id)}
                    disabled={isDisabled}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-600/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-6xl mb-8 font-black text-white">{t.ctaTitle}</p>
          <p className="text-md text-white/80 mb-10">{t.ctaDescription}</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="mailto:zuzanna.marchewka1@example.com?subject=Let's work together">
                <Mail className="w-5 h-5" />
                {t.getInTouch}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={onViewProjects}
            >
              {t.viewProjects} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer
        onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onProjectsClick={onViewProjects}
        onProcessesClick={onViewProcesses}
        onAboutClick={onViewAbout}
      />
    </>
  );
}
