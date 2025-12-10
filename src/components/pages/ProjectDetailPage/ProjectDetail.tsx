import React from "react";
import { Button } from "../../ui/button";
import {
  ArrowLeft,
  Search,
  Lightbulb,
  Palette,
  Rocket,
  Check,
} from "lucide-react";
import { CTASection } from "../../ui/CTASection";
import { Project } from "../ProjectsPage/projects/projects";
import { TableOfContents } from "./TableOfContents";
import { ExtraImageSection } from "./ExtraImageSection";
import { DescriptionSection } from "./DescriptionSection";
import { ProjectSectionDescription } from "./ProjectSection";
import { ScrollProgress } from "../../ui/scrollProgress";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  fromProjectsPage?: boolean;
  onNavigateToProjects?: () => void;
  onNavigateToProcesses?: () => void;
  onNavigateToAbout?: () => void;
}

const projectDetails = {
  backToHome: "Back to Home",
  backToProjects: "Back to Projects",
};

const defaultIcons = [Search, Lightbulb, Palette, Rocket];

export function ProjectDetail({
  project,
  onBack,
  fromProjectsPage,
}: ProjectDetailProps) {
  const t = projectDetails;

  // Helper function to get section ID from project's sectionIds mapping
  const getSectionId = (
    sectionKey: keyof NonNullable<Project["sectionIds"]>
  ): string | undefined => {
    const id = project.sectionIds?.[sectionKey];
    if (Array.isArray(id)) return undefined;
    return id;
  };

  // Use custom process phases if provided, otherwise use default structure
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

  // Use tableOfContents
  const toc = project.tableOfContents;

  return (
    <div>
      <ScrollProgress />
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {fromProjectsPage ? t.backToProjects : t.backToHome}
        </Button>
      </div>

      {/* Table of contents */}
      {toc && <TableOfContents title={toc.title} items={toc.items} />}

      {/* Hero Section */}
      <section
        className="container mx-auto max-w-6xl px-6 mb-10"
        id={getSectionId("hero")}
      >
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Project
        </p>
        <h1 className="text-4xl font-bold mb-2 max-w-6xl leading-tight">
          {project.title}
        </h1>
        <p className="tracking-wide text-gray-500 mt-3 pb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-orange-50 border border-orange-200/20 rounded-full text-orange-600 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Content */}
      <section className="container mx-auto max-w-6xl mb-6">
        {/* Overview */}
        {project.overviewSection && (
          <div
            className="flex flex-col gap-10 m-6 p-10  border rounded-xl border-gray-200 pb-10 bg-gray-900 mb-16"
            id={getSectionId("overviewTitle")}
          >
            {/* OVERVIEW ROW */}
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="md:w-40 text-md text-gray-50 uppercase">
                Overview
              </h2>
              <p className="flex-1 text-md text-gray-50 leading-relaxed">
                {project.overviewSection.overviewDescription}
              </p>
            </div>

            {/* EXECUTION ROW */}
            {project.overviewSection.executionTitle && (
              <div className="flex flex-col md:flex-row gap-4">
                <h2 className="md:w-40 text-md text-gray-50 uppercase">
                  Execution
                </h2>

                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-md text-gray-50 leading-relaxed">
                    {project.overviewSection.executionDescription}
                  </p>

                  {/* EXECUTION BULLETS */}
                  {project.overviewSection.exectutionBullets && (
                    <ul className="flex flex-col gap-2 text-md text-gray-50 leading-relaxed">
                      {project.overviewSection.exectutionBullets.map(
                        (bullet, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-4 pt-6 border-b border-gray-700 pb-6 text-sm tracking-wide  last:border-b-0 text-gray-200"
                          >
                            <Check className="bg-orange-50 rounded-full p-0.5 w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section Start */}
        {project.sectionStart && (
          <ProjectSectionDescription
            data={project.sectionStart}
            sectionIdKey="sectionStart"
            projectTitle={project.title}
            getSectionId={getSectionId}
          />
        )}

        {/* Challenge - Only show if provided */}
        {project.challenge && (
          <div className="mb-10 p-8 bg-gray-200">
            <h2 className="text-lg mb-2">The Challenge</h2>
            <p className="tracking-wide text-md text-gray-500 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Solution - Only show if provided */}
        {project.solution && (
          <div className="mb-20" id={getSectionId("solution")}>
            <h2 className="text-3xl mb-6">The Solution</h2>
            <p className="tracking-wide text-lg text-gray-500 leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}

        {/* Summary Text Section - Conditionally rendered */}
        {project.summaryText && (
          <div className="mb-20">
            <p className="tracking-wide text-lg text-gray-500 leading-relaxed">
              {project.summaryText}
            </p>
          </div>
        )}

        {/* Highlight Section - Conditionally rendered */}
        {project.highlightSection && (
          <div className="mb-20">
            <h2 className="text-3xl mb-6">{project.highlightSection.title}</h2>
            <p className="tracking-wide text-lg text-gray-500 leading-relaxed">
              {project.highlightSection.content}
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
            <p className="tracking-wide text-gray-500 max-w-6xl mx-auto">
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
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">{phase.title}</h3>
                  </div>
                  {phase.image && (
                    <div className="mb-6 rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={phase.image}
                        alt={`${phase.title} - Process image`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <p className="tracking-wide text-gray-500 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={getSectionId("images")}
        >
          <h2 className="text-3xl mb-8">Visual Showcase</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Image Sections 01-05 */}
      {[
        project.imageSection01,
        project.imageSection02,
        project.imageSection03,
        project.imageSection04,
        project.imageSection05,
      ].map((imageSection, idx) => {
        if (!imageSection) return null;

        const sectionKey = `imageSection0${idx + 1}` as keyof NonNullable<
          Project["sectionIds"]
        >;
        return (
          <ExtraImageSection
            key={idx}
            sectionId={getSectionId(sectionKey)}
            data={imageSection}
            projectTitle={project.title}
          />
        );
      })}

      {/* Text Blocks 01-05 */}
      {[
        project.textBlock01,
        project.textBlock02,
        project.textBlock03,
        project.textBlock04,
        project.textBlock05,
      ].map((textBlock, idx) => {
        if (!textBlock) return null;
        return (
          <DescriptionSection
            key={idx}
            descriptions={textBlock}
            // Add custom className here if needed, e.g.:
            // className="container mx-auto max-w-6xl px-6 mb-10 custom-class"
          />
        );
      })}

      {/* Section Middle */}
      {project.sectionMiddle && (
        <section className="container mx-auto max-w-6xl px-6 mb-10">
          <ProjectSectionDescription
            data={project.sectionMiddle}
            sectionIdKey="sectionMiddle"
            projectTitle={project.title}
            getSectionId={getSectionId}
            className="flex flex-col gap-2 mb-16"
          />
        </section>
      )}

      {/* Side by side sections Left */}
      {project.sideBySideSectionsLeft &&
        project.sideBySideSectionsLeft.length > 0 && (
          <section className="container mx-auto max-w-6xl px-6 mb-16">
            <div className="flex flex-col gap-16">
              {project.sideBySideSectionsLeft.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-8"
                >
                  {/* IMAGE */}
                  <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
                    <img
                      src={section.image}
                      alt={`${project.title} - ${section.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-md font-bold mb-3">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* Section End */}
      {project.sectionEnd && (
        <section className="container mx-auto max-w-6xl px-6 mb-10">
          <ProjectSectionDescription
            data={project.sectionEnd}
            sectionIdKey="sectionEnd"
            projectTitle={project.title}
            getSectionId={getSectionId}
            className="flex flex-col gap-2 mb-16"
          />
        </section>
      )}

      {/* Side by side sections Right */}
      {project.sideBySideSectionsRight &&
        project.sideBySideSectionsRight.length > 0 && (
          <section className="container mx-auto max-w-6xl px-6 mb-10">
            <div className="flex flex-col gap-16">
              {project.sideBySideSectionsRight.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-8"
                >
                  {/* TEXT */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-md font-bold mb-3">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  {/* IMAGE */}
                  <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
                    <img
                      src={section.image}
                      alt={`${project.title} - ${section.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={getSectionId("results")}
        >
          <h2 className="text-3xl mb-8">Reflection on the project</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-100 border border-gray-200/20"
              >
                <div className="text-xl mb-3 text-gray-900">{index + 1}</div>
                <p className="tracking-wide text-md text-gray-600 leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Button */}
      {project.button && (
        <section className="container mx-auto max-w-6xl px-6 mb-10">
          <Button asChild>
            <a
              href={project.button.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.button.title}
            </a>
          </Button>
        </section>
      )}

      {/* Showcase Gallery */}
      {project.showcaseGallery && project.showcaseGallery.images.length > 0 && (
        <section
          className=" container mx-auto max-w-6xl px-6 mb-20"
          id={getSectionId("showcaseGallery")}
        >
          <h2 className="text-3xl mb-2">{project.showcaseGallery.title}</h2>
          <p className="tracking-wide text-gray-500 leading-relaxed mb-8">
            {project.showcaseGallery.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {project.showcaseGallery.images.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${project.title} - Showcase image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {project.customSections && project.customSections.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          {project.customSections.map((section, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-3xl mb-6">{section.title}</h2>
              <p className="tracking-wide text-lg text-gray-500 leading-relaxed mb-6">
                {section.content}
              </p>
              {section.image && (
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video">
                  <img
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

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
