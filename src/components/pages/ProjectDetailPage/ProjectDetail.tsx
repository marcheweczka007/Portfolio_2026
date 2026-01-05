import React from "react";
import { Button } from "../../ui/button";
import { ArrowLeft } from "lucide-react";
import { CTASection } from "../../ui/CustomUI/CTASection";
import { Project } from "../ProjectsPage/projects/projects";
import { TableOfContents } from "./TableOfContents";
import { ExtraImageSection } from "./ExtraImageSection";
import { DescriptionSection } from "./DescriptionSection";
import { ProjectSectionDescription } from "./ProjectSection";
import { ScrollProgress } from "../../ui/scrollProgress";
import { ScrollToTop } from "../../ui/scrollToTop";
import { TwoColumnSection } from "./twoColSection";
import { ProjectImagesSection } from "./ProjectImagesSection";
import { ProjectResultsSection } from "./ProjectResultsSection";
import { ShowcaseGallerySection } from "./ShowcaseGallerySection";
import { SideBySideSection } from "./SideBySideSection";
import { OverviewSection } from "./OverviewSection";
import { ProjectHeroSection } from "./ProjectHeroSection";

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

  // Helper function to get subsection IDs from TOC for a given section
  const getSubsectionIds = (sectionId: string | undefined): string[] => {
    if (!sectionId || !toc) return [];
    const tocItem = toc.items.find((item) => item.id === sectionId);
    return tocItem?.subsections?.map((sub) => sub.id) || [];
  };

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
      <ProjectHeroSection
        title={project.title}
        description={project.description}
        tags={project.tags}
        imageUrl={project.imageUrl}
        sectionId={getSectionId("hero")}
      />

      {/* Project Content */}
      <section className="container mx-auto max-w-6xl mb-6">
        {/* Overview */}
        {project.overviewSection && (
          <OverviewSection
            data={project.overviewSection}
            sectionId={getSectionId("overviewTitle")}
          />
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
      </section>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <ProjectImagesSection
          images={project.images}
          projectTitle={project.title}
          sectionId={getSectionId("images")}
        />
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

      {/*Two column section*/}
      {project.twoColumnSection && (
        <TwoColumnSection
          items={project.twoColumnSection}
          sectionId={(() => {
            // Try to find twoColumnSection ID from TOC
            if (!toc) return "members-wireframes";
            // Look for a subsection with "before-and-after" or similar
            for (const item of toc.items) {
              if (item.subsections) {
                const subsection = item.subsections.find(
                  (sub) => sub.id === "before-and-after"
                );
                if (subsection) return subsection.id;
              }
            }
            return "members-wireframes"; // fallback
          })()}
        />
      )}

      {/* Side by side sections Left */}
      {project.sideBySideSectionsLeft &&
        project.sideBySideSectionsLeft.length > 0 && (
          <SideBySideSection
            sections={project.sideBySideSectionsLeft}
            imagePosition="left"
            subsectionIds={getSubsectionIds(getSectionId("sectionMiddle"))}
            projectTitle={project.title}
            className="mb-16"
          />
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
          <SideBySideSection
            sections={project.sideBySideSectionsRight}
            imagePosition="right"
            subsectionIds={getSubsectionIds(getSectionId("sectionEnd"))}
            projectTitle={project.title}
          />
        )}

      {/* Showcase Gallery */}
      {project.showcaseGallery && project.showcaseGallery.images.length > 0 && (
        <ShowcaseGallerySection
          title={project.showcaseGallery.title}
          description={project.showcaseGallery.description}
          images={project.showcaseGallery.images}
          projectTitle={project.title}
          sectionId={getSectionId("showcaseGallery")}
        />
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

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <ProjectResultsSection
          results={project.results}
          sectionId={getSectionId("results")}
        />
      )}

      {/* CTA Section */}
      <CTASection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
