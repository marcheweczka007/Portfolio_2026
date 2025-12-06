import React from "react";
import { Button } from "../../ui/button";
import { ArrowLeft, Search, Lightbulb, Palette, Rocket } from "lucide-react";
import { CTASection } from "../../ui/CTASection";
import { Project } from "../ProjectsPage/projects/projects";
import { TableOfContents } from "./TableOfContents";
import { ExtraImageSection } from "./ExtraImageSection";
import { DescriptionSection } from "./DescriptionSection";

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
        <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Content */}
      <section className="container mx-auto max-w-6xl px-0 mb-6">
        {/* Overview */}
        <div
          className="mb-10 border-b border-gray-200 pb-10"
          id={getSectionId("overview")}
        >
          <h2 className="text-3xl font-bold mb-2">Project overview</h2>
          <p className="text-2xl text-gray-500 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Challenge - Only show if provided */}
        {project.challenge && (
          <div className="mb-10 p-8 bg-gray-100 border-dotted border-gray-200 border-t-3 border-b-3">
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

        {/* Extra Text Section - Conditionally rendered */}
        {project.extraText && (
          <div className="mb-20">
            <p className="tracking-wide text-lg text-gray-500 leading-relaxed">
              {project.extraText}
            </p>
          </div>
        )}

        {/* Extra Section - Conditionally rendered */}
        {project.extraSection && (
          <div className="mb-20">
            <h2 className="text-3xl mb-6">{project.extraSection.title}</h2>
            <p className="tracking-wide text-lg text-gray-500 leading-relaxed">
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

      {/* Extra Image 01-05 */}
      {[
        project.extraImage01,
        project.extraImage02,
        project.extraImage03,
        project.extraImage04,
        project.extraImage05,
      ].map((extraImage, idx) => {
        if (!extraImage) return null;

        const sectionKey = `extraImage0${idx + 1}` as keyof NonNullable<
          Project["sectionIds"]
        >;
        return (
          <ExtraImageSection
            key={idx}
            sectionId={getSectionId(sectionKey)}
            data={extraImage}
            projectTitle={project.title}
          />
        );
      })}

      {/* Description Extra 01-05 */}
      {[
        project.descriptionExtra01,
        project.descriptionExtra02,
        project.descriptionExtra03,
        project.descriptionExtra04,
        project.descriptionExtra05,
      ].map((description, idx) => {
        if (!description) return null;
        return (
          <DescriptionSection
            key={idx}
            descriptions={description}
            // Add custom className here if needed, e.g.:
            // className="container mx-auto max-w-6xl px-6 mb-10 custom-class"
          />
        );
      })}

      {/* New Section */}
      {project.newSection01 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-10"
          id={getSectionId("newSection")}
        >
          <h2 className="text-3xl mb-2">{project.newSection01.title}</h2>
          <p className="tracking-wide text-gray-500 leading-relaxed mb-8">
            {project.newSection01.description}
          </p>

          {project.newSection01.images &&
          project.newSection01.images.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 py-4">
              {project.newSection01.images.map((image, index) => (
                <div key={index} className="w-full rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - ${
                      project.newSection01?.title || "Section"
                    } - Image ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ) : project.newSection01.imageUrl ? (
            <div className="w-full rounded-xl overflow-hidden py-4">
              <img
                src={project.newSection01.imageUrl}
                alt={`${project.title} - ${project.newSection01.title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : null}
        </section>
      )}

      {/* New Section 01 */}
      {project.newSection02 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-10"
          id={getSectionId("newSection01")}
        >
          <h2 className="text-3xl mb-2">{project.newSection02.title}</h2>
          <p className="tracking-wide text-gray-500 leading-relaxed mb-8">
            {project.newSection02.description}
          </p>

          {/* Subsection 1 - Experimentation phase */}
          {project.newSection02.images &&
            project.newSection02.images.length > 0 && (
              <div id="leaflet-section-1" className="mb-8">
                <h3 className="text-xl mb-4">Experimentation phase</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.newSection02.images.map((image, index) => (
                    <div
                      key={index}
                      className="w-full rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${
                          project.newSection02?.title || "Section"
                        } - Image ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Subsection 2 - Examples for client */}
          {project.newSection02.imageUrl && (
            <div id="leaflet-section-2" className="mb-8">
              <h3 className="text-xl mb-4">Examples for client</h3>
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src={project.newSection02.imageUrl}
                  alt={`${project.newSection02.title} - Final`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </section>
      )}

      {project.newSection03 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-10"
          id={getSectionId("newSection03")}
        >
          <h2 className="text-3xl mb-2">{project.newSection03.title}</h2>
          <p className="tracking-wide text-gray-500 leading-relaxed mb-8">
            {project.newSection03.description}
          </p>
          {project.newSection03.images &&
          project.newSection03.images.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 py-4">
              {project.newSection03.images.map((image, index) => (
                <div key={index} className="w-full rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - ${
                      project.newSection03?.title || "Section"
                    } - Image ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ) : project.newSection03.imageUrl ? (
            <div className="w-full rounded-xl overflow-hidden py-4">
              <img
                src={project.newSection03.imageUrl}
                alt={`${project.title} - ${project.newSection03.title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : null}
        </section>
      )}

      {/* Extra Images */}
      {project.extraImages && project.extraImages.images.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={getSectionId("extraImages")}
        >
          <h2 className="text-3xl mb-2">{project.extraImages.title}</h2>
          <p className="tracking-wide text-gray-500 leading-relaxed mb-8">
            {project.extraImages.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {project.extraImages.images.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${project.title} - Extra image ${index + 1}`}
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

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section
          className="container mx-auto max-w-6xl px-6 mb-20"
          id={getSectionId("results")}
        >
          <h2 className="text-3xl mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-orange-100/30 border border-orange-200/15"
              >
                <div className="text-4xl mb-3">{index + 1}</div>
                <p className="tracking-wide text-gray-500 leading-relaxed">
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
