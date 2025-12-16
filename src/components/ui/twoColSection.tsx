// src/components/ProjectDetail/TwoColumnSection.tsx
import React from "react";

interface SideBySideItem {
  title: string;
  description: string;
  image: string;
}

interface TwoColumnSectionProps {
  items: SideBySideItem[]; // expecting exactly 2 items
}

export function TwoColumnSection({ items }: TwoColumnSectionProps) {
  // Safety fallback in case something is missing
  if (!items || items.length < 2) return null;

  const [left, right] = items;

  return (
    <section className="mt-16 container mx-auto max-w-6xl px-6 pb-16">
      {/* Images Row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-max-w-6xl">
        <div className=" overflow-hidden rounded-xl bg-muted">
          <img
            src={left.image}
            alt={left.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className=" overflow-hidden rounded-xl bg-muted">
          <img
            src={right.image}
            alt={right.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Text Block */}
      <div className="mt-6 space-y-4 flex">
        <div className="flex-1 flex flex-col gap-4 pr-12">
          <h3 className="text-xl font-semibold">{left.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {left.description}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4"> 
        <h3 className="text-xl font-semibold pr-12">{right.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {right.description}
        </p>
        </div>
      </div>
    </section>
  );
}
