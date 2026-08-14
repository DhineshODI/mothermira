"use client";
import { useState } from "react";
import ProjectSpecifications from "../components/ProjectSpecification";
import AmenitiesSection from "../components/ProjectAminites";
import ProjectGallery from "../components/ProjectGallery";
import ProjectDetailIntro from "../components/ProjectDetailIntro";
import LivingExperienceBanner from "../components/LivingExperience";
import Header from "../components/Header";

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
      title: "STRATEGIC LOCATION",
      desc: "Excellent connectivity to IT hubs and metro access",
      highlighted: true,
      // Icon: House on hand / structure
      icon: "/images/icons/Infrastructure.svg",
    },
    {
      title: "SMART VALUE LIVING",
      desc: "Balanced pricing with strong long-term appreciation potential",
      highlighted: false,
      // Icon: Diamond / Quality
      icon: "/images/icons/Quality.svg",
    },
    {
      title: "PEACEFUL COMMUNITY",
      desc: "Low-density gated environment for comfortable everyday living",
      highlighted: false,
      // Icon: Chart / Growth
      icon: "/images/icons/Value.svg",
    },
    {
      title: "QUALITY INFRASTRUCTURE",
      desc: "Well-Planned Amenities & Durable Infrastructure",
      highlighted: false,
      // Icon: Thumbs up with stars
      icon: "/images/icons/CustomerSatisfaction.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState("MEDICAL FACILITIES");

  // const locationData = {
  //   "LOCATION HIGHLIGHTS": [
  //     { name: "Kundratur Main Road.", distance: "0.8 Kms", time: "2 MINS" },
  //     { name: "Porur Junction", distance: "3.5 Kms", time: "8 MINS" },
  //     {
  //       name: "Mangadu Sri Kamakshi Temple",
  //       distance: "5.5 Kms",
  //       time: "12 MINS",
  //     },
  //     { name: "Airport", distance: "7.8 Kms", time: "18 MINS" },
  //     { name: "Railway Station, Guindy", distance: "9.5 Kms", time: "22 MINS" },
  //   ],
  //   "MEDICAL FACILITIES": [
  //     { name: "SRMC", distance: "5.0 Kms", time: "10 MINS" },
  //     { name: "MIOT", distance: "7.0 Kms", time: "15 MINS" },
  //     {
  //       name: "Apollo Speciality Hospital, Vanagaram",
  //       distance: "8.0 Kms",
  //       time: "18 MINS",
  //     },
  //   ],
  //   RESTAURANTS: [
  //     { name: "Adyar Ananda Bhavan", distance: "0.2 Kms", time: "1 MIN" },
  //     { name: "Dominos", distance: "1.5 Kms", time: "4 MINS" },
  //     { name: "Lemon Tree", distance: "4.0 Kms", time: "8 MINS" },
  //     { name: "KFC", distance: "4.0 Kms", time: "8 MINS" },
  //     { name: "Anjappar", distance: "4.0 Kms", time: "8 MINS" },
  //     { name: "Dindigul Thalapakatti", distance: "4.5 Kms", time: "10 MINS" },
  //     {
  //       name: "Sangeetha Veg Restaurant",
  //       distance: "6.8 Kms",
  //       time: "15 MINS",
  //     },
  //   ],
  //   "EDUCATIONAL INSTITUTIONS": [
  //     { name: "PSBB Milenium School", distance: "0.5 Kms", time: "2 MINS" },
  //     {
  //       name: "St. Francis International School",
  //       distance: "0.8 Kms",
  //       time: "3 MINS",
  //     },
  //     {
  //       name: "Omega International School",
  //       distance: "1.0 Kms",
  //       time: "4 MINS",
  //     },
  //     { name: "K.K. College of Pharmacy", distance: "1.3 Kms", time: "5 MINS" },
  //     { name: "Madha Medical College", distance: "4.0 Kms", time: "9 MINS" },
  //     {
  //       name: "Sri Krishna International School",
  //       distance: "4.5 Kms",
  //       time: "10 MINS",
  //     },
  //     { name: "SRM Dental College", distance: "5.0 Kms", time: "12 MINS" },
  //     {
  //       name: "Muthu Kumaran College of Medical",
  //       distance: "5.2 Kms",
  //       time: "12 MINS",
  //     },
  //     { name: "Anna University", distance: "13 Kms", time: "25 MINS" },
  //     { name: "I.I.T., Chennai", distance: "13 Kms", time: "25 MINS" },
  //   ],
  //   COMMERCIAL: [
  //     { name: "HP", distance: "3.3 Kms", time: "7 MINS" },
  //     { name: "DLF IT Park", distance: "5.0 Kms", time: "12 MINS" },
  //     { name: "L&T", distance: "6.0 Kms", time: "14 MINS" },
  //     {
  //       name: "Nandambakkam Trade Center",
  //       distance: "6.4 Kms",
  //       time: "15 MINS",
  //     },
  //   ],
  //   "FINANCIAL INSTITUTIONS": [
  //     { name: "Indian Overseas Bank", distance: "0.4 Kms", time: "2 MINS" },
  //     { name: "ICICI Bank", distance: "1.5 Kms", time: "4 MINS" },
  //     { name: "CUB ATM", distance: "1.8 Kms", time: "5 MINS" },
  //     { name: "HDFC Bank", distance: "2.0 Kms", time: "5 MINS" },
  //     { name: "Indian Bank", distance: "2.5 Kms", time: "6 MINS" },
  //   ],
  //   "SUPER MARKETS": [
  //     { name: "White Rose Super Market", distance: "0.4 Kms", time: "2 MINS" },
  //     { name: "Nellai Pazhamudhir Solai", distance: "2.5 Kms", time: "6 MINS" },
  //     { name: "Mega Mart", distance: "3.5 Kms", time: "8 MINS" },
  //     { name: "Nilgiris", distance: "4.0 Kms", time: "10 MINS" },
  //   ],
  // };

  // const tabs = [
  //   "LOCATION HIGHLIGHTS",
  //   "MEDICAL FACILITIES",
  //   "RESTAURANTS",
  //   "EDUCATIONAL INSTITUTIONS",
  //   "COMMERCIAL",
  //   "FINANCIAL INSTITUTIONS",
  //   "SUPER MARKETS",
  // ];

  const locationData = {
    "MEDICAL FACILITIES": [
      { name: "MIOT", distance: "6 Kms", time: "1 HR 12 MINS" },
      {
        name: "Apollo Speciality Hospital, Vanagaram",
        distance: "8.6 Kms",
        time: "1 HR 43 MINS",
      },
      {
        name: "Sri Ramachandra Medical Centre",
        distance: "5.3 Kms",
        time: "1 HR 4 MINS",
      },
    ],

    "EDUCATIONAL INSTITUTIONS": [
      { name: "PSBB Millennium School", distance: "0.6 Kms", time: "7 MINS" },
      {
        name: "St. Francis International School",
        distance: "1.8 Kms",
        time: "22 MINS",
      },
      {
        name: "Omega International School",
        distance: "1.6 Kms",
        time: "19 MINS",
      },
      { name: "Madha Medical College", distance: "4.5 Kms", time: "54 MINS" },
      { name: "SRM Dental College", distance: "6.5 Kms", time: "1 HR 18 MINS" },
      { name: "Anna University", distance: "13 Kms", time: "2 HRS 36 MINS" },
      { name: "Madha Engineering College", distance: "5 Kms", time: "1 HR" },
      { name: "Pon Vidyashram School", distance: "1.5 Kms", time: "18 MINS" },
      {
        name: "Orchid International School",
        distance: "2 Kms",
        time: "24 MINS",
      },
      {
        name: "Sri Ramachandra Medical College",
        distance: "5.1 Kms",
        time: "1 HR 1 MIN",
      },
      {
        name: "Little Flowers Matriculation School",
        distance: "0.6 Kms",
        time: "7 MINS",
      },
    ],

    COMMERCIAL: [
      { name: "DLF IT Park", distance: "7 Kms", time: "1 HR 24 MINS" },
      { name: "L&T", distance: "6.5 Kms", time: "1 HR 18 MINS" },
      {
        name: "Chennai Trade Centre",
        distance: "6.7 Kms",
        time: "1 HR 20 MINS",
      },
      { name: "Fintech City", distance: "6.5 Kms", time: "1 HR 18 MINS" },
      { name: "Porur Saravana Stores", distance: "5 Kms", time: "1 HR" },
      { name: "Commerzone", distance: "4.7 Kms", time: "56 MINS" },
      { name: "RMZ Software Park", distance: "4.6 Kms", time: "55 MINS" },
      { name: "Olympia Tech Park", distance: "8 Kms", time: "1 HR 36 MINS" },
      { name: "Mega Mart", distance: "5.6 Kms", time: "1 HR 7 MINS" },
      { name: "D Mart", distance: "5.5 Kms", time: "1 HR 6 MINS" },
    ],

    METRO: [
      {
        name: "Chennai Trade Centre Metro",
        distance: "6.3 Kms",
        time: "1 HR 16 MINS",
      },
      {
        name: "Chennai Airport Metro",
        distance: "8.5 Kms",
        time: "1 HR 42 MINS",
      },
      { name: "Guindy Metro", distance: "9.2 Kms", time: "1 HR 50 MINS" },
      { name: "Porur Metro", distance: "3.5 Kms", time: "42 MINS" },
      { name: "Alandur Metro", distance: "9 Kms", time: "1 HR 48 MINS" },
    ],
  };

  const tabs = [
    "MEDICAL FACILITIES",
    "EDUCATIONAL INSTITUTIONS",
    "COMMERCIAL",
    "METRO",
  ];

  return (
    <>
      <Header sec={"transperantBg"} />
      <section className="relative w-full h-[800px] flex items-end overflow-hidden projectdetailabannerrr">
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
              <span
                className="subheadingherobanner greencolor ourprojectsss uppercase !pr-[12px]"
                style={{ lineHeight: "120%" }}
              >
                MOTHER MIRA - THE WIND
              </span>
              <span
                style={{ lineHeight: "120%" }}
                className="subheadingherobanner greencolor ourprojectsss uppercase"
              >
                <div className="flex items-center gap-2 ">
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
          <h1 className="herobannerheading text-[#fff] mt-[10px]">
            WELCOME TO THE WIND
          </h1>

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

      <ProjectDetailIntro />

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#EDE8D0] border-b border-[#16161629]">
        <div className="container max-w-7xl mx-auto flex flex-col items-center">
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
        <div className="container max-w-7xl mx-auto flex flex-col items-center">
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
        <div className="container max-w-6xl mx-auto flex flex-col items-center">
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
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
              src="/images/project-detail/windimage.jpg"
              alt="Mother Mira Villa Street View"
              className="rounded-[15px]"
            />
          </div>
        </div>
      </section>

      <ProjectGallery />

      <LivingExperienceBanner />
    </>
  );
}
