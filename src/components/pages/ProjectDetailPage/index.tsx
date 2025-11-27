import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectDetail } from "../../ProjectDetail";
import { projects } from "../ProjectsPage/projects";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/projects")}
            className="text-primary hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProjectDetail
      project={project}
      onBack={() => navigate("/projects")}
      fromProjectsPage={true}
      onNavigateToProjects={() => navigate("/projects")}
      onNavigateToProcesses={() => navigate("/processes")}
      onNavigateToAbout={() => navigate("/about")}
    />
  );
}
