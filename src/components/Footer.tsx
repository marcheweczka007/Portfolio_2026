import React from 'react';
import { Language, translations } from '../translations';

interface FooterProps {
  language: Language;
  onHomeClick?: () => void;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
}

export function Footer({ language, onHomeClick, onProjectsClick, onProcessesClick, onAboutClick }: FooterProps) {
  const t = translations[language].home;

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex gap-8">
            {onHomeClick && (
              <button 
                onClick={onHomeClick}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
            )}
            {onProjectsClick && (
              <button 
                onClick={onProjectsClick}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
            )}
            {onProcessesClick && (
              <button 
                onClick={onProcessesClick}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Processes
              </button>
            )}
            {onAboutClick && (
              <button 
                onClick={onAboutClick}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
            )}
          </nav>
          <p className="text-sm text-muted-foreground">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
