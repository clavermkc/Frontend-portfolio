"use client";

import { Terminal, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentDate, setCurrentDate] = useState("");

  // Pour éviter les erreurs d'hydratation avec les dates dynamiques
  useEffect(() => {
    const date = new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(date);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center">
      
      {/* Date en haut à droite */}
      <div className="absolute top-0 right-0 flex items-center gap-2 text-xs font-mono  text-accent/80 italic">
        <Calendar className="w-3 h-3" />
        <span>{currentDate}</span>
      </div>

      {/* Contenu Terminal Login */}
      <div className="mb-8 JetbrainsMono font-mono">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
            <Terminal className="w-6 h-6 text-accent" />
          </div>
          <div className="JetbrainsMono">
            <div className="text-sm text-accent">
              <span className="opacity-80">terminal@auth:</span>
              <span className="text-accent">~$</span>
              <span className="ml-2 animate-pulse">_</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter">
            /Home<span className="text-accent">_</span>
          </h1>
        </div>
      </div>

      {/* Message de bienvenue */}
      <div className="max-w-xl font-mono text-sm leading-relaxed text-textSecondary border-l-2 border-accent/30 pl-4 py-2">
        <p>
          Building robust backends and exploring DevOps. Welcome to my personal dev log
        </p>
      </div>
    </section>
  );
}