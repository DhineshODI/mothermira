import Image from "next/image";
import TestimonialSlider from "../components/TestimonialSlider";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
export default function ContactPage() {
  return (
    <>
      <Header sec={""} />
      <section className="relative w-full min-h-[800px] max-h-[800px] overflow-hidden flex flex-col items-center justify-between headertop aboutsectionbanner ">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src="/images/contactusbanner.jpg"
            alt="Talk to our team"
            className="object-cover object-center"
          />
        </div>

        <div className="pt-5 sm:pt-5 text-center z-10 px-4">
          <h1 className="mainheading indicocolor">
            Talk to <strong className="greencolor"> Our Team</strong>
          </h1>
        </div>
      </section>

      <section className="bg-[#EDE8D0] py-16 px-6 md:px-12 lg:px-20 font-sans text-[#0f3d3e] contactformsections ">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: Info & Text */}
          <div className="space-y-6">
            <div className="marginnnnbotoomfooter">
              <p className="subheadingtext uppercase blackcolor">Mother Mira</p>
              <h2 className="mainheading indicocolor uppercase">
                Get In <strong className="greencolor"> Touch</strong>
              </h2>
            </div>

            <p className="blackcolor paratext breakremove marginnnnbotoomfooter ">
              Connect with our team for project details, site visits and
              personalized <br /> guidance for your property investment journey.
            </p>

            <div className="pt-2 space-y-1 marginnnnbotoomfooter">
              <a
                href="mailto:sales@mothermira.com"
                className="fourheading greencolor"
              >
                sales@mothermira.com
              </a>
              <br />
              <a href="tel:+919840029535" className="fourheading greencolor">
                +91 98400 29535
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 marginnnnbotoomfooter"> 
              <p className="paratext boldfont greencolor uppercase mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/Indeed.png" alt="Indeed" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/insta.png" alt="insta" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/fb.png" alt="fb" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/youtube.png" alt="" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/threads.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dark Form Card */}
          <div className="bg-[#004852] p-8 md:p-10 rounded-3xl shadow-xl formsectioncontact">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[1000px] py-16 px-4 sm:px-8 flex flex-col items-center justify-start overflow-hidden contactbannerr">
        {/* 1. Background Aerial Image */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/images/ourlocations.jpg" // public/images/location-bg.jpg
            alt="MotherMira Property Location Aerial View"
            fill
            className="object-cover object-bottom"
          />
        </div>

        {/* 2. Top-to-Middle Cream Gradient Fade */}
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f4f3e8] via-[#f4f3e8]/80 via-40% to-transparent" /> */}

        {/* 3. Section Title Header */}
        <div className="text-center z-10 mb-10 mt-15">
          <p className="subheadingtext">REACH US</p>
          <h2 className="mainheading indicocolor uppercase">
            Our <strong className="greencolor"> Locations</strong>
          </h2>
        </div>

        {/* 4. Location Cards Container */}

        <div className="z-10 w-full max-w-fit grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-7">
          {/* Office Address Card */}
          <div className="adressbox bg-[#FFF8D8]/90 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-[#e2dec9] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <h3 className="thirdheading">
                <strong className="greencolor"> OFFICE</strong> ADDRESS
              </h3>

              <p className="paratext blackcolor semibold mt-3">
                MOTHER MIRA INDUSTRIES LTD
              </p>

              <p className="paratext blackcolor addressstyle mt-2">
                Upper Crest Apartments, Flat F2, First Floor,
                <br />
                No:1, School Street, Near Corporation
                <br />
                School, Koyambedu, Chennai - 600 107.
              </p>
            </div>

            <div className="mt-7">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paratext greencolor boldfont"
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "3px",
                }}
              >
                VIEW GOOGLE MAP
              </a>
            </div>
          </div>

          {/* Site Address Card */}
          <div className="adressbox bg-[#FFF8D8]/90 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-[#e2dec9] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <h3 className="thirdheading">
                <strong className="greencolor"> SITE {""}</strong> ADDRESS
              </h3>

              <p className="paratext blackcolor semibold mt-3">
                MOTHER MIRA, THE WIND.
              </p>

              <p className="paratext blackcolor addressstyle mt-2">
                No:1, 116/2A, BT Nagar, Kolapakkam (Porur),
                <br />
                Chennai - 600 122.
              </p>
            </div>
            <div className="mt-7">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paratext greencolor boldfont"
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "3px",
                }}
              >
                VIEW GOOGLE MAP
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </>
  );
}
