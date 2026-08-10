'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let locoScroll;

    // Async import for Locomotive Scroll v5+
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locoScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: scrollRef.current,
          lerp: 0.1,
          smoothWheel: true,
        },
      });

      // Refresh GSAP ScrollTrigger on route change
      ScrollTrigger.refresh();
    })();

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
    };
  }, [pathname]);

  return (
    <div ref={scrollRef} className="w-full min-h-screen">
      {children}
    </div>
  );
}