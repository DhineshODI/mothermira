import Image from "next/image";

export default function ProjectDetailIntro() {
  const stats = [
    { value: "140", label: "NO. OF TOTAL UNITS" },
    { value: "3 & 4", unit: "BHK", label: "NO. OF BEDROOMS" },
    { value: "5.70", unit: "ACRES", label: "TOTAL SIZE IN ACRES" },
    { value: "1200-3000", unit: "SQ.FT.", label: "TOTAL SIZE IN SQ FT" },
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 bg-[#EDE8D0] proejectdetailbannerer">
      <div className="container max-w-7xl mx-auto flex flex-col">
        {/* Top Grid: Content & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 leftsidesectionflexxxs">
          {/* Left Area: Title & Description */}
          <div className="lg:col-span-8 space-y-4 ">
            <p className="subheadingtext uppercase blackcolor mb-0">
              EXPERIENCE THE SMART
            </p>

            {/* Title with Logo */}
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="secondheading greencolor leading-[100%]">
                <strong>VALUE LIVING</strong>
              </h2>
              <div className="relative w-[135px] h-[100px]">
                <img
                  src="/images/project-detail/wind-detail-logo.png"
                  alt="The Wind Logo"
                  className="object-contain object-center"
                />
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-3 pt-2 max-w-4xl">
              <p className="blackcolor paratext">
                The Wind is a premium gated villa community located in
                Chennai&apos;s rapidly developing Porur-Kolapakkam corridor.
                Designed for smart value living, the project combines peaceful
                surroundings, organized infrastructure, and strong connectivity
                within a thoughtfully planned residential environment.
              </p>
              <p className="blackcolor paratext">
                With convenient access to major IT hubs, metro connectivity,
                schools, hospitals, retail destinations, and important transport
                routes, The Wind offers a balanced lifestyle for modern
                families. Its strategic location, low-density planning, and
                quality development approach position it as a secure residential
                address with excellent long-term appreciation potential.
              </p>
            </div>
          </div>

          {/* Right Area: Stats Column */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-5 lg:pl-8 statscolumnss">
            {stats.map((stat, idx) => (
              <div key={idx} className="border-b border-[#004852]/15 pb-5">
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
      </div>
    </section>
  );
}
