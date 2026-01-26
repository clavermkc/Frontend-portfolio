"use client";

import { useState } from "react";
import { Terminal, KeyRound, Mail, Eye, EyeOff, LogIn } from "lucide-react";
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation de chargement
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Ici, intégrer la logique d'authentification réelle
  };

  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* En-tête style terminal */}
       
        <div className="mb-8">
           <Tooltip title="only for the Admin" followCursor>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Terminal className="w-6 h-6 text-accent" />
            </div>
            <div className="font-mono ">
              <div className="text-sm text-[var(--color-terminal-green)]">terminal@auth:~$</div>
            </div>
          </div>
          </Tooltip>  

          <h1 className="text-3xl font-bold mb-2 font-mono">Login</h1>
         
        </div>

        {/* Carte de formulaire */}
        <div className="border border-border rounded-xl p-6 bg-surface/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </div>
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="user@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 pl-11 border border-border bg-bg rounded-lg font-mono
                           text-textPrimary placeholder:text-textSecondary/50
                           focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
                           transition-all duration-200"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-textSecondary mb-2 font-mono">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4" />
                  <span>Password</span>
                </div>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pl-11 pr-11 border border-border bg-bg rounded-lg font-mono
                           text-textPrimary placeholder:text-textSecondary/50
                           focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
                           transition-all duration-200"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary">
                  <KeyRound className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-accent transition-colors"
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-border rounded bg-bg text-accent 
                           focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-bg"
                />
                <span className="text-sm text-textSecondary font-mono">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-accent hover:text-accentHover underline underline-offset-2 font-mono"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-black
                       font-bold rounded-lg hover:bg-accentHover transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed font-mono group"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Connexion en cours...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Sign in</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>    
    </section>
  );
}