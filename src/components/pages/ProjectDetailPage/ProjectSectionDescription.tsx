import React from "react";
import {
  ProjectSectionDescriptionStart,
  ContentSectionData,
} from "../ProjectsPage/projects/types";
import { SectionIdKey } from "../ProjectsPage/projects/types";

interface ProjectSectionDescriptionProps {
  data: ProjectSectionDescriptionStart | ContentSectionData;
  sectionIdKey: SectionIdKey;
  projectTitle: string;
  getSectionId: (key: SectionIdKey) => string | undefined;
  className?: string;
  subsectionIds?: {
    subsection1?: string;
    subsection2?: string;
  };
}

export function ProjectSectionDescription({
  data,
  sectionIdKey,
  projectTitle,
  getSectionId,
  className = "flex flex-col gap-2 m-6 mb-16",
  subsectionIds,
}: ProjectSectionDescriptionProps) {
  // Check if it's ProjectSectionDescriptionStart (has overviewTitle) or ContentSectionData (has title)
  const title = "overviewTitle" in data ? data.overviewTitle : data.title;
  const description = data.description;
  const imageUrl = "imageUrl" in data ? data.imageUrl : undefined;
  const images = "images" in data ? data.images : undefined;

  // Check if we should show subsections (when both images array and imageUrl exist)
  const hasSubsections =
    subsectionIds && images && images.length > 0 && imageUrl;

  return (
    <div className={className} id={getSectionId(sectionIdKey)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="tracking-wide text-md pb-4 text-gray-500 leading-relaxed">
        {description}
      </p>

      {/* Handle subsections (for contentSection02) */}
      {hasSubsections ? (
        <>
          {/* Subsection 1 - Experimentation phase */}
          {images && images.length > 0 && (
            <div id={subsectionIds.subsection1} className="mb-8">
              <h3 className="text-xl mb-4">Experimentation phase</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full rounded-xl overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subsection 2 - Examples for client */}
          {imageUrl && (
            <div id={subsectionIds.subsection2} className="mb-8">
              <h3 className="text-xl mb-4">Examples for client</h3>
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src={imageUrl}
                  alt={`${title} - Final`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Regular single image */}
          {imageUrl && !images && (
            <div className="rounded-xl bg-gray-100 overflow-hidden">
              <img
                src={imageUrl}
                alt={`${projectTitle} - ${title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
