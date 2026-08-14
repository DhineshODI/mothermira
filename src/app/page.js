"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialSlider from "./components/TestimonialSlider";
import LivingExperienceBanner from "./components/LivingExperience";
import Header from "./components/Header";

export default function Home() {
  const strengths = [
    {
      title: "INFRASTRUCTURE",
      description: "Well-planned layouts and essential infrastructure",
      image: "/images/home/image1.jpg",
    },
    {
      title: "QUALITY",
      description: "Focused on durable construction standards",
      image: "/images/home/image2.jpg",
    },
    {
      title: "VALUE",
      description: "Maximum benefit for your investment",
      image: "/images/home/image3.jpg",
    },
    {
      title: "CUSTOMER SATISFACTION",
      description: "Built on transparency & reliability",
      image: "/images/home/image4.jpg",
    },
  ];

  const specs = [
    { label: "TOTAL UNITS", value: "140 VILLAS" },
    { label: "SIZE IN SQ. FT.", value: "5.70 ACRES" },
    { label: "BEDROOMS", value: "3 & 4 BHK" },
    { label: "SIZE IN SQ. FT.", value: "1200 - 3000" },
  ];

  return (
    <>
      <Header sec={"transperantBg"} />
      <div>
        <img className="w-full" src="/images/home/mothermira-hero-banner.jpg" />
      </div>

      <section className="relative w-full bg-[#EEE8D0] overflow-hidden text-center buildontrusthomepage">
        {/* Main Title Header */}
        <h2 className="builtttonalwayshome semibold">Built on Trust Always</h2>

        <div className="container max-w-5xl mx-auto flex flex-col items-center">
          <p
            className="mainheading missionclasss paragraphfont mt-[50px]"
            style={{ lineHeight: "107%" }}
          >
            <span className="semibold">Mother Mira</span> Industries Limited,{" "}
            <br />
            established in Chennai in 1994, <br /> develops value-driven real
            estate with legal compliance &{" "}
            <span className="semibold">quality infrastructure.</span>
          </p>

          <p className="builtontrustpara mt-[40px]">
            We create secure, future-ready assets that deliver long-term <br />
            appreciation and practical living for every customer consistently.
          </p>

          {/* Pill CTA Button */}

          <div className="borderbuttonexplore relative mt-[60px] w-full">
            <a
              href="#explore"
              className="cursor-pointer rounded-full border border-[#0048523D] bg-[#004852] text-[#EDE8D0] semibold paratext  buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300"
            >
              EXPLORE MORE
            </a>
          </div>
        </div>

        {/* Bottom Hero Stats Box with Background Image Overlay */}
        <div className="relative container w-full max-w-6xl mx-auto flex flex-col justify-end p-8 sm:p-12 text-white">
          {/* Overlay Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
            {/* "Trusted 32+ Years" Counter Display */}
            <div className="flex items-baseline justify-center gap-3 mb-4 butoonconteebd">
              <span
                className="secondheading semibold"
                style={{ lineHeight: "100%" }}
              >
                Trusted
              </span>

              <div className="relative flex items-start">
                <span className="thitytwoexper slimfontthin">32</span>
                <span className="slimfontthin plusfont">+</span>
              </div>

              <span
                className="secondheading semibold"
                style={{ lineHeight: "100%" }}
              >
                Years
              </span>
            </div>

            {/* Bottom Paragraph Description */}
            <p className="builtontrustpara text-[#fff">
              For over three decades, Mother Mira has grown through consistent
              delivery, ethical <br /> practices, and strong planning,
              developing reliable real estate assets that offer lasting value
              and build enduring trust among customers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#EEE8D0]">
        <div className="container max-w-7xl mx-auto">
          {/* Main Heading with Motion Fade-Up */}

          <h2 className="salesfooterrr paragraphfont blackcolor">
            Key strengths that define{" "}
            <strong className="greencolor">
              Mother Mira’s <br />
              developments
            </strong>
            , delivering consistent value <br /> to every customer
          </h2>

          {/* Strengths Rows List */}

          {/* <div className="max-w-4xl mx-auto"> */}
          <div className="space-y-12 md:space-y-16 mt-10">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1, // Stagger effect for consecutive rows
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group border-b border-[#0c3835]/15 mb-10"
              >
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 ">
                    {/* Left Side: Tag Title & Description */}
                    <div className="md:col-span-5 flex flex-col items-start justify-center">
                      {/* Badge Tag */}
                      <span className="inline-block bg-[#004852]  uppercase  px-4 py-1.5 mb-4 twentyfourpixel text-[#fff] semibold">
                        {item.title}
                      </span>

                      {/* Description */}
                      <p className="builtontrustpara blackcolor w-[65%]">
                        {item.description}
                      </p>
                    </div>

                    {/* Right Side: Rounded Card Image */}
                    <div className="md:col-span-7 flex justify-end">
                      <div className="relative imageesectionhome ">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="perfectfamilysection relative">
        <div>
          <img src="/images/perfectfamily.jpg" />
        </div>
        <div className="absolute imagecontenttttt w-full">
          <div className="flex flex-col justify-center items-center">
            <h4 className="semibold blackcolor fiftypixel">
              Discover value living for your
            </h4>
            <h2 className="perfecthomefont greencolor">
              {" "}
              <span className="thinfont indicocolor">PERFECT </span> HOME{" "}
            </h2>
          </div>
        </div>
        <div className="absolute top-0 z-1000">
          <img src="/images/perfectfamily-transperant.png" />
        </div>
      </section>

      <section className="relative w-full bg-[#f4f3e8] py-16 px-4 sm:px-8 lg:px-16 overflow-hidden projecthomebannersec">
        <div className="container max-w-7xl mx-auto ">
          <div className="contenthomepagesection">
            <div className="w-max">
              <div>
                <p className="subheadingtext uppercase blackcolor">PREMIUM</p>
                <div className="flex gap-1 items-end">
                  <h2
                    className="secondheading indicocolor uppercase"
                    style={{ lineHeight: "90%" }}
                  >
                    <strong style={{ lineHeight: "90%" }}>VILLA </strong>
                  </h2>
                  <h3 className="subheadingtext">
                    <strong>COMMUNITY </strong>{" "}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center space-x-1.5 bg-[#004852] px-3.5 py-1 mt-[5px] ml-[20px]">
                <img
                  className="h-[22px] w-[18px]"
                  src="/images/home/location-icon.svg"
                  alt=""
                />
                <span
                  className="ml-[5px] text-[#fff] semibold addressstyle "
                  style={{ letterSpacing: "6px", lineHeight: "100%" }}
                >
                  KOLAPAKKAM, PORUR
                </span>
              </div>

              <p className="blackcolor paratext mt-[12px] ml-[20px]">
                Premium villas with quality construction, gated living, and
                thoughtfully <br /> planned community infrastructure.
              </p>
            </div>
          </div>

          <div className="leftsidesectioncontent">
            <h4
              className="thirdheading w-max text-end"
              style={{ lineHeight: "100%" }}
            >
              <strong>
                VALUE LIVING <br /> IN PERFECT HOME
              </strong>
            </h4>
            <p className="builtontrustpara blackcolor premisumvillasend">
              Premium villas in a well-connected and peaceful environment
            </p>
            <button
              className="project-button bg-[#004852] mt-[15px] !text-[#fff] cursor-pointer rounded-full semibold paratext  buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300"
              style={{ letterSpacing: "1px" }}
            >
              VIEW PROJECT
            </button>
          </div>

          <div className="text-left space-y-2 pl-2 detailsectionproject">
            {specs.map((item, idx) => (
              <div key={idx}>
                <p className="blackcolor paratext ">{item.label}</p>
                <p className="builtontrustpara blackcolor uppercase boldfont">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <LivingExperienceBanner />
    </>
  );
}
