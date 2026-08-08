"use client";
import { useState } from "react";
import ProjectSpecifications from "../components/ProjectSpecification";
import AmenitiesSection from "../components/ProjectAminites";
import ProjectGallery from "../components/ProjectGallery";
import ProjectDetailIntro from "../components/ProjectDetailIntro";

export default function ProjectDetailTheWind() {
  const advantages = [
    {
      title: "STRATEGIC CONNECTIVITY",
      desc: "Porur offers seamless access to major corridors through Mount-Poonamallee Road, Chennai Bypass, and upcoming metro connectivity, ensuring faster daily travel across important residential, commercial, and employment destinations.",
    },
    {
      title: "STRONG EMPLOYMENT ACCESS",
      desc: "Close proximity to DLF Cybercity, L&T IT Park, and the Porur IT corridor supports continuous residential demand driven by working professionals and expanding employment opportunities.",
    },
    {
      title: "ESTABLISHED SOCIAL INFRASTRUCTURE",
      desc: "Leading destinations and essential lifestyle conveniences surrounding Porur create a well-developed residential ecosystem supporting comfortable everyday living for everyone.",
    },
    {
      title: "LONG-TERM INVESTMENT POTENTIAL",
      desc: "Rapid infrastructure growth, increasing residential demand, and strategic urban expansion continue strengthening Porur's position as one of Chennai's promising real estate investment destinations.",
    },
  ];

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

  const [activeTab, setActiveTab] = useState("SCHOOLS");

  const locationData = {
    SCHOOLS: [
      { name: "PSBB MILLENNIUM SCHOOL", distance: "0.5 KM", time: "5 MIN" },
      { name: "LITTLE FLOWERS MAT. SCHOOL", distance: "0.6 KM", time: "5 MIN" },
      {
        name: "ST. FRANCIS INTERNATIONAL SCHOOL",
        distance: "0.8 KM",
        time: "5 MIN",
      },
      { name: "OMEGA INTERNATIONAL SCHOOL", distance: "1.0 KM", time: "8 MIN" },
      { name: "PON VIDYASHRAM SCHOOL", distance: "1.5 KM", time: "10 MIN" },
      {
        name: "ORCHID INTERNATIONAL SCHOOL",
        distance: "2 KMS",
        time: "10 MIN",
      },
    ],
    COLLEGES: [
      {
        name: "SRM INSTITUTE OF SCIENCE & TECH",
        distance: "1.2 KM",
        time: "6 MIN",
      },
      {
        name: "RAMACHANDRA MEDICAL COLLEGE",
        distance: "2.5 KM",
        time: "10 MIN",
      },
      {
        name: "MIOT ACADEMY OF ALLIED HEALTH",
        distance: "3.0 KM",
        time: "12 MIN",
      },
      { name: "MOP VAISHNAV COLLEGE", distance: "4.5 KM", time: "15 MIN" },
    ],
    HOSPITALS: [
      {
        name: "SRI RAMACHANDRA MEDICAL CENTRE",
        distance: "2.0 KM",
        time: "8 MIN",
      },
      {
        name: "MIOT INTERNATIONAL HOSPITAL",
        distance: "3.2 KM",
        time: "10 MIN",
      },
      {
        name: "ANNASAMY RAJALAKSHMI HOSPITAL",
        distance: "1.5 KM",
        time: "6 MIN",
      },
      { name: "KAUVERY HOSPITAL PORUR", distance: "2.8 KM", time: "9 MIN" },
    ],
    TRANSPORTS: [
      {
        name: "PORUR METRO STATION (UPCOMING)",
        distance: "1.0 KM",
        time: "4 MIN",
      },
      { name: "MOUNT-POONAMALLEE ROAD", distance: "0.5 KM", time: "2 MIN" },
      {
        name: "CHENNAI INTERNATIONAL AIRPORT",
        distance: "12 KMS",
        time: "25 MIN",
      },
      { name: "GUINDY RAILWAY STATION", distance: "8.5 KMS", time: "20 MIN" },
    ],
  };

  const tabs = ["SCHOOLS", "COLLEGES", "HOSPITALS", "TRANSPORTS"];
  return (
    <>
      <section className="relative w-full h-[800px] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 w-full h-[100%]">
          <img
            src="/images/thewind-banner.jpg"
            alt="Mother Mira Projects Master Plan Layout"
            className="h-[100%]"
          />
        </div>

        {/* 3. Bottom Content Box */}
        <div className="w-full max-w-7xl mx-auto pb-22 sm:pb-22 z-10">
          {/* Category Badge */}
          <div className="">
            <div className="flex items-center ">
              <span className="subheadingherobanner greencolor ourprojectsss uppercase !pr-[12px]">
                MOTHER MIRA - THE WIND
              </span>
              <span className="subheadingherobanner greencolor ourprojectsss uppercase">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[22px] h-[22x]"
                    src="/images/icons/map-pin.svg"
                    alt=""
                  />{" "}
                  PORUR
                </div>
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="herobannerheading text-[#fff]">WELCOME TO THE WIND</h1>

          {/* Subtle Horizontal Divider */}
          <hr className="border-t border-white/20 w-full mb-5" />

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2">
            <a href="/" className="text-[#FFFFFF80] paratext ">
              Home
            </a>
            <span className="text-[#FFFFFF80] paratext">&gt;</span>
            <a href="/" className="text-[#FFFFFF80] paratext ">
              Our Projects
            </a>
            <span className="text-[#FFFFFF80] paratext">&gt;</span>
            <span className="paratext text-[rgba(255,255,255,0.85)]">
              Mother Mira-The Wind
            </span>
          </nav>
        </div>
      </section>

      <ProjectDetailIntro/>

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#EDE8D0] border-b border-[#16161629]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center max-w-7xl mb-12 sm:mb-16">
            <p className="subheadingtext uppercase blackcolor">WHY PORUR</p>
            <h2 className="mainheading indicocolor uppercase">
              PORUR&apos;S GROWTH{" "}
              <strong className="greencolor">ADVANTAGE</strong>
            </h2>
            <p className="blackcolor paratext mt-[10px]">
              Explore the advantages of living in Chennai&apos;s fast-growing{" "}
              <br />
              and well-connected Porur corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {advantages.map((card, index) => (
              <div
                key={index}
                className="relative group bg-[#004852] p-7 sm:p-8 rounded-2xl flex flex-col justify-start overflow-hidden min-h-[340px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
              >
                {/* Position exact-a same (-bottom-0 -right-4), hover-la mattum translateUp aagum */}
                <span className="absolute -bottom-[1px] -right-4 pointer-events-none transition-transform duration-500 ease-out translate-y-1 group-hover:translate-y-5">
                  <img
                    src="/images/m-texticon.svg"
                    alt=""
                    className="transition-all duration-300 opacity-100 group-hover:brightness-150"
                  />
                </span>

                <div className="relative z-10 space-y-4">
                  <h3 className="foundervoicesubtext text-[#FFFFFF]">
                    {card.title}
                  </h3>
                  <p className="paratext text-[#EDE8D0]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center max-w-7xl mb-12">
            <p className="subheadingtext uppercase blackcolor">
              Location Advantage
            </p>
            <h2 className="mainheading indicocolor uppercase">
              Connected{" "}
              <strong className="font-extrabold text-[#004852]">
                Lifestyle
              </strong>
            </h2>
            <p className="blackcolor paratext mt-[10px]">
              Excellent connectivity to IT hubs, metro access, schools,
              hospitals, <br /> and key transport corridors across Chennai.
            </p>
          </div>

          <img src="/images/mapimage.png" alt="" />

          {/* Bottom CTA */}
          <div className="flex flex-col items-center mt-10 space-y-3">
            <button className=" uppercase cursor-pointer rounded-full border border-[#0048523D] bg-[#004852] text-[#EDE8D0] semibold paratext  buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300">
              View Google Map
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0] !pt-0 border-b border-[#16161629]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Top Pills Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-1.5 rounded-full paratext uppercase transition-all duration-300 cursor-pointer ${
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

          {/* Outer Fieldset Card Container */}
          <div className="w-full border border-[#004852]/20 rounded-2xl p-6 sm:p-10 pt-2 sm:pt-4 relative mt-10">
            {/* Section Title embedded in top border line */}
            <div className="text-center -mt-8 sm:-mt-10 mb-6">
              <span className="bg-[#EDE8D0] px-4 inline-block herobannerheading greencolor">
                {activeTab}
              </span>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {locationData[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-center text-xs sm:text-sm text-[#004852] tracking-wide py-1.5 mb-0"
                >
                  {/* School / Place Name */}
                  <div className="col-span-6 sm:col-span-6 uppercase pr-2 semibold paratext blackcolor">
                    {item.name}
                  </div>

                  {/* Distance Column with left divider */}
                  <div className="col-span-3 sm:col-span-3 text-center border-l border-r border-[#004852]/20 pl-2 semibold paratext greencolor">
                    {item.distance}
                  </div>

                  {/* Time Column with left divider */}
                  <div className="col-span-3 sm:col-span-3 text-right border-l border-l border-[#004852]/20 pl-2 semibold paratext greencolo">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AmenitiesSection />
      <ProjectSpecifications />

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#EDE8D0] border-b border-[#16161629]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header Title */}
            <div className="mb-[30px]">
              <p className="subheadingtext uppercase blackcolor">
                WHY CHOOSE THE Wind?
              </p>
              <h2 className="mainheading indicocolor uppercase w-max">
                Wind <strong className="greencolor">Advantages</strong>
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
              src="/images/project-detail/wind-advantage.jpg"
              alt="Mother Mira Villa Street View"
              className="rounded-[15px]"
            />
          </div>
        </div>
      </section>

      <ProjectGallery />
    </>
  );
}
