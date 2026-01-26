import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="relative min-h-screen bg-[#0a0a0a] text-white">
        {/* Le fond fixe derrière tout */}
        <TechBackground />

        {/* Le contenu du site par-dessus */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
  
}