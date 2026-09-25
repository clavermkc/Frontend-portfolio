"use client";

import Image from "next/image";
import { Terminal, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const techLogos = [
  { src: "/mysql.svg", alt: "MySQL" },
  { src: "/bash.svg", alt: "Bash" },
  { src: "/vue.svg", alt: "Vue" },
  { src: "/react.svg", alt: "React" },
  { src: "/next.svg", alt: "Next.js" },
  { src: "/typeScript.svg", alt: "TypeScript" },
  { src: "/Java.svg", alt: "Java" },
  { src: "/Spring.svg", alt: "Spring" },
  { src: "/Python.svg", alt: "Python" },
  { src: "/Docker.svg", alt: "Docker" },
  {src: "/Postman.svg", alt: "Postman" },
  {src:"/Swagger.svg", alt: "Swagger" },
  {src: "/GitHub Actions.svg", alt: "GitHub Action" },
];

export default function HomePage() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCurrentDate(new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }));
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const marqueeLogos = [...techLogos, ...techLogos];

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center">
      <div className="absolute top-0 right-0 flex items-center gap-2 text-xs font-mono text-accent/80 italic">
        <Calendar className="w-3 h-3" />
        <span>{currentDate}</span>
      </div>

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

      <div className="max-w-xl font-mono text-sm leading-relaxed text-textSecondary border-l-2 border-accent/30 pl-4 py-2">
        <p>
          Building robust backends and exploring DevOps. Welcome to my personal dev log
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="tech-marquee flex w-max items-center gap-8 md:gap-12">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center opacity-90"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={52}
                height={52}
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-marquee {
          animation: tech-marquee 18s linear infinite;
          will-change: transform;
        }

        @keyframes tech-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}