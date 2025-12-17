import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function PlaceholderComingSoon() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-center
         bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700
         rounded-2xl"
    >
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
        Coming Soon <span>⏳</span>
      </h2>
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  year,
  onClick,
  disabled = false,
}: ProjectCardProps) {
  return (
    <div
      aria-disabled={disabled}
      className={`group ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={disabled ? undefined : onClick}
    >
      <div
        className={`relative overflow-hidden rounded-2xl mb-5 aspect-[4/3] bg-muted border border-primary/10 transition-all duration-300 ${
          disabled
            ? ""
            : "group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10"
        }`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              disabled ? "" : "group-hover:scale-105"
            }`}
          />
        ) : (
          <PlaceholderComingSoon />
        )}

        {!disabled && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-orange-50 border border-orange-200/20 text-orange-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        {year && (
          <span className="text-xs text-muted-foreground font-mono">
            {year}
          </span>
        )}
      </div>
      <h3
        className={`mb-2 transition-colors ${
          disabled ? "" : "group-hover:text-primary"
        }`}
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
