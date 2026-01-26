"use client";

import { CalendarDays, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  titre: string;
  description: string;
  date: string;
  technologies: string[];
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          // 'group' déclenche les effets 'group-hover' sur les enfants
          // hover:border-green-500 gère la bordure de la carte
          className="group relative border border-border/50 p-6 transition-all duration-300 bg-surface/50 backdrop-blur-sm hover:border-green-500"
        >
          {/* En-tête avec titre et date */}
          <div className="flex justify-between items-start mb-4">
            {/* group-hover:text-green-500 fait passer le titre au vert quand on survole la carte */}
            <h2 className="text-xl  text-textPrimary transition-colors duration-300 group-hover:text-green-500/60
            JetBrainsMono monospace">
              {project.titre}
            </h2>
            
            {project.date && (
              <div className="flex items-center gap-1 text-xs text-textSecondary JetBrainsMono monospace">
                <CalendarDays className="w-3 h-3" />
                <span>{project.date}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-lg mb-4 text-dark-200  text-sm mb-4 JetBrainsMono normal-font">
            {project.description}
          </p>

          {/* Technologies */}
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

          {/* Actions - Liens avec leur propre hover vert */}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-textSecondary hover:text-green-500 transition-colors font-mono"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Projekt ansehen</span>
            </a>
            
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-textSecondary hover:text-green-500 transition-colors font-mono"
            >
              <Github className="w-4 h-4" />
              <span>Quellecode</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}