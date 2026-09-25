"use client";

import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

// 1. On définit l'interface pour un élément du décor
interface TechElement {
  id: number;
  x: number;
  y: number;
  rot: number;
  type: 'icon' | 'word'; // Type union strict
  val: string | LucideIcon; // Soit un mot, soit un composant icône
}

const iconList: LucideIcon[] = [
  Icons.Cpu, Icons.Database, Icons.Server, Icons.Code, Icons.Terminal, 
  Icons.GitBranch, Icons.Cloud, Icons.Lock, Icons.Wifi, Icons.Cog,
  Icons.HardDrive, Icons.Network, Icons.Shield, Icons.Zap, Icons.Box,
  Icons.Activity, Icons.Layers, Icons.Package, Icons.Globe, Icons.Monitor
];

const techWords = [
  // Langages & Core
  "JAVA", "SPRING", "BOOT", "PYTHON", "GO", "RUST", "TYPESCRIPT", "JAVASCRIPT", "C++", "C#", "RUBY", "PHP", "SWIFT", "KOTLIN", "ZIG",
  // Frontend & Mobile
  "REACT", "NEXTJS", "VUE", "ANGULAR", "SVELTE", "TAILWIND", "SASS", "THREEJS", "WEBGL", "REDUX", "FLUTTER", "REACT-NATIVE", "QUICK",
  // Backend & API
  "NODEJS", "NESTJS", "EXPRESS", "DJANGO", "FLASK", "FASTAPI", "GRAPHQL", "REST", "GRPC", "PRISMA", "HIBERNATE", "ELIXIR",
  // Infrastructure & DevOps
  "DOCKER", "K8S", "TERRAFORM", "ANSIBLE", "JENKINS", "GITLAB", "CI/CD", "LINUX", "BASH", "SHELL", "GIT", "NGINX", "CLOUDFLARE",
  // Cloud & Data
  "AWS", "AZURE", "GCP", "VERCEL", "FIREBASE", "SUPABASE", "POSTGRES", "MONGODB", "REDIS", "SQL", "KAFKA", "ELASTICSEARCH", "DYNAMODB",
  // AI & Data Science
  "PYTORCH", "TENSORFLOW", "PANDAS", "NUMPY", "SCIKIT-LEARN", "OPENAI", "LANGCHAIN", "LLM", "HUGGINGFACE",
  // Outils & Sécurité
  "JWT", "OAUTH", "DASHBOARD", "METRICS", "PROMETHEUS", "GRAFANA", "SENTRY", "JEST", "CYPRESS", "VITEST", "ESLINT", "PRETTIER"
];
export default function TechBackground() {
  // 2. On utilise l'interface pour le state
  const [elements, setElements] = useState<TechElement[]>([]);

  useEffect(() => {
    const newElements: TechElement[] = Array.from({ length: 120 }).map((_, i) => {
      const isWord = Math.random() > 0.4;
      
      // 3. On construit l'objet en respectant l'interface TechElement
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rot: Math.random() * 360,
        type: isWord ? 'word' : 'icon', // TypeScript comprend ici que c'est le bon type
        val: isWord 
          ? techWords[Math.floor(Math.random() * techWords.length)]
          : iconList[Math.floor(Math.random() * iconList.length)]
      };
    });
    
    const animationFrameId = window.requestAnimationFrame(() => {
      setElements(newElements);
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background">
      <div className="absolute inset-2 opacity-[0.03] bg-grid-pattern" />

      {elements.map((el) => {
        return (
          <div
            key={el.id}
            className="absolute font-mono text-accent/10 flex items-center justify-center"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              transform: `rotate(${el.rot}deg)`,
              fontSize: '20px',
              animation: `float ${15 + (el.id % 10)}s ease-in-out infinite alternate`,
            }}
          >
            {el.type === 'word' ? (
              <span className="whitespace-nowrap tracking-tighter">
                {el.val as string}
              </span>
            ) : (
              // On caste vers LucideIcon pour l'affichage du composant
              (() => {
                const IconComponent = el.val as LucideIcon;
                return <IconComponent size={10} strokeWidth={10} />;
              })()
            )}
          </div>
        );
      })}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,var(--background)90%)]" />
    </div>
  );
}