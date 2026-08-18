"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote:
        "Kolapakkam is a good locality. It has good connectivity to supermarket, DLF in 10 minutes, Porur Saravana Stores in 5 minutes and temples. orur Saravana Stores",
      name: "karthick sundaram",
      designation: "Marketing Manager",
      image: "/images/testimonial1.jpg",
      youtubeUrl: "#",
    },
    {
      id: 2,
      quote:
        "Peaceful environment with excellent groundwater quality and peaceful neighborhood for living with families.",
      name: "SURESH KUMAR",
      designation: "IT Professional",
      image: "/images/testimonial2.jpg",
      youtubeUrl: "#",
    },
    {
      id: 3,
      quote:
        "Very happy with the construction quality and transparent documentation process provided by the developers.",
      name: "PRIYA RAMESH",
      designation: "Home Owner",
      image: "/images/testimonial3.jpg",
      youtubeUrl: "#",
    },
    {
      id: 4,
      quote:
        "Kolapakkam is a good locality. It has good connectivity to supermarket, DLF in 10 minutes, Porur Saravana Stores in 5 minutes and temples.",
      name: "YUVAN PONNUSAMY",
      designation: "Marketing Manager",
      image: "/images/testimonial1.jpg",
      youtubeUrl: "#",
    },
    {
      id: 5,
      quote:
        "Kolapakkam is a good locality. It has good connectivity to supermarket, DLF in 10 minutes, Porur Saravana Stores in 5 minutes and temples.",
      name: "YUVAN PONNUSAMY",
      designation: "Marketing Manager",
      image: "/images/testimonial1.jpg",
      youtubeUrl: "#",
    },
    {
      id: 6,
      quote:
        "Peaceful environment with excellent groundwater quality and peaceful neighborhood for living with families.",
      name: "SURESH KUMAR",
      designation: "IT Professional",
      image: "/images/testimonial2.jpg",
      youtubeUrl: "#",
    },
    {
      id: 7,
      quote:
        "Very happy with the construction quality and transparent documentation process provided by the developers.",
      name: "PRIYA RAMESH",
      designation: "Home Owner",
      image: "/images/testimonial3.jpg",
      youtubeUrl: "#",
    },
    {
      id: 8,
      quote:
        "Kolapakkam is a good locality. It has good connectivity to supermarket, DLF in 10 minutes, Porur Saravana Stores in 5 minutes and temples.",
      name: "YUVAN PONNUSAMY",
      designation: "Marketing Manager",
      image: "/images/testimonial1.jpg",
      youtubeUrl: "#",
    },
  ];

  const navSettings = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <section className="relative w-full bg-[#f4f3e8] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden testimonialsection">
      <div className="container max-w-7xl mx-auto">
        <p className="subheadingtext uppercase blackcolor">
          HOMEOWNERS SHARE THEIR
        </p>

        <h2 className="fifththheading greencolor uppercase">
          Warm<span className="thinfont blackcolor"> Experince</span>
        </h2>

        <p className="builtontrustpara blackcolor mt-[15px] breakremove">
          Feedback from homeowners reflecting trust, quality development, and
          long-term value experienced <br /> across every Mother Mira project
        </p>

        <div className="tesimonialslidersection">
          {/* LEFT COLUMN */}
          <div className="p-3 rounded-3xl border border-[#0c3835]/10 flex flex-col justify-center imagetestisection1">
            <Slider
              asNavFor={nav1}
              ref={slider2}
              {...navSettings}
              className="testimonial-thumb-slider"
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="py-0 px-0 outline-none cursor-pointer"
                >
                  <div className="relative w-full imagesizetes rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 thumbnail-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* RIGHT COLUMN */}
          <div className="imagetestisection2">
            <div className="rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-[#0c3835]/10 relative borddrerer">
              <Slider
                asNavFor={nav2}
                ref={slider1}
                {...mainSettings}
                className="testimonial-main-slider"
              >
                {testimonials.map((item) => (
                  <div key={item.id} className="outline-none">
                    <div className="min-h-[220px] flex flex-col justify-between  testimonilaaaanewsec">
                      <h3 className="testimonialcontent semibold greencolor">
                        {item.quote}
                      </h3>

                      <div className="pt-6 pb-6 border-b border-dashed border-[#0c3835]/40 flex items-center justify-between bordderbottomtestimonail">
                        <div>
                          <h4 className="twentyfourpixel paratext blackcolor semibold">
                            {item.name}
                          </h4>
                          <p className="builtontrustpara  blackcolor paratext mt-[4px] !text-[#8A8A8A]">
                            {item.designation}
                          </p>
                        </div>

                        <a
                          href={item.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center text-white hover:scale-105 transition-transform atagg"
                        >
                          <img
                            src="/images/icons/youtubesvg.svg"
                            className="w-[80px] h-[50px]"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
