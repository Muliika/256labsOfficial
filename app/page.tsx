// import { AnimatedCTASection } from "@/components/AnimatedCta";
import HeroContent from "@/components/_Hero/HeroContent";
// import PulsingCircle from "@/components/_Hero/PulsingCircle";
// import Cta from "@/components/Cta";
// import Features from "@/components/Features";
import ShaderBackground from "@/components/Hero";
// import { HeroSection } from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <ShaderBackground>
        <HeroContent />
        {/* <PulsingCircle /> */}
      </ShaderBackground>
      {/* <Cta /> */}
      {/* <Features /> */}
      {/* <AnimatedCTASection /> */}
    </div>
  );
}
