import Header from "../components/Header";
import LivingExperienceBanner from "../components/LivingExperience";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Ourprojects() {
  const stats = [
    { value: "140", label: "NO. OF TOTAL UNITS" },
    { value: "3 & 4", unit: "BHK", label: "NO. OF BEDROOMS" },
    { value: "5.70", unit: "ACRES", label: "TOTAL SIZE IN ACRES" },
    { value: "1200-3000", unit: "SQ.FT.", label: "TOTAL SIZE IN SQ. FT" },
  ];

  return (
    <>
      <Header sec={"transperantBg"} />
      <section className="relative w-full h-[800px] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 w-full h-[100%]">
          <img
            src="/images/ourpeojectsbanner.jpg"
            alt="Mother Mira Projects Master Plan Layout"
            className="h-[100%]"
          />
        </div>

        {/* 3. Bottom Content Box */}
        <div className="w-full container max-w-7xl mx-auto pb-22 sm:pb-22 z-10">
          {/* Category Badge */}
          <div className="">
            <span className="subheadingherobanner greencolor ourprojectsss">
              OUR PROJECTS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="herobannerheading text-[#fff]">
            OUR SIGNATURE DEVELOPMENTS
          </h1>

          {/* Subtle Horizontal Divider */}
          <hr className="border-t border-white/20 w-full mb-5" />

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2">
            <a href="/" className="text-[#FFFFFF80] paratext ">
              Home
            </a>
            <span className="text-[#FFFFFF80] paratext">&gt;</span>
            <span className="paratext text-[rgba(255,255,255,0.9)]">
              Our Projects
            </span>
          </nav>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#EDE8D0] flex justify-center border-b border-[#16161629]">
        <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left & Center Main Showcase Area */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
            {/* 1. Left Vertical Banner */}
            <div className="bg-[#004852] text-white hidden sm:flex items-center justify-center min-w-[77px] w-14 py-8">
              <span className="rotate-[-90deg] whitespace-nowrap premiumvillaamain text-[#EDE8D0]">
                PREMIUM &nbsp; VILLA
              </span>
            </div>

            {/* 2. Main Villa Card Content */}
            <div className="flex-1 flex flex-col justify-between space-y-6 imagedivposition">
              {/* Header Title & Badge */}
              <div className="motehrmiratextour">
                <p className="mothermiraourproject">MOTHER MIRA</p>
                <div className="flex flex-wrap items-center gap-3 mt-0">
                  <h2 className="mainheading greencolor">
                    <strong>THE WIND</strong>
                  </h2>

                  {/* Location Badge */}
                  <div className="inline-flex items-center space-x-1.5 bg-[#004852] px-3.5 py-2 mt-[5px]">
                    <img src="/images/icons/map-pin.png" alt="" />
                    <span className="twentyfourpixel paragraphfont text-[#fff]">
                      KOLAPAKKAM, CHENNAI
                    </span>
                  </div>
                </div>
              </div>

              {/* Villa Image */}
              <div className="relative w-full ourprojectsimageposition overflow-hidden">
                <img
                  src="/images/ourprojectsimage.png"
                  alt="Mother Mira The Wind Villa"
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 motehrmirabuttonour">
                <button className=" cursor-pointer rounded-full border border-[#0048523D] greencolor semibold paratext  buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300">
                  VIEW PROJECT
                </button>

                <button className="group cursor-pointer rounded-full border border-[#0048523D] greencolor semibold paratext buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300 inline-flex items-center gap-2.5">
                  <span>DOWNLOAD BROCHURE</span>
                  <svg
                    className="mt-[-3px] stroke-[#004852] group-hover:stroke-white transition-colors duration-300"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.75 11.417V14.9725C16.75 15.444 16.5627 15.8962 16.2293 16.2296C15.8959 16.563 15.4437 16.7503 14.9722 16.7503H2.52778C2.05628 16.7503 1.6041 16.563 1.2707 16.2296C0.937301 15.8962 0.75 15.444 0.75 14.9725V11.417"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.30859 6.97266L8.75304 11.4171L13.1975 6.97266"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75 11.4167V0.75"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button className="cursor-pointer rounded-full border border-[#0048523D] bg-[#004852] text-[#EDE8D0] semibold paratext  buttonpading hover:bg-[#0c3835] hover:!text-white transition-colors duration-300">
                  BOOK A SITE VISIT
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Stats Column */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 pt-6 lg:pt-16 lg:pl-6 z-10 maxwidthcontent">
            {stats.map((stat, idx) => (
              <div key={idx} className="border-b border-[#0c3835]/15 pb-5">
                <div className="flex items-baseline space-x-1.5">
                  <span className="semibold fiftypixel greencolor">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="twentyeightpixel slimfontthin blackcolor">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="blackcolor paratext">{stat.label}</p>
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
