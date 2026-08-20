"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  normalizePhone,
  submitEnquiry,
  thankYouUrl,
  validateEnquiry,
} from "../lib/enquiry";

/* ------------------------------------------------------------------ */
/* Field wrapper — legend-on-border look                               */
/* ------------------------------------------------------------------ */
function Field({ id, label, required, error, children, className = "" }) {
  return (
    <div className={className}>
      <fieldset
        className={`rounded-md border px-3 pb-3 transition-colors ${
          error ? "border-[#FF6B6B]" : "border-[#EDE8D0]/60"
        }`}
      >
        <legend className="px-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-[#EDE8D0]">
          {label}
          {required && <span className="text-[#FF0F1E]"> *</span>}
        </legend>
        {children}
      </fieldset>
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-[#FFB4B4]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full bg-transparent text-sm sm:text-base text-white placeholder-white/45 outline-none py-1.5 [color-scheme:dark]";

/* ------------------------------------------------------------------ */
/* Modal                                                               */
/* ------------------------------------------------------------------ */
const EMPTY = {
  name: "",
  email: "",
  phone: "",
  expectedDate: "",
  preferredTime: "",
  message: "",
};

export default function EnquiryModal({ config, onClose }) {
  const router = useRouter();
  const panelRef = useRef(null);
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type, msg }
  const [submitting, setSubmitting] = useState(false);

  const open = Boolean(config);
  const type = config?.type ?? "sitevisit"; // "sitevisit" | "brochure"
  const project = config?.project ?? "";
  const brochure = config?.brochure ?? "";

  // Reset whenever a new modal is opened
  useEffect(() => {
    if (open) {
      setForm(EMPTY);
      setErrors({});
      setStatus(null);
      setSubmitting(false);
    }
  }, [open, type, project]);

  // Escape to close + lock body scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: id === "phone" ? normalizePhone(value) : value,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...form, type, project, brochure };
    const validationErrors = validateEnquiry(payload, type);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      setStatus({ type: "error", msg: "Please correct the highlighted fields." });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      await submitEnquiry(payload);
      setStatus({ type: "success", msg: "Thank you! Your request has been submitted." });
      setForm(EMPTY);
      setErrors({});
      const url = thankYouUrl({ type, brochure, project });
      setTimeout(() => {
        onClose();
        router.push(url);
      }, 900);
    } catch (err) {
      if (err.fields) setErrors(err.fields);
      setStatus({
        type: "error",
        msg: err.fields
          ? "Please correct the highlighted fields."
          : "Something went wrong. Please try again later.",
      });
      setSubmitting(false);
    }
  };

  const isSiteVisit = type === "sitevisit";
  const title = isSiteVisit ? "BOOK A SITE VISIT" : "DOWNLOAD BROCHURE";
  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
      onMouseDown={(e) => {
        if (!panelRef.current?.contains(e.target)) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-2xl rounded-2xl bg-[#004852] p-6 sm:p-9 shadow-2xl"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EDE8D0] text-[#004852] shadow-md transition hover:bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 className="mb-6 text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
          {title}
        </h2>

        {status ? (
          <div
            role={status.type === "success" ? "status" : "alert"}
            className={`mb-5 rounded-md px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-emerald-500/20 text-emerald-50 ring-1 ring-emerald-300/40"
                : "bg-rose-500/20 text-rose-50 ring-1 ring-rose-300/40"
            }`}
          >
            {status.msg}
          </div>
        ) : null}

        <form noValidate onSubmit={handleSubmit} className="space-y-5">
          {/* Hidden fields — project is set automatically from the clicked CTA */}
          <input type="hidden" name="project" value={project} readOnly />
          <input type="hidden" name="brochure" value={brochure} readOnly />
          <input type="hidden" name="type" value={type} readOnly />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" required error={errors.name}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClass}
              />
            </Field>

            <Field id="email" label="Email" required error={errors.email}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass}
              />
            </Field>

            <Field
              id="phone"
              label="Phone Number"
              required
              error={errors.phone}
              className={isSiteVisit ? "" : "sm:col-span-2"}
            >
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={inputClass}
              />
            </Field>

            {isSiteVisit ? (
              <>
                <Field id="expectedDate" label="Expected Date" error={errors.expectedDate}>
                  <input
                    id="expectedDate"
                    type="date"
                    min={today}
                    value={form.expectedDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>

                <Field id="preferredTime" label="Preferred Time" error={errors.preferredTime}>
                  <input
                    id="preferredTime"
                    type="time"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>

                <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </>
            ) : null}
          </div>

          {project ? (
            <p className="text-xs uppercase tracking-wide text-[#EDE8D0]/70">
              Project: <span className="font-semibold text-[#EDE8D0]">{project}</span>
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="cursor-pointer rounded-full bg-[#EDE8D0] px-8 py-2.5 text-sm font-bold uppercase tracking-wide text-[#004852] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
