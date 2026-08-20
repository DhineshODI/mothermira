"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  normalizePhone,
  submitEnquiry,
  thankYouUrl,
  validateEnquiry,
} from "../lib/enquiry";

const EMPTY = { name: "", phone: "", email: "", message: "" };

const inputClass =
  "mt-2 w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none text-sm";

function ErrorText({ id, msg }) {
  if (!msg) return null;
  return (
    <p id={`${id}-error`} className="mt-1 text-xs text-[#FFB4B4]">
      {msg}
    </p>
  );
}

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

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

    const payload = { ...form, type: "contact" };
    const validationErrors = validateEnquiry(payload, "contact");
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      setStatus({ type: "error", msg: "Please correct the highlighted fields." });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      await submitEnquiry(payload);
      setStatus({
        type: "success",
        msg: "Thank you! Your enquiry has been submitted successfully.",
      });
      setForm(EMPTY);
      setErrors({});
      setTimeout(() => router.push(thankYouUrl({ type: "contact" })), 900);
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

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5 contactform">
      {status ? (
        <div
          role={status.type === "success" ? "status" : "alert"}
          className={`rounded-md px-4 py-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-emerald-500/20 text-emerald-50 ring-1 ring-emerald-300/40"
              : "bg-rose-500/20 text-rose-50 ring-1 ring-rose-300/40"
          }`}
        >
          {status.msg}
        </div>
      ) : null}

      {/* NAME */}
      <div>
        <label htmlFor="name" className="semibold uppercase text-white">
          Name <span className="text-[#FF0F1E]">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your Name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
        />
        <ErrorText id="name" msg={errors.name} />
      </div>

      {/* PHONE & EMAIL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="semibold uppercase text-white">
            Phone <span className="text-[#FF0F1E]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your Phone"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
          />
          <ErrorText id="phone" msg={errors.phone} />
        </div>

        <div>
          <label htmlFor="email" className="semibold uppercase text-white">
            Email <span className="text-[#FF0F1E]">*</span>
          </label>
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
          <ErrorText id="email" msg={errors.email} />
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <label htmlFor="message" className="semibold uppercase text-white">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your Message"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* SUBMIT */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="project-button1 cursor-pointer bg-[#ede8d0] greencolor semibold paratext uppercase px-6 py-2 rounded-full hover:bg-white hover:!text-[#fff] transition duration-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Get In Touch"}
        </button>
      </div>
    </form>
  );
}
