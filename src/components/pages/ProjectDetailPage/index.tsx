import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectDetail } from "../../ProjectDetail";
import { projects } from "../ProjectsPage/projects/projects";
import PageLayout from "../../pageUtilities/PageLayout";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <button
              onClick={() => navigate("/projects")}
              className="text-primary hover:underline cursor-pointer"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <ProjectDetail
        project={project}
        onBack={() => navigate("/projects")}
        fromProjectsPage={true}
        onNavigateToProjects={() => navigate("/projects")}
        onNavigateToProcesses={() => navigate("/processes")}
        onNavigateToAbout={() => navigate("/about")}
      />
    </PageLayout>
  );
}
