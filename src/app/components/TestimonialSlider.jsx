// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { TextFadeDown, TextFadeUp } from "./TextFadeUp";

// export default function TestimonialSlider() {
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);

//   const slider1 = useRef(null);
//   const slider2 = useRef(null);

//   useEffect(() => {
//     setNav1(slider1.current);
//     setNav2(slider2.current);
//   }, []);

//   const testimonials = [
//     {
//       id: 8,
//       quote:
//         "Kolapakkam. It’s a very nice locality which is nearby School 6, ATM, and supermarket. It is 4 kilometers to Porur, and at the street end, Ajith Bus Stop is just at a walkable distance. Nearby temple and all facilities.",
//       name: "Suresh Venkatraman",
//       designation: "Home Owner",
//       image: "/images/testimonials/SureshVenkatraman.png",
//       youtubeUrl: "#",
//     },

//     {
//       id: 6,
//       quote:
//         "Kolapakkam. Kolapakkam is a very nice and beautiful locality. All basic amenities like hospitals, schools, colleges, and markets are available nearby.",
//       name: "V Saravanan",
//       designation: "Home Owner",
//       image: "/images/testimonials/VSaravanan.png",
//       youtubeUrl: "#",
//     },
//     {
//       id: 1,
//       quote:
//         "The society has good connectivity, with auto rickshaws and buses readily available on time. Residents do not have to travel far to access these. The society's construction quality is good, with no issues of leakage or seepage anywhere. Security is also excellent; the building is very strong with no cracks, and the guards remain active at all times.",
//       name: "Rajeswari Ashok",
//       designation: "Home Owner",
//       image: "/images/testimonials/RajeswariAshok.png",
//       youtubeUrl: "#",
//     },

//     {
//       id: 3,
//       quote:
//         "Kolapakkam is a good locality. It has good connectivity to supermarket, DLF in 10 minutes, Porur Saravana Stores in 5 minutes and temples.",
//       name: "Yuvan Ponnusamy",
//       designation: "Home Owner",
//       image: "/images/testimonials/YuvanPonnusamy.png",
//       youtubeUrl: "#",
//     },
//     {
//       id: 2,
//       quote:
//         "The people in the society are very pleasant and cooperative. The water facility is excellent, available 24 hours a day. There is also a reliable power backup system in place, which helps during power cuts. Additionally, the construction quality is very good, without any notable issues.",
//       name: "Sagi Suryakeerthi",
//       designation: "Home Owner",
//       image: "/images/testimonials/SagiSuryakeerthi.png",
//       youtubeUrl: "#",
//     },

//     {
//       id: 4,
//       quote:
//         "Just 10 mins Pallavaram Bus stand, just 15 mins Ajith Bus stop, just 10 mins Porur. Omega International School, Krish International School, Pon Vidyashram School, Super Market, Malls and Theater. All the benefits here, this is the hot area of Kolapakkam.",
//       name: "Anand",
//       designation: "Home Owner",
//       image: "/images/testimonials/AnandOne.png",
//       youtubeUrl: "#",
//     },
//     {
//       id: 5,
//       quote:
//         "It is a nice locality. Nearby Omega International School, metro station, and near Porur Saravana Store.",
//       name: "M Siva",
//       designation: "Home Owner",
//       image: "/images/testimonials/MSiva.png",
//       youtubeUrl: "#",
//     },

//     {
//       id: 7,
//       quote:
//         "Nice locality. This locality is near Omega School. Park facility is available on the campus.",
//       name: "Ravichandran Shanmugam",
//       designation: "Home Owner",
//       image: "/images/testimonials/RavichandranShanmugam.png",
//       youtubeUrl: "#",
//     },

//     {
//       id: 9,
//       quote:
//         "Nice locality. Kundrathur is near the Kolapakkam locality. This is a nice locality.",
//       name: "Madhan Mayan",
//       designation: "Home Owner",
//       image: "/images/testimonials/MadhanMayan.png",
//       youtubeUrl: "#",
//     },

//     {
//       id: 10,
//       quote:
//         "Very calm, secured, clean... Very calm, secured, clean air and water. Very good schools and neighborhood. Close to Porur junction.",
//       name: "Anand",
//       designation: "Home Owner",
//       image: "/images/testimonials/AnandOne.png",
//       youtubeUrl: "#",
//     },
//   ];

//   const navSettings = {
//     slidesToShow: 3,
//     swipeToSlide: true,
//     focusOnSelect: true,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: false,
//     centerMode: true,
//     centerPadding: "0px",
//   };

//   const mainSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: false,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <section className="relative w-full bg-[#f4f3e8] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden testimonialsection">
//       <div className="container max-w-7xl mx-auto">
//         <TextFadeUp delay={0.15} direction="left">
//           <p className="subheadingtext uppercase blackcolor">
//             HOMEOWNERS SHARE THEIR
//           </p>
//         </TextFadeUp>

//         <TextFadeUp delay={0.15} direction="left">
//           <h2 className="fifththheading greencolor uppercase">
//             Warm<span className="thinfont blackcolor"> Experince</span>
//           </h2>
//         </TextFadeUp>

//         <TextFadeUp delay={0.15} direction="left">
//           <p className="builtontrustpara blackcolor mt-[15px] breakremove">
//             Feedback from homeowners reflecting trust, quality development, and
//             long-term value experienced <br /> across every Mother Mira project
//           </p>
//         </TextFadeUp>

//         <TextFadeUp delay={0.1}>
//           <div className="tesimonialslidersection">
//             {/* LEFT COLUMN */}
//             <div className="p-3 rounded-3xl border border-[#0c3835]/10 flex flex-col justify-center imagetestisection1">
//               <Slider
//                 asNavFor={nav1}
//                 ref={slider2}
//                 {...navSettings}
//                 className="testimonial-thumb-slider"
//               >
//                 {testimonials.map((item) => (
//                   <div
//                     key={item.id}
//                     className="py-0 px-0 outline-none cursor-pointer"
//                   >
//                     <div className="relative w-full imagesizetes rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 thumbnail-card">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="imagetestisection2">
//               <div className="rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-[#0c3835]/10 relative borddrerer">
//                 <Slider
//                   asNavFor={nav2}
//                   ref={slider1}
//                   {...mainSettings}
//                   className="testimonial-main-slider"
//                 >
//                   {testimonials.map((item) => (
//                     <div key={item.id} className="outline-none">
//                       <div className="min-h-[220px] flex flex-col justify-between  testimonilaaaanewsec">
//                         <h3 className="testimonialcontent semibold greencolor">
//                           {item.quote}
//                         </h3>

//                         <div className="pt-6 pb-6 border-b border-dashed border-[#0c3835]/40 flex items-center justify-between bordderbottomtestimonail">
//                           <div>
//                             <h4 className="twentyfourpixel paratext blackcolor semibold">
//                               {item.name}
//                             </h4>
//                             <p className="builtontrustpara  blackcolor paratext mt-[4px] !text-[#8A8A8A]">
//                               {item.designation}
//                             </p>
//                           </div>

//                           {/* <a
//                             href={item.youtubeUrl}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="inline-flex items-center justify-center text-white hover:scale-105 transition-transform atagg"
//                           >
//                             <img
//                               src="/images/icons/youtubesvg.svg"
//                               className="w-[80px] h-[50px]"
//                               alt=""
//                             />
//                           </a> */}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </TextFadeUp>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TextFadeDown, TextFadeUp } from "./TextFadeUp";

// Helper component to render stars
// const StarRating = ({ rating = 5 }) => {
//   return (
//     <div className="flex items-center space-x-1 mb-3">
//       {[...Array(5)].map((_, index) => {
//         const starValue = index + 1;
//         return (
//           <svg
//             key={index}
//             className={`w-7 h-7 ${
//               starValue <= rating
//                 ? "text-yellow-400 fill-yellow-400"
//                 : "text-gray-300 fill-gray-300"
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//         );
//       })}
//     </div>
//   );
// };
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center space-x-1 mb-3">
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;

        const fillPercentage = Math.max(0, Math.min(1, rating - index)) * 100;
        const gradientId = `star-gradient-${index}-${rating}`;

        return (
          <svg
            key={index}
            className="w-7 h-7 mr-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillPercentage}%`} stopColor="#facc15" />{" "}
                {/* yellow-400 */}
                <stop offset={`${fillPercentage}%`} stopColor="#d1d5db" />{" "}
                {/* gray-300 */}
              </linearGradient>
            </defs>
            <path
              fill={`url(#${gradientId})`}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      })}
    </div>
  );
};

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
      id: 8,
      quote:
        "Kolapakkam. It’s a very nice locality which is nearby Schools, ATM's, and Supermarkets. It is 4 kilometers to Porur, and at the street end, Ajith Bus Stop is just at a walkable distance. Nearby temple and all facilities.",
      name: "Suresh Venkatraman",
      designation: "Home Owner",
      rating: 4.7,
      image: "/images/testimonials/SureshVenkatraman.png",
      youtubeUrl: "#",
    },
    {
      id: 6,
      quote:
        "Kolapakkam is a very nice and beautiful locality. All basic amenities like hospitals, schools, colleges, and markets are available nearby.",
      name: "V.Saravanan",
      designation: "Home Owner",
      rating: 4.5,
      image: "/images/testimonials/VSaravanan.png",
      youtubeUrl: "#",
    },
    {
      id: 1,
      quote:
        "The society has good connectivity, with auto rickshaws and buses readily available on time. Residents do not have to travel far to access these. The society's construction quality is good, with no issues of leakage or seepage anywhere. Security is also excellent; the building is very strong with no cracks, and the guards remain active at all times.",
      name: "Rajeswari Ashok",
      designation: "Home Owner",
      rating: 4.7,
      image: "/images/testimonials/RajeswariAshok.png",
      youtubeUrl: "#",
    },
    {
      id: 3,
      quote:
        "Kolapakkam is a good locality. It has good connectivity to supermarket, DLF in 10 minutes, Porur Saravana Stores in 5 minutes and temples.",
      name: "Yuvan Ponnusamy",
      designation: "Home Owner",
      rating: 4.5,
      image: "/images/testimonials/YuvanPonnusamy.png",
      youtubeUrl: "#",
    },
    {
      id: 2,
      quote:
        "The people in the society are very pleasant and cooperative. The water facility is excellent, available 24 hours a day. There is also a reliable power backup system in place, which helps during power cuts. Additionally, the construction quality is very good, without any notable issues.",
      name: "Sagi Suryakeerthi",
      designation: "Home Owner",
      rating: 4.9,
      image: "/images/testimonials/SagiSuryakeerthi.png",
      youtubeUrl: "#",
    },
    {
      id: 4,
      quote:
        "Just 10 minutes from Pallavaram and 10 minutes from Porur. Omega International School, Krish International School, Pon Vidyashram School, Super Market, Malls and Theater. All the benefits here, this is the hot area of Kolapakkam.",
      name: "Anand",
      designation: "Home Owner",
      rating: 4.6,
      image: "/images/testimonials/AnandOne.png",
      youtubeUrl: "#",
    },
    {
      id: 5,
      quote:
        "It is a nice locality. Nearby Omega International School, metro station, and near Porur Saravana Store.",
      name: "M.Siva",
      designation: "Home Owner",
      rating: 4.8,
      image: "/images/testimonials/MSiva.png",
      youtubeUrl: "#",
    },
    {
      id: 7,
      quote:
        "Nice locality. This locality is near Omega School. Park facility is available on the campus.",
      name: "Ravichandran Shanmugam",
      designation: "Home Owner",
      rating: 5,
      image: "/images/testimonials/RavichandranShanmugam.png",
      youtubeUrl: "#",
    },
    {
      id: 9,
      quote:
        "Nice locality. Kundrathur is near the Kolapakkam locality. This is a nice locality.",
      name: "Madhan Mayan",
      designation: "Home Owner",
      rating: 4.9,
      image: "/images/testimonials/MadhanMayan.png",
      youtubeUrl: "#",
    },
    {
      id: 10,
      quote:
        "Very calm, secured, clean... Very calm, secured, clean air and water. Very good schools and neighborhood. Close to Porur junction.",
      name: "Anand",
      designation: "Home Owner",
      rating: 4.8,
      image: "/images/testimonials/AnandOne.png",
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
        <TextFadeUp delay={0.15} direction="left">
          <p className="subheadingtext uppercase blackcolor homeownerstext">
            HOMEOWNERS SHARE THEIR
          </p>
        </TextFadeUp>

        <TextFadeUp delay={0.15} direction="left">
          <h2 className="fifththheading greencolor uppercase">
            Warm<span className="thinfont blackcolor"> Experience</span>
          </h2>
        </TextFadeUp>

        <TextFadeUp delay={0.15} direction="left">
          <p className="builtontrustpara blackcolor mt-[15px] breakremove">
            Feedback from homeowners reflecting trust, quality development, and
            long-term value experienced <br /> across every Mother Mira project
          </p>
        </TextFadeUp>

        <TextFadeUp delay={0.1}>
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
                      <div className="flex ietemratingggg">
                        <p>
                          <span> {item.rating}</span> / 5
                        </p>
                        <StarRating rating={item.rating} />
                      </div>
                      <div className="min-h-[220px] flex flex-col justify-between testimonilaaaanewsec">
                        <div>
                          <h3 className="testimonialcontent semibold greencolor">
                            {item.quote}
                          </h3>
                        </div>

                        <div className="pt-6 pb-6 border-b border-dashed border-[#0c3835]/40 flex items-center justify-between bordderbottomtestimonail">
                          <div>
                            <h4 className="twentyfourpixel paratext blackcolor semibold">
                              {item.name}
                            </h4>
                            <p className="builtontrustpara blackcolor paratext mt-[4px] !text-[#8A8A8A]">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </TextFadeUp>
      </div>
    </section>
  );
}
