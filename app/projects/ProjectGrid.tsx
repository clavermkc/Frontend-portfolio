"use client";

import { CalendarDays, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  titre: string;
  description: string;
  date: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
}

function parseDateToTimestamp(dateValue: string) {
  if (!dateValue) return 0;

  const normalized = dateValue.trim();
  const date = new Date(normalized);

  if (!Number.isNaN(date.getTime())) {
    return date.getTime();
  }

  const parts = normalized.split("/");
  if (parts.length === 2) {
    const [month, year] = parts;
    return new Date(`${year}-${month}-01`).getTime();
  }

  return 0;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const sortedProjects = [...projects].sort((a, b) => {
    return parseDateToTimestamp(b.date) - parseDateToTimestamp(a.date);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sortedProjects.map((project) => (
        <div
          key={project.id}
          className="group relative border border-border/50 p-6 transition-all duration-300 bg-surface/50 backdrop-blur-sm hover:border-green-500"
        >
          <div className="flex justify-between items-start mb-4 gap-3">
            <h2 className="text-xl text-textPrimary transition-colors duration-300 group-hover:text-green-500/60 JetBrainsMono monospace">
              {project.titre}
            </h2>

            {project.date && (
              <div className="flex items-center gap-1 text-xs text-textSecondary JetBrainsMono monospace">
                <CalendarDays className="w-3 h-3" />
                <span>{project.date}</span>
              </div>
            )}
          </div>

          <p className="text-lg mb-4 text-dark-200 text-sm mb-4 JetBrainsMono normal-font">
            {project.description}
          </p>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono border border-border text-textSecondary rounded-5 transition-colors duration-300 hover:border-green-500/20 hover:text-green-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            {project.projectUrl ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-textSecondary hover:text-green-500 transition-colors font-mono"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Projekt ansehen</span>
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-textSecondary hover:text-green-500 transition-colors font-mono"
              >
                <Github className="w-4 h-4" />
                <span>Quellecode</span>
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}