import React from "react";

interface SideBySideItem {
  title: string;
  description: string;
  description2?: string;
  image?: string;
}

interface SideBySideSectionProps {
  sections: SideBySideItem[];
  imagePosition: "left" | "right";
  subsectionIds: string[];
  projectTitle: string;
  className?: string;
}

export function SideBySideSection({
  sections,
  imagePosition,
  subsectionIds,
  projectTitle,
  className = "mb-10",
}: SideBySideSectionProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <section className={`container mx-auto max-w-6xl px-6 ${className}`}>
      <div className="flex flex-col gap-16">
        {sections.map((section, index) => {
          const isImageLeft = imagePosition === "left";
          const imageElement = (
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
              <img
                src={section.image}
                alt={`${projectTitle} - ${section.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          );

          const textElement = (
            <div className="w-full md:w-1/2">
              <h2 className="text-md font-bold mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {section.description}
              </p>
              {section.description2 && (
                <p className="text-gray-600 leading-relaxed">
                  {section.description2}
                </p>
              )}
            </div>
          );

          return (
            <div
              key={index}
              id={subsectionIds[index]}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              {isImageLeft ? (
                <>
                  {imageElement}
                  {textElement}
                </>
              ) : (
                <>
                  {textElement}
                  {imageElement}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
