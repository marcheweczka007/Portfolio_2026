import React from "react";

interface ProjectHeroSectionProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  sectionId?: string;
}

export function ProjectHeroSection({
  title,
  description,
  tags,
  imageUrl,
  sectionId,
}: ProjectHeroSectionProps) {
  return (
    <section
      className="container mx-auto max-w-6xl px-6 mb-10"
      id={sectionId}
    >
      <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
        Project
      </p>
      <h1 className="text-4xl font-bold mb-2 max-w-6xl leading-tight">
        {title}
      </h1>
      <p className="tracking-wide text-gray-500 mt-3 pb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
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
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

