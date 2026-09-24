"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoHorizontal from "../LogoHorizontal";
import ThemeToggle from "@/components/UI/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "";

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full px-3 py-3 flex items-center justify-between min-h-[60px]">
        
        {/* Logo */}
        <Link href="/" aria-label="Accueil" className="flex-shrink-0">
          <LogoHorizontal className="h-8 w-auto max-h-[40px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-mono ${
                  isActive ? "text-accent" : "text-textSecondary hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile - Sheet pour meilleure compatibilité */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full max-w-[100vw] p-0">
              {/* Ajoutez un SheetTitle pour l'accessibilité */}
              <SheetTitle className="sr-only">Menu de navigation mobile</SheetTitle>
              
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <LogoHorizontal className="h-8 w-auto" />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                
                {/* Menu Items */}
                <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                  {navItems.map((item) => {
                    const isActive = item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`block p-3 rounded-lg text-lg font-mono ${
                            isActive 
                              ? "bg-accent/10 text-accent" 
                              : "hover:bg-accent/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
                
                {/* Footer */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-textSecondary font-mono">
                      Clav&apos;s Portfolio
                    </span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}