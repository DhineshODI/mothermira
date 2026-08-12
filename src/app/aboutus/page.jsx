"use client";
import { useRef, React } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StaggerText, TextFadeUp } from "../components/TextFadeUp";
import Header from "../components/Header";
import LivingExperienceBanner from "../components/LivingExperience";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const strengths = [
    {
      title: "INFRASTRUCTURE",
      desc: "Well-planned layouts and essential infrastructure",
      highlighted: true,
      icon: "/images/icons/Infrastructure.svg",
    },
    {
      title: "QUALITY",
      desc: "Superior material and construction standards",
      highlighted: false,
      icon: "/images/icons/Quality.svg",
    },
    {
      title: "VALUE",
      desc: "Strategic locations for long-term growth",
      highlighted: false,
      icon: "/images/icons/Value.svg",
    },
    {
      title: "CUSTOMER SATISFACTION",
      desc: "Transparent process and legal clarity",
      highlighted: false,
      icon: "/images/icons/CustomerSatisfaction.svg",
    },
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
    <>
      <Header bgcolor={"#ece6cf"} />
      <section className="relative w-full min-h-[900px] max-h-[800px] overflow-hidden flex flex-col items-center justify-between">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src="/images/aboutusbg.jpg"
            alt="Talk to our team"
            className="object-cover object-center"
          />
        </div>

        <div className="pt-36 sm:pt-30 text-center z-10 px-4">
          <h1 className="mainheading indicocolor">
            The Mother Mira<strong className="greencolor"> Legacy</strong>
          </h1>
        </div>
      </section>

      <section className="relative w-full h-[1550px] py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-start overflow-hidden aboumiraaboutsection">
        {/* 1. Master Layout Aerial Background Image */}
        <div className="absolute inset-0 -z-10 w-full h-full aboutmiraimagepositionn">
          <img src="/images/aboumothermirasec.jpg" alt="" />
        </div>

        {/* 4. Content Area */}
        <div className="z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          {/* Title */}
          <h2 className="secondheading greencolor">
            ABOUT <strong> MOTHER MIRA </strong>
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-6 max-w-4xl">
            <p className="blackcolor paratext ">
              Mother Mira Industries Limited (MMIL) was established in Chennai
              in 1994 as a diversified enterprise with long-term asset
              interests. Over the past decade, the company has built a focused
              presence in Chennai&apos;s real estate market, developing villa
              and plotted projects in strategic locations positioned for
              long-term appreciation across emerging growth corridors.
            </p>

            <p className="blackcolor paratext ">
              Our developments begin with strategic land selection in areas
              supported by infrastructure growth, connectivity, and clear
              development fundamentals. Every project is backed by clear title
              and regulatory compliance before execution.
            </p>

            <p className="blackcolor paratext ">
              With strong emphasis on construction quality, material standards,
              and structured planning, our communities are built for durability,
              legal strength, and long-term asset value.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative w-full min-h-[1000px] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden missionsecid"
      >
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src="/images/aboutsectionmission.jpg"
            alt="Mother Mira Vision Background"
          />
        </div>

        {/* <TextFadeUp delay={0.1}> */}

        <StaggerText delay={0.4}>
          <div className="text-center z-10 mb-12 sm:mb-16">
            <h2 className="fifththheading greencolor">Built on Trust Always</h2>
          </div>
        </StaggerText>
        {/* </TextFadeUp> */}

        <div className="z-10 w-full max-w-7xl mx-auto space-y-8">
          <div
            ref={(el) => (rowsRef.current[0] = el)}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
          >
            <div className="md:col-span-4">
              <h3 className="mainheading greencolor uppercase missionclasss">
                OUR <br />
                <strong>VISION </strong>
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="builtontrustpara blackcolor">
                To develop legally compliant, high-quality residential
                communities in strategically growing locations, thoughtfully
                designed to support sustainable living, strong infrastructure,
                long-term asset appreciation, and enduring value for homeowners
                and investors through responsible and disciplined development.
              </p>
            </div>
          </div>

          <hr className="border-t border-[#0c3835]/20 my-6" />

          <div
            ref={(el) => (rowsRef.current[1] = el)}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
          >
            <div className="md:col-span-4">
              <h3 className="mainheading greencolor uppercase missionclasss">
                OUR <br />
                <strong>Mission </strong>
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="builtontrustpara blackcolor">
                Our mission is to execute every development with legal clarity,
                disciplined planning, superior construction standards, and
                transparent processes that ensure customer confidence, safeguard
                long-term value, and deliver reliable, future-ready communities
                built on trust, quality, and responsible development practices.
              </p>
            </div>
          </div>

          <hr className="border-t border-[#0c3835]/20 my-6" />

          <div
            ref={(el) => (rowsRef.current[2] = el)}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
          >
            <div className="md:col-span-4">
              <h3 className="mainheading greencolor uppercase missionclasss">
                OUR <br />
                <strong>Principles </strong>
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="builtontrustpara blackcolor">
                Legal clarity, strong asset selection, quality construction,
                disciplined execution, and long-term value creation define every
                Mother Mira development. We approach each project with
                structured planning to ensure durable assets built for sustained
                appreciation.
              </p>
            </div>
          </div>

          <hr className="border-t border-[#0c3835]/20 my-6" />
        </div>
      </section>

      <section className="relative w-full min-h-[900px] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 flex items-center overflow-hidden bg-[#f4f3e8]">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-10">
          <h1 className="foundersvoicetext">FOUNDER&apos;S VOICE</h1>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-full h-full z-0">
          <img
            src="/images/foundersvoice.jpg"
            alt="Mother Mira Premium Villa"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center landingtextaboutpage">
          <div className="md:col-span-7 lg:col-span-6 space-y-6 apastaphy">
            {/* Label + Quote Icon */}
            <div className="flex items-start space-x-3">
              <span className="foundervoicesubtext greencolor">
                FOUNDER&apos;S VOICE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="webelivepremium indicocolor ">
              WE BELIEVE PREMIUM
              <br />
              LIVING SHOULD ALSO FEEL
            </h2>
            <h2 className="accesssible greencolor">ACCESSIBLE</h2>

            {/* Paragraphs */}
            <div className="space-y-4 max-w-2xl founderwithd">
              <p className="blackcolor paratext ">
                Our developments are guided by a long-term approach to land,
                planning, and community — creating thoughtfully designed spaces
                that balance quality, value, and future growth.
              </p>
              <p className="blackcolor paratext ">
                Backed by strategically held land banks, we focus on building
                premium communities with lasting relevance and strong
                fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#EDE8D0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Title */}
            <div className="mb-[50px]">
              <p className="subheadingtext uppercase blackcolor">
                WHY CHOOSE MOTHER MIRA?
              </p>
              <h2 className="mainheading indicocolor uppercase">
                OUR <strong className="greencolor">STRENGTH</strong>
              </h2>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-7 rounded-2xl flex flex-col justify-between min-h-[190px] bg-[#C9A24B] text-[#0c3835] transition-all duration-500 ease-in-out hover:bg-[#004852] hover:text-white hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  <div>
                    <img
                      src={item.icon}
                      alt=""
                      className="transition-all duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div>
                    <h3 className="foundervoicesubtext mt-[30px] transition-colors duration-500 ease-in-out group-hover:text-white">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="paratext mt-[15px] transition-colors duration-500 ease-in-out text-[#0c3835]/80 group-hover:text-white/90">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="boxcardss group p-6 sm:p-7 rounded-2xl flex flex-col justify-between min-h-[160px] bg-[#C9A24B] text-[#0c3835] transition-all duration-500 ease-in-out hover:bg-[#004852] hover:text-white hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div>
                    <img
                      src={item.icon}
                      alt=""
                      className="transition-all duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div>
                    <h3 className="foundervoicesubtext greencolor mt-[20px] transition-colors duration-500 ease-in-out group-hover:!text-white">
                      {item.title}
                    </h3>

                    {item.desc && (
                      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-[10px] ">
                        <p className="paratext overflow-hidden transition-colors duration-500 ease-in-out text-[#0c3835]/80 group-hover:text-[#EDE8D0]">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Rounded Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end  ">
            <img
              src="/images/about-strength.jpg"
              alt="Mother Mira Villa Street View"
              className="rounded-[15px]"
            />
          </div>
        </div>
      </section>

      <LivingExperienceBanner/>
    </>
  );
}
