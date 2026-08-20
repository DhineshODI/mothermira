"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MESSAGES = {
  contact: {
    subtitle: "WE'VE RECEIVED YOUR ENQUIRY",
    body: "Our team will review your request and get back to you within 24 hours.",
  },
  sitevisit: {
    subtitle: "YOUR SITE VISIT IS REQUESTED",
    body: "Our team will call you shortly to confirm your preferred date and time.",
  },
  brochure: {
    subtitle: "YOUR BROCHURE IS ON ITS WAY",
    body: "The download should begin automatically. If it doesn't, use the button below.",
  },
};

/** Only allow same-origin brochure paths, e.g. /pdf/the-wind-brochure.pdf */
function safeFile(file) {
  if (!file) return "";
  if (!file.startsWith("/") || file.startsWith("//")) return "";
  if (!file.toLowerCase().endsWith(".pdf")) return "";
  return file;
}

export default function ThankYouContent() {
  const params = useSearchParams();
  const type = params.get("type") || "contact";
  const project = params.get("project") || "";
  const file = safeFile(params.get("file"));

  const [downloaded, setDownloaded] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (!file || fired.current) return;
    fired.current = true;

    const timer = setTimeout(() => {
      const a = document.createElement("a");
      a.href = file;
      a.download = file.split("/").pop() || "brochure.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDownloaded(true);
    }, 700);

    return () => clearTimeout(timer);
  }, [file]);

  const copy = MESSAGES[type] || MESSAGES.contact;

  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-[#EDE8D0] px-6 py-24 headertop">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="subheadingtext uppercase blackcolor">{copy.subtitle}</p>

        <h1 className="mainheading indicocolor uppercase">
          Thank <strong className="greencolor">You!</strong>
        </h1>

        <p className="blackcolor paratext mt-5">{copy.body}</p>

        {project ? (
          <p className="paratext greencolor semibold mt-3 uppercase">{project}</p>
        ) : null}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {file ? (
            <a
              href={file}
              download
              className="project-button cursor-pointer rounded-full border border-[#0048523D] bg-[#004852] text-[#EDE8D0] semibold paratext buttonpading transition-colors duration-300 hover:bg-[#0c3835]"
            >
              {downloaded ? "DOWNLOAD AGAIN" : "DOWNLOAD BROCHURE"}
            </a>
          ) : null}

          <Link
            href="/"
            className="project-button1 cursor-pointer rounded-full border border-[#0048523D] greencolor semibold paratext buttonpading transition-colors duration-300 hover:bg-[#0c3835] hover:!text-white"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </section>
  );
}
