import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../../ui/CustomUI/ProjectCard'
import { ProjectCardData } from '../ProjectsPage/projects/types'

type Props = { 
    projects: ProjectCardData[];
    columnsClassName?: string;
    basePath?: string;
};

export function ProjectCardsGrid({
  projects,
  columnsClassName = "grid md:grid-cols-2 gap-12",
  basePath = "/projects",
}: Props) {
  const navigate = useNavigate();

  return (
    <div className={columnsClassName}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{ animationDelay: `${index * 100}ms` }}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <ProjectCard
            {...project}
            onClick={() => navigate(`${basePath}/${project.id}`)}
            disabled={project.comingSoon}
          />
        </div>
      ))}
    </div>
  );
}