"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

function AmenitiesCategoryGrid({ categoryData, sliderRef }) {
  const settings = {
    dots: false,
    infinite: categoryData.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {categoryData.map((item, index) => (
          <div key={`${item.title}-${index}`} className="px-2">
            <div className="relative group sliderrimagesectionnn h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              {/* Background Image */}
              {item.image &&
                item.image !== "/images/project-detail/aminites/" && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Card Label */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="paratext text-white text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default function AmenitiesSection() {
  const [activeCategory, setActiveCategory] = useState("SECURITY");

  // IMPORTANT: ref must be inside the component
  const sliderRef = useRef(null);

  const amenitiesData = {
    SECURITY: [
      {
        title: "Security Personnel at Main Entrance",
        image: "/images/project-detail/aminites/security.jpg",
      },
      {
        title: "CCTV Surveillance",
        image: "/images/project-detail/aminites/cctv.jpg",
      },
      {
        title: "Video Door Phone",
        image: "/images/project-detail/aminites/videocall.jpg",
      },
      {
        title: "Security Personnel at Main Entrance",
        image: "/images/project-detail/aminites/security.jpg",
      },
      {
        title: "CCTV Surveillance",
        image: "/images/project-detail/aminites/cctv.jpg",
      },
      {
        title: "Video Door Phone",
        image: "/images/project-detail/aminites/videocall.jpg",
      },
    ],

    CLUBHOUSE: [
      {
        title: "Multipurpose Hall",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Gymnasium & Fitness Center",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Swimming Pool",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Multipurpose Hall",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Gymnasium & Fitness Center",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Swimming Pool",
        image: "/images/project-detail/aminites/",
      },
    ],

    RECREATION: [
      {
        title: "Children Play Area",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Badminton Court",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Amphitheatre",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Children Play Area",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Badminton Court",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Amphitheatre",
        image: "/images/project-detail/aminites/",
      },
    ],

    LANDSCAPE: [
      {
        title: "Landscaped Gardens",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Senior Citizen Park",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Reflexology Pathway",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Landscaped Gardens",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Senior Citizen Park",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Reflexology Pathway",
        image: "/images/project-detail/aminites/",
      },
    ],

    INFRASTRUCTURE: [
      {
        title: "100% Power Backup",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Rainwater Harvesting",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "EV Charging Stations",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "100% Power Backup",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Rainwater Harvesting",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "EV Charging Stations",
        image: "/images/project-detail/aminites/",
      },
    ],

    CONVENIENCE: [
      {
        title: "Supermarket / Grocery Store",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Pharmacy Facility",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Visitor Parking",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Supermarket / Grocery Store",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Pharmacy Facility",
        image: "/images/project-detail/aminites/",
      },
      {
        title: "Visitor Parking",
        image: "/images/project-detail/aminites/",
      },
    ],
  };

  const categories = [
    "SECURITY",
    "CLUBHOUSE",
    "RECREATION",
    "LANDSCAPE",
    "INFRASTRUCTURE",
    "CONVENIENCE",
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0] !pb-0">
      <div className="container max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Area */}
        <div className="text-center max-w-7xl mb-17">
          <p className="subheadingtext uppercase blackcolor">AMENITIES</p>

          <h2 className="mainheading indicocolor uppercase">
            <strong className="font-extrabold text-[#004852]">LEISURE </strong>
            BEYOND LIMITS
          </h2>

          <p className="blackcolor paratext mt-[10px]">
            Modern amenities aesthetically planned to support comfortable
            living, community <br />
            interaction, recreation, wellness, and everyday convenience.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-17">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);

                setTimeout(() => {
                  sliderRef.current?.slickGoTo(0);
                }, 0);
              }}
              className={`px-8 py-1.5 rounded-full paratext uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#004852] text-[#EDE8D0] shadow-md semibold"
                  : "bg-[#E7DEC0] text-[#1f2933] hover:bg-[#E2DCC6] border border-[#1616163D]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Slider */}
        <AmenitiesCategoryGrid
          categoryData={amenitiesData[activeCategory] || []}
          sliderRef={sliderRef}
        />

        {/* Carousel Navigation */}
        <div className="flex items-center space-x-3 mt-10">
          {/* Previous */}
          <button
            aria-label="Previous"
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 butttonssssss rounded-full border border-[#004852]/40 flex items-center justify-center text-[#004852] hover:bg-[#004852] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.96094 0.959961L0.960938 8.95996L8.96094 16.96"
                stroke="currentColor"
                strokeWidth="1.92"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9609 8.95996H0.960938"
                stroke="currentColor"
                strokeWidth="1.92"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next */}
          <button
            aria-label="Next"
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12  butttonssssss rounded-full border border-[#004852]/40 flex items-center justify-center text-[#004852] hover:bg-[#004852] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.96094 16.96L16.9609 8.95996L8.96094 0.959961"
                stroke="currentColor"
                strokeWidth="1.92"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.960938 8.95996H16.9609"
                stroke="currentColor"
                strokeWidth="1.92"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
