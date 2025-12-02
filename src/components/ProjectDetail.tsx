import React from "react";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Target,
  Search,
  Lightbulb,
  Palette,
  Rocket,
  Mail,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "./ui/CTASection";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "./pages/ProjectsPage/projects/projects";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  fromProjectsPage?: boolean;
  onNavigateToProjects?: () => void;
  onNavigateToProcesses?: () => void;
  onNavigateToAbout?: () => void;
}

const projectTranslations = {
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

export function ProjectDetail({
  project,
  onBack,
  fromProjectsPage,
  onNavigateToProjects,
  onNavigateToProcesses,
  onNavigateToAbout,
}: ProjectDetailProps) {
  const t = projectTranslations;

  // Use custom process phases if provided, otherwise use default structure
  // Only create phases if there's process data available
  const defaultIcons = [Search, Lightbulb, Palette, Rocket];
  const hasDefaultProcessData =
    project.discovery &&
    project.exploration &&
    project.design &&
    project.shipping;

  const phases = project.processPhases
    ? project.processPhases.map((phase, index) => ({
        icon: defaultIcons[index] || Search,
        title: phase.title,
        description: phase.description,
        image: phase.image,
        color: "bg-gray-100",
      }))
    : hasDefaultProcessData
    ? [
        {
          icon: Search,
          title: "Discovery",
          description: project.discovery!,
          color: "bg-gray-100",
        },
        {
          icon: Lightbulb,
          title: "Exploration",
          description: project.exploration!,
          color: "bg-gray-100",
        },
        {
          icon: Palette,
          title: "Design",
          description: project.design!,
          color: "bg-gray-100",
        },
        {
          icon: Rocket,
          title: "Shipping",
          description: project.shipping!,
          color: "bg-gray-100",
        },
      ]
    : [];

  const hasProcessSection = phases.length > 0;
  const isEbookProject = project.id === "E-book-and-business-card-design";

  const handleScrollTo = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {fromProjectsPage ? t.backToProjects : t.backToHome}
        </Button>
      </div>

      {/* Table of contents - fixed on left for e-book project (desktop only) */}
      {isEbookProject && (
        <div className="hidden md:block fixed left-6 top-40 z-30 w-46">
          <div className="rounded-2xl bg-white/30 backdrop-blur shadow-md border border-gray-100 px-5 py-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-900">
                Table of Contents
              </p>
            </div>

            <div className="space-y-7 text-xs text-gray-900 pl-1">
              {/* E-book design group */}
              <div>
                <button
                  type="button"
                  onClick={() => handleScrollTo("ebook-design")}
                  className="w-full text-left text-xs font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  E-book design
                </button>
                <div className="mt-2 flex">
                  <div className="ml-0.5 mr-3 w-px bg-gray-200" />
                  <div className="space-y-1.5 text-gray-600">
                    <button
                      type="button"
                      onClick={() => handleScrollTo("ebook-section-1")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("ebook-section-2")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("ebook-section-3")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("ebook-section-4")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                  </div>
                </div>
              </div>

              {/* Business card group */}
              <div className="border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => handleScrollTo("business-card")}
                  className="w-full text-left text-xs font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Business Card
                </button>
                <div className="mt-2 flex">
                  <div className="ml-0.5 mr-3 w-px bg-gray-200" />
                  <div className="space-y-1.5 text-gray-600">
                    <button
                      type="button"
                      onClick={() => handleScrollTo("business-card-section-1")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("business-card-section-2")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                  </div>
                </div>
              </div>

              {/* Leaflet group */}
              <div className="border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => handleScrollTo("leaflet")}
                  className="w-full text-left text-xs font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Leaflet
                </button>
                <div className="mt-2 flex">
                  <div className="ml-0.5 mr-3 w-px bg-gray-200" />
                  <div className="space-y-1.5 text-gray-600">
                    <button
                      type="button"
                      onClick={() => handleScrollTo("leaflet-section-1")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("leaflet-section-2")}
                      className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    >
                      Section name
                    </button>
                  </div>
                </div>
              </div>

              {/* Final outcome */}
              <div className="border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => handleScrollTo("final-outcome")}
                  className="w-full text-left text-xs font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Final outcome
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="container mx-auto max-w-6xl  mb-10"
        id={isEbookProject ? "ebook-design" : undefined}
      >
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
          Project
        </p>
        <h1 className="text-4xl font-bold mb-2 max-w-6xl leading-tight">
          {project.title}
        </h1>
        <p className="text-muted-foreground mt-3 pb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Project Meta */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Year</span>
            </div>
            <p>{project.year}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Role</span>
            </div>
            <p>{project.role}</p>
          </div>
          {project.client && (
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">Client</span>
              </div>
              <p>{project.client}</p>
            </div>
          )}
          {project.duration && (
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">Duration</span>
              </div>
              <p>{project.duration}</p>
            </div>
          )}
        </div> */}

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden bg-muted aspect-video">
          <ImageWithFallback
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Content */}
      <section className="container mx-auto max-w-6xl px-6 mb-6">
        {/* Overview */}
        <div
          className="mb-10"
          id={isEbookProject ? "ebook-section-1" : undefined}
        >
          <h2 className="text-3xl mb-2">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Challenge - Only show if provided */}
        {project.challenge && (
          <div className="mb-10 p-8 bg-gray-100 border-dotted border-gray-200 border-t-3 border-b-3">
            <h2 className="text-lg mb-2">The Challenge</h2>
            <p className="text-md text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Solution */}
        <div
          className="mb-20"
          id={isEbookProject ? "ebook-section-2" : undefined}
        >
          <h2 className="text-3xl mb-6">The Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Extra Text Section - Conditionally rendered */}
        {project.extraText && (
          <div className="mb-20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.extraText}
            </p>
          </div>
        )}

        {/* Extra Section - Conditionally rendered */}
        {project.extraSection && (
          <div className="mb-20">
            <h2 className="text-3xl mb-6">{project.extraSection.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.extraSection.content}
            </p>
          </div>
        )}
      </section>

      {/* Process Phases - Only show if there's process data */}
      {hasProcessSection && (
        <section className="container mx-auto max-w-6xl px-6 mb-10 bg-gray-200 py-10 rounded-md">
          <div className="text-left mb-10">
            <h2 className="text-4xl mb-4">
              {project.processTitle || "The Process"}
            </h2>
            <p className="text-muted-foreground max-w-6xl mx-auto">
              {project.processDescription ||
                "The project was flexible but followed somehow structured process to allow me to explore and deliver the best solution for the users."}
            </p>
          </div>
          {/* Process Boxes */}
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.title}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${phase.color} border-0 hover:border-gray-300 transition-all duration-300`}
                >
                  <div className="absolute top-6 right-6 text-6xl font-mono opacity-[0.05] select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl">{phase.title}</h3>
                  </div>
                  {phase.image && (
                    <div className="mb-6 rounded-xl overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={phase.image}
                        alt={`${phase.title} - Process image`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Project Images */}
      {project.images.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={isEbookProject ? "ebook-section-3" : undefined}
        >
          <h2 className="text-3xl mb-8">Visual Showcase</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-muted aspect-[4/3]"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extra Image 01- Conditionally rendered */}
      {project.extraImage01 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-10"
          id={isEbookProject ? "ebook-section-4" : undefined}
        >
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl">{project.extraImage01.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-0">
              {project.extraImage01.description}
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden py-4">
            <ImageWithFallback
              src={project.extraImage01.imageUrl}
              alt={`${project.title} - ${project.extraImage01.title}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}

      {/* Extra Image 02- Conditionally rendered */}
      {project.extraImage02 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-10"
          id={isEbookProject ? "business-card" : undefined}
        >
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl">{project.extraImage02.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-0">
              {project.extraImage02.description}
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden bg-gray-100 py-4">
            <ImageWithFallback
              src={project.extraImage02.imageUrl}
              alt={`${project.title} - ${project.extraImage02.title}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}
      {/* Extra Image 03- Conditionally rendered */}
      {project.extraImage03 && (
        <section className="container mx-auto max-w-6xl px-6 mb-10">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl">{project.extraImage03.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-0">
              {project.extraImage03.description}
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden bg-gray-100 py-4">
            <ImageWithFallback
              src={project.extraImage03.imageUrl}
              alt={`${project.title} - ${project.extraImage03.title}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}

      {/* Extra Image 04- Conditionally rendered */}
      {project.extraImage04 && (
        <section className="container mx-auto max-w-6xl px-6 mb-10">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl">{project.extraImage04.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-0">
              {project.extraImage04.description}
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden bg-gray-100 py-4">
            <ImageWithFallback
              src={project.extraImage04.imageUrl}
              alt={`${project.title} - ${project.extraImage04.title}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}

      {/* Extra Image 05- Conditionally rendered */}
      {project.extraImage05 && (
        <section className="container mx-auto max-w-6xl px-6 mb-10">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl">{project.extraImage05.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-0">
              {project.extraImage05.description}
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden bg-gray-100 py-4">
            <ImageWithFallback
              src={project.extraImage05.imageUrl}
              alt={`${project.title} - ${project.extraImage05.title}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}

      {/* Extra Images - Conditionally rendered */}
      {project.extraImages && project.extraImages.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={isEbookProject ? "leaflet" : undefined}
        >
          <h2 className="text-3xl mb-8">Additional Images</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.extraImages.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-muted aspect-[4/3]"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Extra image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections - Conditionally rendered */}
      {project.customSections && project.customSections.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          {project.customSections.map((section, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-3xl mb-6">{section.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {section.content}
              </p>
              {section.image && (
                <div className="rounded-xl overflow-hidden bg-muted aspect-video">
                  <ImageWithFallback
                    src={section.image}
                    alt={`${project.title} - ${section.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Results - Only show if results are provided */}
      {project.results && project.results.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={isEbookProject ? "final-outcome" : undefined}
        >
          <h2 className="text-3xl mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-accent/30 border border-border"
              >
                <div className="text-4xl mb-3">{index + 1}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
