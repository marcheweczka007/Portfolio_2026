import React from "react";
import { ProjectCard } from "../../ui/ProjectCard.tsx";
import { useNavigate } from "react-router-dom";
import { projects, projectCards } from "./projects/projects.ts";
import projectsData from "./projectsData.ts";
import PageLayout from "../../pageUtilities/PageLayout.tsx";
import BackButton from "../../pageUtilities/BackButton.tsx";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <BackButton />

      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {projectsData.featuredWorkLabel}
              </p>
              <h2 className="text-5xl">{projectsData.featuredWorkTitle}</h2>
              <p className="text-muted-foreground mt-3">
                {projectsData.featuredWorkDescription}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projectCards.map((project, index) => {
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
                    onClick={() => navigate(`/projects/${project.id}`)}
                    disabled={isDisabled}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
