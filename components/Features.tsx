"use client";

import React, { useEffect, useState } from "react";
// import { CustomDroneIcon } from "@/components/drone-icon";
import { PawPrint, Trees, Satellite } from "lucide-react";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [imageFade, setImageFade] = useState(true);
  const [autoRotationKey, setAutoRotationKey] = useState(0);

  useEffect(() => {
    const featuresCount = 4;

    const interval = setInterval(() => {
      setImageFade(false);
      setTimeout(() => {
        setSelectedFeature((prev) => (prev + 1) % featuresCount);
        setImageFade(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotationKey]);

  return (
    <div>
      <section
        id="narrative"
        className="relative py-20 md:py-32 px-4 animate-on-scroll"
      >
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
            <div className="max-w-[720px]">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                CONSERVATION TECHNOLOGY
              </div>
              <h2 className="font-serif text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-medium mb-8 text-balance">
                Every forest ecosystem{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  matters
                </span>
              </h2>
              <p className="text-[#A7ABB3] text-base md:text-lg leading-relaxed mb-12">
                Our satellite and AI technology monitors biodiversity, detects
                illegal logging, tracks deforestation patterns, and alerts teams
                in real-time. Preservation at the speed of nature demands.
              </p>

              <div className="md:hidden mb-8">
                <div className="rounded-[24px] p-1 w-full aspect-square overflow-hidden">
                  <img
                    src={
                      [
                        "/drone.png",
                        "/real-time-satellite.png",
                        "/biodiversity-tracking.png",
                        "/deforestation-detect.png",
                      ][selectedFeature] || "/placeholder.svg"
                    }
                    alt="Feature preview"
                    className={`w-full h-full object-cover rounded-[20px] transition-opacity duration-300 ${
                      imageFade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Drone Surveys",
                    desc: "Aerial surveys to catalog wildlife and species diversity",
                    icon: CustomDroneIcon,
                    image: "/drone.png",
                  },
                  {
                    title: "Real-time Monitoring",
                    desc: "24/7 satellite surveillance with instant alerts",
                    icon: Satellite,
                    image: "/real-time-satellite.png",
                  },
                  {
                    title: "Biodiversity Tracking",
                    desc: "Map and monitor wildlife populations across regions",
                    icon: PawPrint,
                    image: "/biodiversity-tracking.png",
                  },
                  {
                    title: "Deforestation Prevention",
                    desc: "Detect threats before they escalate",
                    icon: Trees,
                    image: "/deforestation-detect.png",
                  },
                ].map((feature, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setImageFade(false);
                      setTimeout(() => {
                        setSelectedFeature(i);
                        setImageFade(true);
                        setAutoRotationKey((prev) => prev + 1);
                      }, 300);
                    }}
                    className={`relative w-full text-left flex gap-4 items-start p-5 transition-all duration-300 rounded-xs py-4 overflow-hidden ${
                      selectedFeature === i
                        ? "border border-white/20"
                        : "border border-white/10"
                    }`}
                  >
                    <feature.icon
                      className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors ${
                        selectedFeature === i
                          ? "text-green-400"
                          : "text-green-500/60"
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#A7ABB3]">
                        {feature.desc}
                      </p>
                    </div>
                    {selectedFeature === i && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <div className="h-full bg-white progress-bar" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-stretch justify-center">
              <div className="relative w-full h-full min-h-[500px]">
                {[
                  {
                    title: "Drone Surveys",
                    image: "/drone.png",
                  },
                  {
                    title: "Real-time Monitoring",
                    image: "/real-time-satellite.png",
                  },
                  {
                    title: "Biodiversity Tracking",
                    image: "/biodiversity-tracking.png",
                  },
                  {
                    title: "Deforestation Prevention",
                    image: "/deforestation-detect.png",
                  },
                ].map((feature, i) => {
                  const positionInStack = (i - selectedFeature + 4) % 4;
                  const isActive = positionInStack === 0;

                  return (
                    <div
                      key={i}
                      className="absolute inset-0 p-1 transition-all duration-600 ease-out"
                      style={{
                        zIndex: 4 - positionInStack,
                        transform: `translateX(${
                          positionInStack * 16
                        }px) scale(${1 - positionInStack * 0.02})`,
                        opacity: isActive
                          ? imageFade
                            ? 1
                            : 1
                          : 0.6 - positionInStack * 0.15,
                      }}
                    >
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

export function CustomDroneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 10 7 7" />
      <path d="m10 14-3 3" />
      <path d="m14 10 3-3" />
      <path d="m14 14 3 3" />
      <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
      <path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
      <path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
      <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
      <rect x="10" y="8" width="4" height="8" rx="1" />
    </svg>
  );
}
