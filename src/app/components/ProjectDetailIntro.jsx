import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  StaggerText,
  TextFadeHorizontal,
  TextFadeUp,
  FlipRight,
  FlipLeft,
  TextFadeLeft,
  TextFadeDown,
  TextFadeRight,
} from "../components/TextFadeUp";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailIntro() {
  const stats = [
    { value: "140", label: "NO. OF TOTAL UNITS" },
    { value: "3 & 4", unit: "BHK", label: "NO. OF BEDROOMS" },
    { value: "5.70", unit: "ACRES", label: "TOTAL SIZE IN ACRES" },
    { value: "1200-3000", unit: "SQ.FT.", label: "TOTAL SIZE IN SQ FT" },
  ];
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(
    () => {
      const rows = rowsRef.current;

      // 1. Initial State: All rows set to low opacity & slightly shifted down
      gsap.set(rows, { opacity: 0.15, y: 30 });

      // 2. Timeline for Pinned Scroll Sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", // Scroll length to complete sequence
          pin: true, // Pin section while scrolling
          scrub: 1, // Smooth response to scroll
        },
      });

      // 3. Reveal Each Row Sequentially
      rows.forEach((row, index) => {
        tl.to(
          row,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          index * 1.2,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="w-full py-10 sm:py-20 px-4 sm:px-8 bg-[#EDE8D0] proejectdetailbannerer">
      <div className="container max-w-7xl mx-auto flex flex-col">
        {/* Top Grid: Content & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 leftsidesectionflexxxs">
          {/* Left Area: Title & Description */}
          <div className="lg:col-span-8 space-y-4">
            <TextFadeUp delay={0.15}>
              <p className="subheadingtext uppercase blackcolor mb-0">
                EXPERIENCE THE SMART
              </p>

              {/* Title with Logo */}
              <div className="flex flex-wrap items-center gap-4 flexxxxdeirection">
                <h2 className="secondheading greencolor leading-[100%]">
                  <strong>VALUE LIVING</strong>
                </h2>
                <div className="relative w-[135px] h-[100px]">
                  <img
                    src="/images/project-detail/wind-detail-logo.png"
                    alt="The Wind Logo"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </TextFadeUp>

            {/* Paragraph Content */}
            <div className="space-y-3 pt-2 max-w-4xl">
              <TextFadeUp delay={0.15}>
                <p className="blackcolor paratext">
                  The Wind is a premium gated villa community located in
                  Chennai&apos;s rapidly developing Porur-Kolapakkam corridor.
                  Designed for smart value living, the project combines peaceful
                  surroundings, organized infrastructure, and strong
                  connectivity within a thoughtfully planned residential
                  environment.
                </p>
              </TextFadeUp>
              <TextFadeUp delay={0.11}>
                <p className="blackcolor paratext">
                  With convenient access to major IT hubs, metro connectivity,
                  schools, hospitals, retail destinations, and important
                  transport routes, The Wind offers a balanced lifestyle for
                  modern families. Its strategic location, low-density planning,
                  and quality development approach position it as a secure
                  residential address with excellent long-term appreciation
                  potential.
                </p>
              </TextFadeUp>
            </div>
          </div>

          {/* Right Area: Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col justify-center gap-x-2 sm:gap-x-4 gap-y-6 lg:space-y-5 lg:pl-8 statscolumnss">
            {stats.map((stat, index) => (
              <TextFadeRight key={index} delay={index * 0.15}>
                <div className="border-b-0 lg:border-b border-[#004852]/15 pb-0 lg:pb-5">
                  <div className="flex flex-wrap items-baseline gap-x-1">
                    <span className="semibold text-[22px] sm:text-[32px] md:text-[42px] lg:fiftypixel greencolor leading-tight">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-[12px] sm:text-[18px] lg:twentyeightpixel slimfontthin blackcolor whitespace-nowrap">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p className="blackcolor paratext text-[11px] sm:text-[14px] leading-snug mt-1 uppercase">
                    {stat.label}
                  </p>
                </div>
              </TextFadeRight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}