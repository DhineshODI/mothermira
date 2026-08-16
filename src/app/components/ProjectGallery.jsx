"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState("EXTERIOR");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryData = {
    EXTERIOR: [
      {
        id: 1,
        src: "/images/project-detail/gallery/gallery-1.jpg",
        alt: "Aerial View of Villa Project",
      },
      {
        id: 2,
        src: "/images/project-detail/gallery/gallery-2.jpg",
        alt: "Modern Villa Side Facade",
      },
      {
        id: 3,
        src: "/images/project-detail/gallery/gallery-3.jpg",
        alt: "Villa Street View Elevation",
      },
      {
        id: 4,
        src: "/images/project-detail/gallery/gallery-4.jpg",
        alt: "Independent Villa Front View",
      },
      {
        id: 5,
        src: "/images/project-detail/gallery/gallery-5.jpg",
        alt: "Row Villas Evening View",
      },
      {
        id: 6,
        src: "/images/project-detail/gallery/gallery-1.jpg",
        alt: "Luxury Villa Front Entrance",
      },
      {
        id: 7,
        src: "/images/project-detail/gallery/gallery-2.jpg",
        alt: "Master Plan Aerial Snapshot",
      },
      {
        id: 8,
        src: "/images/project-detail/gallery/gallery-3.jpg",
        alt: "Villa Architectural Detail",
      },
    ],
    INTERIOR: [
      {
        id: 1,
        src: "/images/project-detail/gallery/gallery-1.jpg",
        alt: "Living Room Interior",
      },
      {
        id: 2,
        src: "/images/project-detail/gallery/gallery-2.jpg",
        alt: "Modular Kitchen Design",
      },
      {
        id: 3,
        src: "/images/project-detail/gallery/gallery-3.jpg",
        alt: "Master Bedroom Layout",
      },
      {
        id: 4,
        src: "/images/project-detail/gallery/gallery-4.jpg",
        alt: "Modern Bathroom Fittings",
      },
    ],
    "FLOOR PLANS": [
      {
        id: 1,
        src: "/images/project-detail/gallery/gallery-1.jpg",
        alt: "3 BHK Villa Ground Floor Plan",
      },
      {
        id: 2,
        src: "/images/project-detail/gallery/gallery-2.jpg",
        alt: "3 BHK Villa First Floor Plan",
      },
      {
        id: 3,
        src: "/images/project-detail/gallery/gallery-3.jpg",
        alt: "4 BHK Villa Floor Plan",
      },
    ],
  };

  const tabs = ["EXTERIOR", "INTERIOR", "FLOOR PLANS"];
  const currentImages = galleryData[activeTab] || [];

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1,
    );
  }, [currentImages.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1,
    );
  }, [currentImages.length]);

  // Keyboard navigation for Lightbox (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0]">
      <div className="container max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-7xl mb-10">
          <p className="subheadingtext uppercase blackcolor">GALLERY</p>
          <h2 className="mainheading indicocolor uppercase">
            PROJECT <strong className="greencolor">VISUALS</strong>
          </h2>
          <p className="blackcolor paratext mt-[10px]">
            Take a closer look at the community spaces, modern amenities,
            infrastructure <br /> planning, and peaceful residential environment
            offered.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-17">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                className={`px-8 py-1.5 rounded-full paratext uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#004852] text-[#EDE8D0] shadow-md semibold"
                    : "bg-[#E7DEC0] text-[#1f2933] hover:bg-[#E2DCC6] border border-[#1616163D]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full projectgallerysectionsa">
          {currentImages.map((img, index) => (
            <div
              key={img.id || index}
              onClick={() => setLightboxIndex(index)}
              className="relative sliderrimagesectionnn group h-[280px] sm:h-[280px] rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-[#004852]/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 h-[100%] w-[100%]"
              />
              {/* Subtle hover overlay with expand icon */}
              <div className="absolute inset-0 bg-[#004852]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/80 text-[#004852]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer z-50"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer z-50"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Main Expanded Image */}
          <div className="relative max-w-4xl w-full max-h-[80vh] h-[75vh] flex flex-col items-center justify-center">
            <Image
              src={currentImages[lightboxIndex].src}
              alt={currentImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer z-50"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Caption & Counter */}
          <div className="absolute bottom-6 text-center text-white/90 text-sm font-medium">
            <p>{currentImages[lightboxIndex].alt}</p>
            <span className="text-xs text-white/60 mt-1 inline-block">
              {lightboxIndex + 1} / {currentImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
