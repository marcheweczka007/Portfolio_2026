import React, { useState } from "react";
import { Header } from "./components/ui/Header";
import { HomePage } from "./components/HomePage";
import { ProjectDetail, projects, Project } from "./components/ProjectDetail";
import { ProcessesPage } from "./components/ProcessesPage";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";

export type { Project };

export default function PortfolioApp() {
  const [currentView, setCurrentView] = useState<
    "home" | "projects" | "project" | "processes" | "about"
  >("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [previousView, setPreviousView] = useState<"home" | "projects">("home");

  const handleProjectClick = (projectId: string) => {
    // Disable navigation for projects that are not ready
    if (projectId === "Coding Poject 1" || projectId === "Coding Poject 2") {
      return;
    }
    setPreviousView(currentView as "home" | "projects");
    setSelectedProjectId(projectId);
    setCurrentView("project");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromProject = () => {
    setCurrentView(previousView);
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProcesses = () => {
    setCurrentView("processes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewAbout = () => {
    setCurrentView("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProjects = () => {
    setCurrentView("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onHomeClick={handleBackToHome}
        onProjectsClick={handleViewProjects}
        onProcessesClick={handleViewProcesses}
        onAboutClick={handleViewAbout}
        currentView={currentView}
      />

      {currentView === "home" && (
        <HomePage
          projects={projects}
          onProjectClick={handleProjectClick}
          onViewProjects={handleViewProjects}
          onViewProcesses={handleViewProcesses}
          onViewAbout={handleViewAbout}
        />
      )}

      {currentView === "projects" && (
        <ProjectsPage
          onBack={handleBackToHome}
          onProjectClick={handleProjectClick}
          projects={projects}
          onProjectsClick={handleViewProjects}
          onProcessesClick={handleViewProcesses}
          onAboutClick={handleViewAbout}
        />
      )}

      {currentView === "project" && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackFromProject}
          fromProjectsPage={previousView === "projects"}
          onNavigateToProjects={handleViewProjects}
          onNavigateToProcesses={handleViewProcesses}
          onNavigateToAbout={handleViewAbout}
        />
      )}

      {currentView === "processes" && (
        <ProcessesPage
          onBack={handleBackToHome}
          onProjectsClick={handleViewProjects}
          onProcessesClick={handleViewProcesses}
          onAboutClick={handleViewAbout}
        />
      )}

      {currentView === "about" && (
        <AboutPage
          onBack={handleBackToHome}
          onProjectsClick={handleViewProjects}
          onProcessesClick={handleViewProcesses}
          onAboutClick={handleViewAbout}
        />
      )}
    </div>
  );
}
