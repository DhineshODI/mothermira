"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  StaggerText,
  TextFadeHorizontal,
  TextFadeUp,
  FlipRight,
  FlipLeft,
  TextFadeLeft,
  TextFadeDown,
} from "../components/TextFadeUp";

gsap.registerPlugin(ScrollTrigger);

function AmenitiesCategoryGrid({ categoryData, sliderRef }) {
  const settings = {
    dots: false,
    infinite: categoryData.length > 2,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {categoryData.map((item, index) => (
          <div key={`${item.title}-${index}`} className="px-2">
            <div className="relative group sliderrimagesectionnn h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
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

  const sliderRef = useRef(null);

  const amenitiesData = {
    SECURITY: [
      {
        title: "Security Personnel at Main Entrance",
        image:
          "/images/project-detail/aminites/Security/security_personnel_at_main_entrance.jpg",
      },
      {
        title: "CCTV Surveillance",
        image: "/images/project-detail/aminites/Security/cctv_surveillance.jpg",
      },
      {
        title: "Video Door Phone",
        image: "/images/project-detail/aminites/Security/video_door_phone.jpg",
      },
      // {
      //   title: "Covered Car Park",
      //   image: "/images/project-detail/aminites/Security/covered_car_park.jpg",
      // },
    ],

    // "CLUBHOUSE & RECREATION": [
    //   {
    //     title: "Multi Purpose Hall",
    //     image:
    //       "/images/project-detail/aminites/Clubhouse/multi_purpose_hall_with_100_seating.jpg",
    //   },
    //   {
    //     title: "Mini Theater",
    //     image:
    //       "/images/project-detail/aminites/Clubhouse/mini_theater_with_50_seating.jpg",
    //   },
    //   {
    //     title: "Rooftop Party Area",
    //     image:
    //       "/images/project-detail/aminites/Clubhouse/party_roof_garden_in_club_house.jpg",
    //   },
    //   {
    //     title: "Separate Restroom for Domestic Staff",
    //     image:
    //       "/images/project-detail/aminites/Clubhouse/separate_restroom_for_domestic_staff_and_drivers.jpg",
    //   },
    //   {
    //     title: "Swimming Pool",
    //     image: "/images/project-detail/aminites/Recreation/swimming_pool.jpg",
    //   },
    //   {
    //     title: "Equipped Modern Gymnasium",
    //     image:
    //       "/images/project-detail/aminites/Recreation/equipped_modern_gymnasium.jpg",
    //   },

    //   {
    //     title: "Indoor Games (Table Tennis & Pool)",
    //     image:
    //       "/images/project-detail/aminites/Recreation/indoor_games_–_table_tennis_&_pool_table.jpg",
    //   },
    //   {
    //     title: "Children's Play Area",
    //     image:
    //       "/images/project-detail/aminites/Landscape/children’s_play_area.jpg",
    //   },

    //   {
    //     title: "Yoga Hall",
    //     image: "/images/project-detail/aminites/Clubhouse/yoga-hall.jpg",
    //   },

    //   {
    //     title: "Barbecue",
    //     image: "/images/project-detail/aminites/Clubhouse/barbecue.jpg",
    //   },
    // ],

    // "CLUBHOUSE & RECREATION": [
    //   {
    //     title: "Barbecue",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/barbeque-counterr.jpg",
    //   },
    //   {
    //     title: "Gymnasium",
    //     image: "/images/project-detail/aminites/clubhouse-new/gymnasium.jpg",
    //   },
    //   {
    //     title: "Hydro Pneumatic Water Supply System",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/hydro-pneumatic-water-supply-systemwtp.jpg",
    //   },
    //   {
    //     title: "Indoor Games",
    //     image: "/images/project-detail/aminites/clubhouse-new/indoor-games.jpg",
    //   },
    //   {
    //     title: "Mini Theater",
    //     image: "/images/project-detail/aminites/clubhouse-new/mini-theater.jpg",
    //   },
    //   {
    //     title: "Mood Landscape Lighting",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/mood-landscape-lighting.jpg",
    //   },
    //   {
    //     title: "Multi Purpose Games Area For Kids & Adults",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/multi-purpose-games-area-for-kids-adult.jpg",
    //   },
    //   {
    //     title: "Multi Purpose Hall",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/multi-purpose-hall.jpg",
    //   },
    //   {
    //     title: "Multi Purpose Stimulation Area",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/multi-purpose-stimulation-area.jpg",
    //   },
    //   {
    //     title: "Outdoor Dining Counter",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/outdoor-dining-counter.jpg",
    //   },
    //   {
    //     title: "Party Roof Terrace",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/party-roof-terrace.jpg",
    //   },
    //   {
    //     title: "Power Back Up In Club House",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/Power-back-up-in-club-house.jpg",
    //   },
    //   {
    //     title: "Premium Lounge Seating",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/premium-lounge-seating.jpg",
    //   },
    //   {
    //     title: "Swimming Pool",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/swimming-pool.jpg",
    //   },
    //   {
    //     title: "Vertical Garden",
    //     image:
    //       "/images/project-detail/aminites/clubhouse-new/vertical-garden.jpg",
    //   },
    //   {
    //     title: "Yoga Hall",
    //     image: "/images/project-detail/aminites/clubhouse-new/yoga.jpg",
    //   },
    // ],
    RECREATION: [],

    LANDSCAPE: [
      {
        title: "Landscaped Garden",
        image:
          "/images/project-detail/aminites/Landscape/creatively_landscaped_garden.jpg",
      },
      {
        title: "Fully Landscaped OSR Park",
        image:
          "/images/project-detail/aminites/Landscape/fully_landscaped_osr_park.jpg",
      },
    ],

    INFRASTRUCTURE: [
      {
        title: "Rain Water Harvesting",
        image:
          "/images/project-detail/aminites/Infrastructure/rain_water_harvesting.jpg",
      },
      {
        title: "STP (Sewage Treatment Plant)",
        image: "/images/project-detail/aminites/Infrastructure/stp.jpg",
      },
      {
        title: "WTP (Water Treatment Plant)",
        image: "/images/project-detail/aminites/Infrastructure/wtp.jpg",
      },
      {
        title: "Hydro Pneumatic Water Supply System",
        image:
          "/images/project-detail/aminites/Infrastructure/hydro_pneumatic_water_supply_system.jpg",
      },
      {
        title: "Power Back-up in Club House",
        image:
          "/images/project-detail/aminites/Convenience/power_back_up_in_club_house.jpg",
      },

      {
        title: "Paved Roads with Street Lights",
        image:
          "/images/project-detail/aminites/Landscape/concrete_paved_roads_with_street_lights.jpg",
      },
    ],

    // CONVENIENCE: [
    //   {
    //     title: "Power Back-up in Club House",
    //     image:
    //       "/images/project-detail/aminites/Convenience/power_back_up_in_club_house.jpg",
    //   },
    // ],
  };
  const categories = [
    "SECURITY",
    "CLUBHOUSE & RECREATION",
    // "RECREATION",
    "LANDSCAPE",
    "INFRASTRUCTURE",
    // "CONVENIENCE",
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0] !pb-0  aminitessssectionnbg">
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
        <div className="flex flex-wrap justify-center gap-3 mb-17 mobileeedisplayslider">
          {categories.map((cat, index) => (
            <TextFadeUp key={cat} delay={0.1 + index * 0.12}>
              <button
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
            </TextFadeUp>
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
