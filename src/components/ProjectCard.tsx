import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year?: string;
  onClick?: () => void;
}

export function ProjectCard({ title, description, imageUrl, tags, year, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3] bg-muted border border-primary/10 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        {year && (
          <span className="text-xs text-muted-foreground font-mono">{year}</span>
        )}
      </div>
      <h3 className="mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
