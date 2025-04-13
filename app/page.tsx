import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { DataProvider } from "./_hooks/useData";
import PartnerBanner from "@/components/layout/partner-banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <main className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <Projects />
        <Contact />
        <PartnerBanner />
      </main>
    </div>
  );
}
