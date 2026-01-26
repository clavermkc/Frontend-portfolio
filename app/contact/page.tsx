// app/contact/page.tsx - VERSION ADAPTÉE À TON DESIGN
"use client";

import { useState, FormEvent } from "react";
import { 
  Mail, Github, Linkedin, Send, FileText, Download, 
  Terminal, Loader2, CheckCircle, AlertCircle 
} from "lucide-react";
import { submitContactForm, ContactFormData } from "@/lib/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",  // Ton champ "Name"
    lastName: "",   // Optionnel - reste vide
    phoneNumber: "",// Optionnel - reste vide
    email: "",      // Ton champ "Email"
    message: ""     // Ton champ "Message"
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const socialLinks = [
    { icon: <Mail size={18} />, label: "kameniclaver@gmail.com", href: "mailto:kameniclaver@gmail.com" },
    { icon: <Github size={18} />, label: "github.com/clavermkc", href: "https://github.com/clavermkc" },
    { icon: <Linkedin size={18} />, label: "linkedin.com/in/claver-kameni", href: "https://linkedin.com/in/claver-kameni" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Mapping des noms de champs frontend vers backend
    const fieldMapping: Record<string, keyof ContactFormData> = {
      "name": "firstName",      // Ton champ "Name" -> firstName backend
      "email": "email",         // Même nom
      "message": "message"      // Même nom
    };

    const backendFieldName = fieldMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [backendFieldName]: value
    }));
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setSubmitStatus("idle");
  setErrorMessage("");

  console.log("Données envoyées au backend:", formData);
  console.log("URL d'API:", `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/auth/contact-us`);

  try {
    const result = await submitContactForm(formData);
    console.log("Réponse du backend:", result);
    
    if (result.success) {
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: ""
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.message || "Erreur lors de l'envoi");
    }
  } catch (error) {
    console.error("Erreur complète:", error);
    setSubmitStatus("error");
    setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue");
  } finally {
    setIsLoading(false);
  }
};
  return (
    <section className="relative min-h-[80vh] py-12 animate-in fade-in duration-700">
      
      {/* Titre style Terminal */}
      <div className="mb-8 font-mono">
        <h1 className="text-2xl md:text-3xl mb-2">
          <span className="text-accent">$</span> Let's have a chat!
        </h1>
        <div className="h-1 w-20 bg-accent/50 mt-2"></div>
      </div>

      {/* Messages d'état */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 border border-accent/30 bg-accent/10 rounded-lg animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-3 text-accent">
            <CheckCircle className="w-5 h-5" />
            <span className="font-mono font-medium">
              Message sent successfully! I'll get back to you as soon as possible.
            </span>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 border border-red-500/30 bg-red-500/10 rounded-lg animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-3 text-red-500">
            <AlertCircle className="w-5 h-5" />
            <div>
              <span className="font-mono font-medium">Error occurred by sending this message</span>
              <p className="text-sm mt-1 text-red-400 font-mono">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Colonne GAUCHE : Infos de contact & CV */}
        <div className="space-y-12">
          <div className="flex flex-col gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-textSecondary transition-all duration-300 hover:translate-x-2"
              >
                <div className="group-hover:text-accent transition-colors">
                  {link.icon}
                </div>
                <span className="font-mono text-sm group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* BLOC CV DOWNLOADER */}
          <div className="pt-4">
            <div className="group relative overflow-hidden border border-accent/20 bg-accent/5 p-4 rounded-lg transition-all hover:border-accent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="text-accent w-5 h-5" />
                  <div className="font-mono">
                    <p className="text-sm font-bold">CURRICULUM_VITAE.pdf</p>
                    <p className="text-[10px] text-textSecondary opacity-60 uppercase">Size: 1.2MB | Type: PDF</p>
                  </div>
                </div>
                <a 
                  href="/CV_Claver.pdf"
                  download="CV_Claver.pdf"
                  className="flex items-center gap-2 bg-accent text-black px-3 py-1.5 rounded text-xs font-bold hover:bg-white transition-colors"
                >
                  < Download size={14} />
                  DOWNLOAD
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl font-mono font-bold">
              <span className="text-accent">$</span> Let's collaborate!
            </h2>
            <p className="text-textSecondary font-mono text-sm mt-2 opacity-70">
            Offen für Werkstudenten-job ab April. </p>
          </div>
        </div>

        {/* Colonne DROITE : Formulaire */}
        <div className="bg-surface/30 backdrop-blur-sm border border-border p-8 rounded-xl relative h-fit">
          <div className="absolute top-4 right-6 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-accent/50"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 font-mono">
            <div>
              <label htmlFor="name" className="block text-xs text-accent mb-2 uppercase tracking-widest">
                Name
              </label>
              <input 
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={50}
                value={formData.firstName} // Map vers firstName
                onChange={handleChange}
                placeholder="root"
                className="w-full bg-background/50 border border-border rounded p-3 text-sm focus:border-accent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-accent mb-2 uppercase tracking-widest">
                Email
              </label>
              <input 
                id="email"
                name="email"
                type="email"
                required
                maxLength={100}
                value={formData.email}
                onChange={handleChange}
                placeholder="user@example.com"
                className="w-full bg-background/50 border border-border rounded p-3 text-sm focus:border-accent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-accent mb-2 uppercase tracking-widest">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                required
                minLength={10}
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                placeholder="hier schreiben..."
                className="w-full bg-background/50 border border-border rounded p-3 text-sm focus:border-accent outline-none transition-all resize-none"
              ></textarea>
              <div className="text-right mt-2">
                <span className="text-xs text-textSecondary font-mono">
                  {formData.message.length}/2000 caractères
                </span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="group flex items-center justify-center gap-2 w-full py-4 bg-accent text-black font-bold rounded hover:bg-accent/90 transition-all active:scale-95 uppercase tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending message in progress ...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Information debug (optionnel - à cacher en production) */}
    
    </section>
  );
}