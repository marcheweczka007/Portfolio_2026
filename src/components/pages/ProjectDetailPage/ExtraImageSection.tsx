import React from "react";
import { ExtraImageData } from "../ProjectsPage/projects/types";

interface ExtraImageSectionProps {
  sectionId?: string;
  data: ExtraImageData;
  projectTitle: string;
  key?: string | number;
}

export function ExtraImageSection({
  sectionId,
  data,
  projectTitle,
}: ExtraImageSectionProps) {
  return (
    <section className="container mx-auto max-w-6xl px-6 mb-10" id={sectionId}>
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-2xl">{data.title}</h2>
        <p className="tracking-wide text-gray-500 leading-relaxed mb-0">
          {data.description}
        </p>
      </div>

      {data.images && data.images.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 py-4">
          {data.images.map((image, imageIndex) => (
            <div key={imageIndex} className="w-full rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`${projectTitle} - ${data.title} - Image ${
                  imageIndex + 1
                }`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      ) : data.imageUrl ? (
        <div className="w-full rounded-xl overflow-hidden py-4">
          <img
            src={data.imageUrl}
            alt={`${projectTitle} - ${data.title}`}
            className="w-full h-auto object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}
