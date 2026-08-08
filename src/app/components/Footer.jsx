import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#eee9d5] text-[#084243] font-sans">
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
            <div>
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px]">
                Useful Links
              </h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#about"
                    className="hover:underline greencolor paratext  !text-[16px] !font-[400]"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:underline greencolor paratext  !text-[16px] !font-[400]"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            {/* OUR PROJECT */}
            <div className="mb-2">
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px]">
                Our Project
              </h4>
              <a
                href="#project"
                className="hover:underline greencolor paratext  !text-[16px] !font-[400]"
              >
                THE WIND - KOLAPAKKAM
              </a>
            </div>

            {/* EMAIL & PHONE */}
            <div className="space-y-1 pt-2">
              <a
                href="mailto:sales@mothermira.com"
                className="salesfooterrr greencolor "
              >
                sales@mothermira.com
              </a>{" "}
              <br />
              <a href="tel:+919840029535" className="salesfooterrr greencolor ">
                +91 98400 29535
              </a>
            </div>

            {/* CORPORATE OFFICE ADDRESS */}
            <div>
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px]">
                Corporate Office Address
              </h4>
              <p className="greencolor paratext  !text-[16px] !font-[400]">
                Upper Crest Apartments, Flat F2, First Floor, No.11, <br />
                School Street, Near Corporation School, Koyambedu, <br />
                Chennai - 600 107.
              </p>
            </div>

            {/* FOLLOW US */}
            <div>
              <h4 className="paratext boldfont greencolor uppercase mb-3 !text-[20px]">
                Follow Us
              </h4>
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

          {/* BOTTOM COPYRIGHT & DESIGN BY */}
          <div className="copyrightrightsection mt-12 pt-6 border-t border-solid border-[rgba(0,72,82,0.24)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-bold tracking-wider text-gray-600">
            <div>
              <p className=" greencolor paratext  !text-[16px] !font-[400]">
                COPYRIGHT © 2026 MOTHER MIRA
              </p>
              <p className=" greencolor paratext  !text-[16px] !font-[400]">
                ALL RIGHTS RESERVED.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className=" greencolor paratext  !text-[16px] !font-[400]">
                DESIGN BY
              </span>
              {/* Designer Logo Icon Placeholder */}
              <div className="w-11 h-11  flex items-center justify-center text-[9px] font-extrabold">
                <img src="/images/icons/opendesigns.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
