import React from "react";

interface DescriptionSectionProps {
  descriptions: string | string[];
  className?: string;
  key?: string | number;
}

export function DescriptionSection({
  descriptions,
  className = "container mx-auto max-w-6xl px-6 mb-10",
}: DescriptionSectionProps) {
  const descriptionArray = Array.isArray(descriptions)
    ? descriptions
    : [descriptions];
  const hasBorder = Array.isArray(descriptions) && descriptions.length > 1;

  return (
    <section
      className={`${className} ${
        hasBorder ? "border-b border-gray-200 pb-10" : ""
      }`}
    >
      {descriptionArray.map((description, index) => (
        <p
          key={index}
          className={`tracking-wide text-gray-500 leading-relaxed ${
            Array.isArray(descriptions) ? "text-lg mb-2" : "mb-0"
          }`}
        >
          {description}
        </p>
      ))}
    </section>
  );
}
