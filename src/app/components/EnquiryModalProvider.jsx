"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import EnquiryModal from "./EnquiryModal";

const EnquiryModalContext = createContext(null);

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used inside <EnquiryModalProvider>");
  }
  return ctx;
}

/** Default project used when a CTA does not pass one explicitly. */
export const DEFAULT_PROJECT = "Mother Mira - The Wind";
export const DEFAULT_BROCHURE = "/pdf/the-wind-brochure.pdf";

export default function EnquiryModalProvider({ children }) {
  const [config, setConfig] = useState(null);

  const openSiteVisit = useCallback(
    (project = DEFAULT_PROJECT) => setConfig({ type: "sitevisit", project }),
    []
  );

  const openBrochure = useCallback(
    (project = DEFAULT_PROJECT, brochure = DEFAULT_BROCHURE) =>
      setConfig({ type: "brochure", project, brochure }),
    []
  );

  const closeModal = useCallback(() => setConfig(null), []);

  const value = useMemo(
    () => ({ openSiteVisit, openBrochure, closeModal }),
    [openSiteVisit, openBrochure, closeModal]
  );

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal config={config} onClose={closeModal} />
    </EnquiryModalContext.Provider>
  );
}
