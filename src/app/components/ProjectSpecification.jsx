"use client";

import { useState } from "react";
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
} from "../components/TextFadeUp";
import { BrochureButton } from "./CtaButtons";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSpecifications() {
  const [activeTab, setActiveTab] = useState("WATER");

  const specsData = {
    WATER: {
      title: "WATER",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/water.jpg",
      points: [
        "Hydro Pneumatic System with treated water",
        "Separate Municipal water supply in kitchens",
        "Provision for geysers in all bathrooms",
        "Rainwater harvesting pits for water conservation",
      ],
    },

    KITCHEN: {
      title: "KITCHEN",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/kitchen.jpg",
      points: [
        "Granite polished edge counter top",
        "Stainless steel sink",
        "Designer ceramic tiles two feet above counter",
        "Superior quality anti-skid ceramic tiles on utility area",
      ],
    },

    PAINTING: {
      title: "PAINTING",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/painting.jpg",
      points: [
        "Internal Walls: Superior wall putty with acrylic emulsion paint",
        "External Walls: Plaster finish with weather shield exterior emulsion",
      ],
    },

    STRUCTURE: {
      title: "STRUCTURE",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/structure.jpg",
      points: [
        "Ground + two levels RCC structure",
        "Covered car park in ground floor",
      ],
    },

    PLASTERING: {
      title: "PLASTERING",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/plastering.jpg",
      points: [
        "Internal & Ceiling: 12 mm thick double coat cement plaster with smooth finish",
        "External: 18 mm thick double coat cement plaster",
      ],
    },
  };

  const tabs = ["WATER", "KITCHEN", "PAINTING", "STRUCTURE", "PLASTERING"];
  const currentContent = specsData[activeTab];

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
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0] !pb-10">
      <div className="container max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-7xl mb-12">
          <TextFadeDown delay={0.3}>
            <p className="subheadingtext uppercase blackcolor">
              SPECIFICATIONS
            </p>
          </TextFadeDown>
          <TextFadeDown delay={0.2}>
            <h2 className="mainheading indicocolor uppercase">
              PROJECT
              <strong className="font-extrabold text-[#004852]">
                SPECIFICATIONS
              </strong>
            </h2>
          </TextFadeDown>
          <TextFadeDown delay={0.1}>
            <p className="blackcolor paratext mt-[10px] breakremove">
              Detailed specifications highlighting construction quality,
              infrastructure standards and <br /> thoughtfully planned
              development features throughout the project.
            </p>
          </TextFadeDown>
        </div>

        {/* Specs Box Container */}
        <div className="w-full bg-[#E7DEC0]/60 border border-[#004852]/15 rounded-3xl p-6 sm:p-8 md:p-10 mobileprojectttcsss">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center projectsectificationscontain">
            {/* Left Vertical Tabs */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 mobileeedisplayslider">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`waterspec px-3 py-3.5 rounded-xl semibold addressstyle uppercase transition-all duration-300 text-center whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#004852] text-white shadow-md"
                        : "bg-[#E3DCB9]/50 text-[#004852] hover:bg-[#E3DCB9] border border-[#004852]/10"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Middle Image Showcase */}
            <div className="lg:col-span-5 relative h-[100%] imagecordnerr imagebordererer">
              <TextFadeUp key={activeTab} delay={0.1}>
                <img
                  className="h-[100%] rounded-[10px] object-cover"
                  src={currentContent.image}
                  alt={currentContent.title}
                />
              </TextFadeUp>
            </div>

            {/* Right Specifications Details Grid */}
            <div
              key={activeTab}
              className="lg:col-span-5 flex flex-col justify-center space-y-4"
            >
              <TextFadeUp delay={0.1}>
                <h3 className="subheadingtext uppercase blackcolor">
                  <strong className="greencolor">{currentContent.title}</strong>{" "}
                  <span>{currentContent.subtitle}</span>
                </h3>
              </TextFadeUp>

              {/* 2-Column Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2 rightsidecolumnlinee">
                {currentContent.points.map((point, index) => (
                  <div key={index}>
                    <TextFadeUp delay={index * 0.1}>
                      <div className="border-b border-[#004852]/15 pb-3 flex items-start space-x-2 lastborderr">
                        <span className="blackcolor paratext !text-[20px]">
                          •
                        </span>

                        <p className="blackcolor paratext">{point}</p>
                      </div>
                    </TextFadeUp>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center mt-10 space-y-3">
          <p
            className="blackcolor paratext "
            style={{ letterSpacing: "0.5px" }}
          >
            FOR MORE DETAILED SPECIFICATIONS
          </p>
          <BrochureButton
            project="Mother Mira - The Wind"
            brochure="/pdf/the-wind-brochure.pdf"
            className="cursor-pointer rounded-full border border-[#0048523D] bg-[#004852] text-[#EDE8D0] semibold paratext  buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300 donwloadbreochurebutton"
          >
            DOWNLOAD BROCHURE
          </BrochureButton>
        </div>
      </div>
    </section>
  );
}
