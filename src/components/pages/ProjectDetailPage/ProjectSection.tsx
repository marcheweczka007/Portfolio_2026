import React from "react";
import {
  ProjectSection,
  ContentSectionData,
} from "../ProjectsPage/projects/types";
import { SectionIdKey } from "../ProjectsPage/projects/types";

interface ProjectSectionDescriptionProps {
  data: ProjectSection | ContentSectionData;
  sectionIdKey: SectionIdKey;
  projectTitle: string;
  getSectionId: (key: SectionIdKey) => string | undefined;
  className?: string;
}

export function ProjectSectionDescription({
  data,
  sectionIdKey,
  projectTitle,
  getSectionId,
  className = "flex flex-col gap-2 m-6 mb-16",
}: ProjectSectionDescriptionProps) {
  // Check if it's ProjectSection (has overviewTitle) or ContentSectionData (has title)
  const title = "overviewTitle" in data ? data.overviewTitle : data.title;
  const description = data.description;
  const imageUrl = "imageUrl" in data ? data.imageUrl : undefined;
  const images = "images" in data ? data.images : undefined;
  return (
    <div className={className} id={getSectionId(sectionIdKey)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="tracking-wide text-md pb-4 text-gray-500 leading-relaxed mb-8">
        {description}
      </p>
      {images && images.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 py-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full rounded-xl overflow-hidden bg-gray-100"
            >
              <img
                src={image}
                alt={`${projectTitle} - ${title} - Image ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      ) : imageUrl ? (
        <div className="rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={`${projectTitle} - ${title}`}
            className="w-full h-auto object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
