import { ColophonSection } from "@/components/_Main/ColophoneSection";
import { HeroSection } from "@/components/_Main/HeroSection";
import { PrinciplesSection } from "@/components/_Main/PrinciplesSection";
import { SideNav } from "@/components/_Main/SideNav";
import { SignalsSection } from "@/components/_Main/SignalsSection";
import { WorkSection } from "@/components/_Main/WorkSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <ColophonSection />
      </div>
    </main>
  );
}
