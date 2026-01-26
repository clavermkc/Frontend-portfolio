export interface Project {
  id: number;
  titre: string;
  description: string;

  /** Période ou date du projet */
  date: string;

  /** Stack technique principale */
  technologies: string[];
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}
