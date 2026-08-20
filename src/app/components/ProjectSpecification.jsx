"use client";

import { useState } from "react";
import Image from "next/image";
import { BrochureButton } from "./CtaButtons";

export default function ProjectSpecifications() {
  const [activeTab, setActiveTab] = useState("WATER");

  const specsData = {
    WATER: {
      title: "WATER",
      subtitle: "SPECIFICATIONS",
      image: "/images/specification.jpg",
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
      image: "/images/specification.jpg",
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
      image: "/images/specification.jpg",
      points: [
        "Internal Walls: Superior wall putty with acrylic emulsion paint",
        "External Walls: Plaster finish with weather shield exterior emulsion",
      ],
    },

    STRUCTURE: {
      title: "STRUCTURE",
      subtitle: "SPECIFICATIONS",
      image: "/images/specification.jpg",
      points: [
        "Ground + two levels RCC structure",
        "Covered car park in ground floor",
      ],
    },

    PLASTERING: {
      title: "PLASTERING",
      subtitle: "SPECIFICATIONS",
      image: "/images/specification.jpg",
      points: [
        "Internal & Ceiling: 12 mm thick double coat cement plaster with smooth finish",
        "External: 18 mm thick double coat cement plaster",
      ],
    },
  };

  const tabs = ["WATER", "KITCHEN", "PAINTING", "STRUCTURE", "PLASTERING"];
  const currentContent = specsData[activeTab];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0] !pb-10">
      <div className="container max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-7xl mb-12">
          <p className="subheadingtext uppercase blackcolor">SPECIFICATIONS</p>
          <h2 className="mainheading indicocolor uppercase">
            PROJECT{" "}
            <strong className="font-extrabold text-[#004852]">
              SPECIFICATIONS
            </strong>
          </h2>
          <p className="blackcolor paratext mt-[10px] breakremove">
            Detailed specifications highlighting construction quality,
            infrastructure standards and <br /> thoughtfully planned development
            features throughout the project.
          </p>
        </div>

        {/* Specs Box Container */}
        <div className="w-full bg-[#E7DEC0]/60 border border-[#004852]/15 rounded-3xl p-6 sm:p-8 md:p-10 mobileprojectttcsss">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center projectsectificationscontain">
            {/* Left Vertical Tabs */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 mobileeedisplayslider ">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`waterspec px-3 py-3.5 rounded-xl  semibold addressstyle uppercase transition-all duration-300 text-center whitespace-nowrap cursor-pointer ${
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
              <img
                className="h-[100%] rounded-[10px] object-cover"
                src={currentContent.image}
                alt={currentContent.title}
              />
            </div>

            {/* Right Specifications Details Grid */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <h3 className="subheadingtext uppercase blackcolor">
                <strong className="greencolor">{currentContent.title}</strong>{" "}
                <span className="">{currentContent.subtitle}</span>
              </h3>

              {/* 2-Column Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2 rightsidecolumnlinee">
                {currentContent.points.map((point, index) => (
                  <div
                    key={index}
                    className="border-b border-[#004852]/15 pb-3 flex items-start space-x-2 lastborderr"
                  >
                    <span className="blackcolor paratext !text-[20px] ">•</span>
                    <p className="blackcolor paratext ">{point}</p>
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
