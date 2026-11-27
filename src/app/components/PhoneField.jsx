"use client";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  DEFAULT_COUNTRY,
  PREFERRED_COUNTRIES,
  phoneFromPaste,
  tidyE164,
} from "../lib/phone";

/**
 * International phone input.
 *
 * value    { e164, iso2, dialCode }  — E.164 is the only thing that leaves the form
 * onChange (next) => void
 * variant  "light" (white box, contact page) | "dark" (transparent, modal)
 */
export default function PhoneField({
  id = "phone",
  value,
  onChange,
  invalid = false,
  variant = "light",
  placeholder = "Enter your Phone Number",
}) {
  const handleChange = (phone, meta) => {
    const country = meta?.country || {};
    const dialCode = country.dialCode || value?.dialCode || "";
    onChange({
      // Never let the field go fully empty — an empty field makes the next
      // digits typed read as a new country code (98765… becomes Iran).
      e164: phone.replace(/\D/g, "") ? phone : `+${dialCode}`,
      iso2: country.iso2 || value?.iso2 || DEFAULT_COUNTRY,
      dialCode,
    });
  };

  const handlePaste = (e) => {
    const next = phoneFromPaste(
      e.clipboardData.getData("text"),
      value?.dialCode,
    );
    if (next) {
      e.preventDefault();
      onChange({ ...value, e164: next });
    }
  };

  // Repair a doubled dial code or a kept trunk 0 once the user leaves the field.
  const handleBlur = () => {
    const fixed = tidyE164(value?.e164 || "", value?.dialCode);
    if (fixed !== value?.e164) onChange({ ...value, e164: fixed });
  };

  return (
    <PhoneInput
      defaultCountry={DEFAULT_COUNTRY}
      preferredCountries={PREFERRED_COUNTRIES}
      forceDialCode
      allowMaskOverflow
      value={value?.e164 || ""}
      onChange={handleChange}
      className={`mm-phone mm-phone--${variant} ${invalid ? "mm-phone--invalid" : ""}`}
      inputProps={{
        id,
        name: "phone",
        type: "tel",
        autoComplete: "tel",
        inputMode: "tel",
        placeholder,
        "aria-invalid": invalid || undefined,
        "aria-describedby": invalid ? `${id}-error` : undefined,
        onPaste: handlePaste,
        onBlur: handleBlur,
      }}
    />
  );
}
