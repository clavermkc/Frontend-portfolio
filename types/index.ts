export interface Project {
  id: number;
  titre: string;
  description: string;

  /** Période ou date du projet */
  date: string;

  /** Stack technique principale */
  technologies: string[];

  /** URL publique du projet, si disponible */
  projectUrl?: string;

  /** URL du dépôt GitHub */
  githubUrl?: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}
