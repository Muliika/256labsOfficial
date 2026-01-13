"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Content fade up
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Links stagger in
      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll("a");
        gsap.from(links, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          04 / Contact
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          GET IN TOUCH
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left column - Message */}
        <div ref={contentRef}>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
            Interested in collaborating or have a project in mind? We&apos;re
            always open to discussing new opportunities, creative ideas, or
            potential partnerships.
          </p>
          <a
            href="mailto:hello@signal.studio"
            className="group inline-flex items-center gap-3 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight hover:text-accent transition-colors duration-300"
          >
            256labsofficial@gmail.com
            <span className="inline-block w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </a>
        </div>

        {/* Right column - Links */}
      </div>
    </section>
  );
}
