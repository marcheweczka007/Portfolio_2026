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

  const phases = [
    {
      icon: Search,
      title: "Discovery",
      description: project.discovery,
      color: "bg-gray-100",
    },
    {
      icon: Lightbulb,
      title: "Exploration",
      description: project.exploration,
      color: "bg-gray-100",
    },
    {
      icon: Palette,
      title: "Design",
      description: project.design,
      color: "bg-gray-100",
    },
    {
      icon: Rocket,
      title: "Shipping",
      description: project.shipping,
      color: "bg-gray-100",
    },
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {fromProjectsPage ? t.backToProjects : t.backToHome}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-accent border border-border rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-6xl mb-6 max-w-6xl leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-6xl mb-12">
          {project.description}
        </p>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
        </div>

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
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        {/* Overview */}
        <div className="mb-20">
          <h2 className="text-3xl mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Challenge */}
        <div className="mb-20 p-8 rounded-2xl bg-orange-50 border-1 border-orange-200">
          <h2 className="text-3xl mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-20">
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

      {/* Process Phases */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Process
          </p>
          <h2 className="text-4xl mb-4">How We Got There</h2>
          <p className="text-muted-foreground max-w-6xl mx-auto">
            A structured approach to solving complex design challenges through
            research, ideation, refinement, and delivery.
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
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Images */}
      {project.images.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
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

      {/* Extra Single Image - Conditionally rendered */}
      {project.extraImage && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          <div className="rounded-xl overflow-hidden bg-muted aspect-video">
            <ImageWithFallback
              src={project.extraImage}
              alt={`${project.title} - Extra image`}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Extra Images - Conditionally rendered */}
      {project.extraImages && project.extraImages.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
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

      {/* Results */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl mb-8">Results & Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.results.map((result, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-accent/30 border border-border"
            >
              <div className="text-4xl mb-3">{index + 1}</div>
              <p className="text-muted-foreground leading-relaxed">{result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interested in working together? */}
<section className="container mx-auto px-6 py-20 mb-20">
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white">
    {/* Soft glow blobs */}
    <div className="pointer-events-none absolute inset-0 opacity-20">
      <div className="absolute -top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 md:px-10 md:py-16 text-center space-y-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
        Let’s collaborate
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold">
        Interested in working together?
      </h2>
      <p className="text-base md:text-lg text-white/85">
        Tell me about your product, team, or idea and we’ll explore how design
        and thoughtful UX can move it forward.
      </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="default" className="gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                View More Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
