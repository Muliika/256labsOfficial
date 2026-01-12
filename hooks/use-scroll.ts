"use client";
import { useCallback, useEffect, useState } from "react";

export function useScroll(threshold: number) {
  // Lazy initialization - only runs once on mount
  const [scrolled, setScrolled] = useState(() => {
    // Check if we're in the browser (not SSR)
    if (typeof window !== "undefined") {
      return window.scrollY > threshold;
    }
    return false;
  });

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}