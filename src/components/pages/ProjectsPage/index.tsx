import React from "react";
import { ProjectCard } from "../../ui/CustomUI/ProjectCard";
import { useNavigate } from "react-router-dom";
import { projectCardsData } from "./projects/projects.ts";
import projectsData from "./projectsData.ts";
import PageLayout from "../../pageUtilities/PageLayout.tsx";
import BackButton from "../../pageUtilities/BackButton.tsx";
import { ScrollToTop } from "../../ui/scrollToTop.tsx";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <BackButton />

      <section className="px-6 pb-10">
        <div className=" Grid gap-10 container mx-auto max-w-6xl">
          <div className=" mb-4">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {projectsData.featuredWorkLabel}
              </p>
              <h2 className="text-4xl font-bold">
                {projectsData.featuredWorkTitle}
              </h2>
              <p className="text-muted-foreground mt-3">
                {projectsData.featuredWorkDescription}
              </p>
            </div>
          </div>
          {/* Projects Cards Group */}
          <div className="grid md:grid-cols-2 gap-12">
            {projectCardsData.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <ProjectCard
                  {...project}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  disabled={project.comingSoon}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </section>
    </PageLayout>
  );
}
