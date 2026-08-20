"use client";

import { useEnquiryModal, DEFAULT_PROJECT, DEFAULT_BROCHURE } from "./EnquiryModalProvider";

/** Opens the "Book a Site Visit" modal. Project is passed to the hidden field. */
export function SiteVisitButton({
  project = DEFAULT_PROJECT,
  className = "",
  children,
  as = "button",
  ...rest
}) {
  const { openSiteVisit } = useEnquiryModal();
  const Tag = as;
  return (
    <Tag
      type={as === "button" ? "button" : undefined}
      onClick={(e) => {
        e.preventDefault();
        openSiteVisit(project);
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Opens the "Download Brochure" modal. Brochure path is carried to the thank-you page. */
export function BrochureButton({
  project = DEFAULT_PROJECT,
  brochure = DEFAULT_BROCHURE,
  className = "",
  children,
  as = "button",
  ...rest
}) {
  const { openBrochure } = useEnquiryModal();
  const Tag = as;
  return (
    <Tag
      type={as === "button" ? "button" : undefined}
      onClick={(e) => {
        e.preventDefault();
        openBrochure(project, brochure);
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
