import React from "react";

interface ShowcaseGallerySectionProps {
  title: string;
  description: string;
  images: string[];
  projectTitle: string;
  sectionId?: string;
}

export function ShowcaseGallerySection({
  title,
  description,
  images,
  projectTitle,
  sectionId,
}: ShowcaseGallerySectionProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className=" container mx-auto max-w-6xl px-6 mb-20" id={sectionId}>
      <h2 className="text-3xl mb-2">{title}</h2>
      <p className="tracking-wide text-gray-500 leading-relaxed mb-8">
        {description}
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={image}
              alt={`${projectTitle} - Showcase image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
