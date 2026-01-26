import ProjectGrid from "@/app/projects/ProjectGrid";
import { Project } from "@/types";
import { Github, Linkedin } from "lucide-react";

const projects: Project[] = [
  {
    id: 1,
    titre: "Djanguicore Solution",
    description: "Mini-ERP mit skalierbarer Backend-Architektur, Microservices und sicherer Authentifizierung.",
    date: "04/2025 ",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "REST API"],
  },
  {
    id: 2,
    titre: "Student Administration Web Application",
    description: "Webanwendung für Universitäten mit Verwaltung von Benutzern, Rollen und Geschäftsabläufen.",
    date: "10/2023 ",
    technologies: ["Jakarta EE", "JSF / PrimeFaces", "JPA / Hibernate", "PostgreSQL", "Authentication"],
  },
  {
    id: 3,
    titre: "MCP Application",
    description: "Flask-Backend-Anwendung mit REST-API und Datenbankdesign.",
    date: "07/2025 ",
    technologies: ["Python", "Flask", "PostgreSQL", "REST API"],
  },
  {
    id: 4,
    titre: "JavaFX Geological Visualization Tool",
    description: "JavaFX-Desktopanwendung zur Visualisierung geologischer Modelle.",
    date: "04/2024 ",
    technologies: ["Java", "JavaFX", "CSS", "Desktop Application"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-2 py-1">
      {/* En-tête avec style terminal */}
      <div className="mb-10">
         <h1 className="text-2xl mb-6 text-dark-300">  
        Projects
         </h1>
        
        <div className="inline-flex items-center gap-2 text-accent font-mono text-sm mb-4">
          <span className="animate-pulse">❯</span>
          <span>projects:~$ cat projects.md</span>
        </div>
        <div>
        <p className="text-textSecondary text JetBrainsMono normal-font">
        Eine Auswahl meiner aktuellen Projekte, die meine Kompetenzen im Bereich Backend-Entwicklung hervorheben.        </p>

      </div>
      </div>
      
        
      {/* Grille des projets */}
      <ProjectGrid projects={projects} />

    
      {/* CTA pour voir plus */}
      <div className="mt-12 text-center">
        <p className="text-textSecondary mb-4 font-mono">
          Interessiert an weiteren Projekten? Besuchen Sie mein GitHub.
        </p>
        <a
          href="https://github.com/clavermkc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg
                   hover:bg-accent/10 transition-colors font-mono"
        >
          <Github className="w-0.5 h-0.5" />
          Alle Projekte anzeigen
        </a>
      </div>
    </section>
  );
}