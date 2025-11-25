import React from "react";
import { Footer } from "../../ui/Footer.tsx";
import { ProjectCard } from "../../ui/ProjectCard.tsx";
import { Button } from "../../ui/button.tsx";
import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { projects } from "../../../projectsData.ts";
import projectsData from "./projectsData.ts";
import PageLayout from "../../layout/PageLayout.tsx";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-background pt-24">
        {/* Back Button */}
        <div className="container mx-auto max-w-6xl px-6 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 -ml-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {projectsData.backToHome}
          </Button>
        </div>

        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-6xl">
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
                      onClick={() => navigate(`/projects/${project.id}`)}
                      disabled={isDisabled}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
