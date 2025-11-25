import React from "react";
import { Footer } from "../ui/Footer";
import { ProjectCard } from "../ui/ProjectCard";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "../../App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  role: string;
}

interface ProjectsPageProps {
  onBack: () => void;
  onProjectClick?: (projectId: string) => void;
  projects: Project[];
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
}

const projectsContent = {
  backToHome: "Back to Home",
  featuredWorkLabel: "Portfolio",
  featuredWorkTitle: "Featured Work",
  featuredWorkDescription: "A selection of recent projects",
};

export default function ProjectsPage({
  onBack,
  onProjectClick,
  projects,
  onProjectsClick,
  onProcessesClick,
  onAboutClick,
}: ProjectsPageProps) {
  const t = projectsContent;

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {t.backToHome}
        </Button>
      </div>

      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {t.featuredWorkLabel}
              </p>
              <h2 className="text-5xl">{t.featuredWorkTitle}</h2>
              <p className="text-muted-foreground mt-3">
                {t.featuredWorkDescription}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const isDisabled =
                project.id === "Coding Poject 1" ||
                project.id === "Coding Poject 2";
              return (
                <div
                  key={project.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <ProjectCard
                    {...project}
                    onClick={() => onProjectClick?.(project.id)}
                    disabled={isDisabled}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer
        onHomeClick={onBack}
        onProjectsClick={onProjectsClick}
        onProcessesClick={onProcessesClick}
        onAboutClick={onAboutClick}
      />
    </div>
  );
}
