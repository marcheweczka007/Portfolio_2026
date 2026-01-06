import React from "react";

interface ProjectResultsSectionProps {
  results: string[];
  sectionId?: string;
}

export function ProjectResultsSection({
  results,
  sectionId,
}: ProjectResultsSectionProps) {
  if (!results || results.length === 0) return null;

  return (
    <section className="container mx-auto max-w-6xl px-6 mb-20" id={sectionId}>
      <h2 className="text-2xl font-bold mb-8">Reflection on the project</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-orange-200/20 border border-orange-200/80"
          >
            <div className="text-xl mb-3 text-gray-900">{index + 1}</div>
            <p className="tracking-wide text-md text-gray-600 leading-relaxed">
              {result}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
