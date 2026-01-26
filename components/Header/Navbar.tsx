"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoHorizontal from "../LogoHorizontal";
import ThemeToggle from "@/components/UI/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "login", href: "/login" },   
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link href="/" aria-label="Accueil">
        <LogoHorizontal className="h-9 w-auto" />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative
                ${isActive ? "text-[var(--color-terminal-green)]" : ""}
                hover:text-[var(--color-terminal-green)]
              `}
            >
              {item.label}

              {/* underline active */}
              {isActive && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--color-terminal-green)]" />
              )}
            </Link>
          );
        })}
         <ThemeToggle />
      </div>
      

      {/* Mobile */}
      <button
        className="md:hidden text-xl"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={isActive ? "text-[var(--color-terminal-green)]" : ""}
                >
                  {item.label}
                </Link>
              );
            })}
             <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
