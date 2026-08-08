import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const strengths = [
    {
      title: "INFRASTRUCTURE",
      desc: "Well-planned layouts and essential infrastructure",
      highlighted: true,
      // Icon: House on hand / structure
      icon: "/images/icons/Infrastructure.svg",
    },
    {
      title: "QUALITY",
      desc: "Superior material and construction standards",
      highlighted: false,
      // Icon: Diamond / Quality
      icon: "/images/icons/Quality.svg",
    },
    {
      title: "VALUE",
      desc: "Strategic locations for long-term growth",
      highlighted: false,
      // Icon: Chart / Growth
      icon: "/images/icons/Value.svg",
    },
    {
      title: "CUSTOMER SATISFACTION",
      desc: "Transparent process and legal clarity",
      highlighted: false,
      // Icon: Thumbs up with stars
      icon: "/images/icons/CustomerSatisfaction.svg",
    },
  ];
  return (
    <>
      <section className="relative w-full min-h-[900px] max-h-[800px] overflow-hidden flex flex-col items-center justify-between">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/images/aboutusbg.jpg"
            alt="Talk to our team"
            fill
            priority
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

      <section className="relative w-full min-h-[1000px] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden missionsecid">
        {/* 1. Background Image */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src="/images/aboutsectionmission.jpg"
            alt="Mother Mira Vision Background"
          />
        </div>

        {/* 2. Soft Gradient Overlay to match cream theme */}

        {/* 3. Section Title */}
        <div className="text-center z-10 mb-12 sm:mb-16">
          <h2 className="fifththheading greencolor">Built on Trust Always</h2>
        </div>

        {/* 4. Content Grid Rows */}
        <div className="z-10 w-full max-w-7xl mx-auto space-y-8">
          {/* Row 1: OUR VISION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
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

          {/* Row 2: OUR MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
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

          {/* Row 3: OUR PRINCIPLES */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    </>
  );
}
