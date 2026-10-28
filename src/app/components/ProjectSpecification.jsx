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
      title: "WATER SUPPLY",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/water-supply.jpg",
      points: [
        "Hydropneumatic water supply system with treated water.",
        // "Separate Municipal water supply in kitchens",
        // "Provision for geysers in all bathrooms",
        // "Rainwater harvesting pits for water conservation",
      ],
    },

    RAINWATER: {
      title: "RAINWATER HARVESTING",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/rainwater-harvesting.jpg",
      points: [
        "Rainwater harvesting pits for water conservation.",
        // "Stainless steel sink",
        // "Designer ceramic tiles two feet above counter",
        // "Superior quality anti-skid ceramic tiles on utility area",
      ],
    },

    INTERIOR: {
      title: "INTERIOR WALL FINISH",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/interior-wall-finish.jpg",
      points: [
        "DuraKote wall putty with a smooth finish.",
        // "External Walls: Plaster finish with weather shield exterior emulsion",
      ],
    },

    FLOORING: {
      title: "FLOORING",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/flooring.jpg",
      points: [
        "Somany, Kajaria or equivalent tiles in all rooms",
        // "Covered car park in ground floor",
      ],
    },

    STAIRCASE: {
      title: "STAIRCASE",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/staircase.jpg",
      points: [
        "Granite finish to the staircase",
        // "External: 18 mm thick double coat cement plaster",
      ],
    },
    BATHROOMS: {
      title: "BATHROOMS",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/bathrooms.jpg",
      points: ["Kohler CP fittings and sanitaryware."],
    },
    ELECTRICAL: {
      title: "ELECTRICAL WIRING",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/electrical-wiring.jpg",
      points: [
        "Orbit wires or equivalent",
        // "External: 18 mm thick double coat cement plaster",
      ],
    },
    SWITCHES: {
      title: "SWITCHES",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/white-switches.jpg",
      points: [
        "GM, Legrand or equivalent switches",
        // "External: 18 mm thick double coat cement plaster",
      ],
    },
    DOORS: {
      title: "DOORS",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/doors.jpg",
      points: [
        "Hawai, Sakthi Harmon or equivalent doors. ",
        // "External: 18 mm thick double coat cement plaster",
      ],
    },
    WINDOWS: {
      title: "WINDOWS",
      subtitle: "SPECIFICATIONS",
      image: "/images/project-detail/specification/windows.jpg",
      points: [
        "Aluminium or UPVC windows.",
        // "External: 18 mm thick double coat cement plaster",
      ],
    },
  };

  const tabs = [
    "WATER",
    "RAINWATER",
    "INTERIOR",
    "FLOORING",
    "STAIRCASE",
    "BATHROOMS",
    "ELECTRICAL",
    "SWITCHES",
    "DOORS",
    "WINDOWS",
  ];
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
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 mobileeedisplayslider mobileeedisplayslidernewww">
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
              {/* <TextFadeUp key={activeTab} delay={0.1}> */}
              <img
                className="h-[100%] rounded-[10px] object-cover"
                src={currentContent.image}
                alt={currentContent.title}
              />
              {/* </TextFadeUp> */}
            </div>

            {/* Right Specifications Details Grid */}
            <div
              key={activeTab}
              className="lg:col-span-5 flex flex-col justify-center space-y-4"
            >
              {/* <TextFadeUp delay={0.1}> */}
              <h3 className="subheadingtext uppercase blackcolor">
                <strong className="greencolor">{currentContent.title}</strong>{" "} <br />
                <span>{currentContent.subtitle}</span>
              </h3>
              {/* </TextFadeUp> */}

              {/* 2-Column Points Grid */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2 rightsidecolumnlinee"> */}
              <div className="">
                {currentContent.points.map((point, index) => (
                  <div key={index}>
                    {/* <TextFadeUp delay={index * 0.1}> */}
                    <div className=" border-[#004852]/15 pb-3 flex items-start space-x-2 lastborderr">
                      <span className="blackcolor paratext !text-[20px]">
                        •
                      </span>

                      <p className="blackcolor paratext">{point}</p>
                    </div>
                    {/* </TextFadeUp> */}
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
