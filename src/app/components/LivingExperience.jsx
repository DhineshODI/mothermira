"use client";

import React, { useRef, useEffect } from "react";
import { TextFadeUp } from "./TextFadeUp";

export default function LivingExperienceBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full flex items-end justify-center px-4 overflow-hidden videosectionz">
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* DARK & GRADIENT OVERLAY (Text readability-kaaga) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#EDE8D080" }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" /> */}

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 container max-w-7xl mx-auto text-center flex flex-col items-center videobanenrrcontent">
        {/* SUBTITLE */}

        <TextFadeUp delay={0.6}>
          <p className=" mb-2  uppercase blackcolor paragraphfont subheadingtext">
            CONNECT WITH US FOR THE BEST
          </p>
        </TextFadeUp>

        {/* MAIN BOLD TITLE */}

        <TextFadeUp delay={0.8}>
          <h2 className="hunderpixel greencolor uppercase mb-8">
            <strong>LIVING EXPERIENCE </strong>
          </h2>
        </TextFadeUp>

        {/* PILL BUTTON */}
             <TextFadeUp delay={0.9}> 
        <div
          className="inline-flex items-center gap-3 bg-[#EDE8D0] builtontrustpara semibold greencolor px-14 py-2.5 rounded-[15px]"
          style={{ boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.35)" }}
        >
          <a
            href="#"
            className="relative inline-block after:absolute after:left-0 after:-bottom-[0px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
          >
            ENQUIRE NOW
          </a>

          <span className="greencolor boldfont">|</span>

          <a
            href="#"
            className="relative inline-block after:absolute after:left-0 after:-bottom-[0px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
          >
            BOOK A SITE VISIT
          </a>
        </div>
        </TextFadeUp>
      </div>
    </section>
  );
}
