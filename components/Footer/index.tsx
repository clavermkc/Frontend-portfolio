import Image from "next/image";
import { Github, Linkedin, Cpu, Globe, Circle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
          
          {/* Section 1: Identité */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/afro.png"
                alt="Claver Logo"
                width={40}
                height={40}
                className="opacity-100 grayscale hover:grayscale-10 transition-all"
              />
              <span className="font-mono font-bold tracking-tighter text-lg">CLAVER.SYS</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed max-w-xs">
            Aspiring Backend Developer specializing in robust server-side architectures and modern system design . 
            Focused on network infrastructure and DevOps efficiency.            </p>
          </div>

          {/* Section 2: État du système */}
          <div className="font-mono space-y-2">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">System Status</h3>
            <div className="flex items-center gap-2 text-[10px]">
              <Circle size={8} className="fill-accent text-accent animate-pulse" />
              <span className="text-[var(--text-muted)] uppercase">Available for projects</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <Cpu size={10} className="text-[var(--text-muted)]" />
              <span className="text-[var(--text-muted)]">Stack: Java / Spring / Next.js</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <Globe size={10} className="text-[var(--text-muted)]" />
              <span className="text-[var(--text-muted)]">Location: Germany / Remote</span>
            </div>
          </div>

          {/* Section 3: Social & Connect */}
          <div className="flex flex-col md:items-end gap-4">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/clavermkc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/claver-kameni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-[var(--text-muted)]">
            © {new Date().getFullYear()} CLAVER_KAMENI // ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-tighter">
            Built with <span className="text-accent">Next.js 14</span> & <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}