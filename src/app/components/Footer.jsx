import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#eee9d5] text-[#084243] font-sans"
      id="foooterid"
    >
      <div className="flex footerbgsection ">
        <div className="relative footerrimagefirst">
          <img
            src="/images/footerimage.jpg"
            alt="Mother Mira Garden Path"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between footerrimageSecondd">
          <div className="space-y-8">
            {/* USEFUL LINKS */}
            <div className="marginnnnbotoomfooter">
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px] max-sm:!text-[15px]">
                Useful Links
              </h4>
              <ul className="space-y-1">
                <li className="mb-0">
                  <Link
                    href="/aboutus"
                    className="hover:underline greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px] "
                  >
                    ABOUT US
                  </Link>
                </li>

                <li>
                  <Link
                    href="/ourprojects"
                    className="hover:underline greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]"
                  >
                    ONGOING
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upcomingprojects"
                    className="hover:underline greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]"
                  >
                    UPCOMING
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:underline greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* OUR PROJECT */}
            <div className="mb-2 marginnnnbotoomfooter">
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px] max-sm:!text-[15px]">
                Our Project
              </h4>
              <Link
                href="/projectdetail-wind"
                className="hover:underline greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px] "
              >
                THE WIND - KOLAPAKKAM
              </Link>
            </div>

            {/* EMAIL & PHONE */}
            <div className="space-y-1 pt-2 marginnnnbotoomfooter">
              <Link
                href="mailto:sales@mothermira.com"
                className="salesfooterrr greencolor semibold"
              >
                sales@mothermira.com
              </Link>{" "}
              <br />
              <Link
                href="tel:+919840029535"
                className="salesfooterrr greencolor semibold "
              >
                +91 98400 29535
              </Link>
            </div>

            {/* CORPORATE OFFICE ADDRESS */}
            <div className="marginnnnbotoomfooter">
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px] max-sm:!text-[15px]">
                Corporate Office Address
              </h4>
              <p className="greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]">
                New Door No. 3/931B, Old Door No. 3/556B, <br />
                Kundrathur Main Road, Madanandapuram, <br />
                Porur, Chennai - 600125.
              </p>
            </div>

            {/* FOLLOW US */}
            <div>
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px] max-sm:!text-[15px]">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/Indeed.png" alt="Indeed" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/insta.png" alt="insta" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/fb.png" alt="fb" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/youtube.png" alt="" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full  flex items-center justify-center text-sm hover:opacity-80 transition"
                >
                  <img src="/images/icons/threads.png" alt="" />
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT & DESIGN BY */}
          <div className="copyrightrightsection mt-12 pt-6 border-t border-solid border-[rgba(0,72,82,0.24)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-bold tracking-wider text-gray-600">
            <div>
              <p className=" greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]">
                COPYRIGHT © 2026 MOTHER MIRA
              </p>
              <p className=" greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]">
                ALL RIGHTS RESERVED.
              </p>
            </div>

            {/* <div className="flex items-center gap-2">
              <span className=" greencolor paratext  !text-[16px] !font-[400] max-sm:!text-[13px]">
                DESIGN BY
              </span>
        
              <a href="https://www.opendesignsin.com/" target="_blank">
                <div className="w-11 h-11  flex items-center justify-center text-[9px] font-extrabold">
                  <img src="/images/icons/opendesigns.png" alt="" />
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
