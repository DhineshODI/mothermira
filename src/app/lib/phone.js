// International phone rules. The form carries E.164 only (+919876543210);
// the country ISO2 and the national part are derived for the email.
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js/min";

/** Country the field opens on, and the list pinned to the top of the dropdown. */
export const DEFAULT_COUNTRY = "in";
export const DEFAULT_DIAL = "91";
export const PREFERRED_COUNTRIES = [
  "in",
  "ae",
  "sa",
  "sg",
  "us",
  "gb",
  "au",
  "my",
];

/** Any country: + then 8-15 digits, first digit not 0. Mirrored in PHP. */
export const E164_REGEX = /^\+[1-9]\d{7,14}$/;

/** India is stricter: mobile numbers start 6/7/8/9. Mirrored in PHP. */
export const INDIA_REGEX = /^\+91[6-9]\d{9}$/;

/** The empty value the forms start from. */
export const EMPTY_PHONE = {
  e164: `+${DEFAULT_DIAL}`,
  iso2: DEFAULT_COUNTRY,
  dialCode: DEFAULT_DIAL,
};

/** True when nothing beyond the dial code has been typed. */
export function isPhoneEmpty(value) {
  const e164 = typeof value === "string" ? value : value?.e164 || "";
  const dial = typeof value === "string" ? "" : value?.dialCode || "";
  const digits = e164.replace(/\D/g, "");
  return !digits || digits === dial.replace(/\D/g, "");
}

/**
 * Repair a number that is invalid as typed but valid once an obvious mistake is
 * undone — a doubled dial code (+91 91 98765 43210) or a kept trunk 0
 * (+91 098765 43210). Only ever returns a *different* string when the repair
 * actually produces a valid number, so a half-typed number is left alone.
 */
export function tidyE164(e164 = "", dialCode = DEFAULT_DIAL) {
  const raw = String(e164).trim();
  if (!raw.startsWith("+")) return raw;
  if (isValidPhoneNumber(raw)) return raw;

  const dial = String(dialCode).replace(/\D/g, "");
  if (!dial) return raw;

  const rest = raw.slice(1 + dial.length);

  const candidates = [];
  if (rest.startsWith(dial)) candidates.push(`+${dial}${rest.slice(dial.length)}`);
  if (rest.startsWith("0")) candidates.push(`+${dial}${rest.replace(/^0+/, "")}`);
  if (rest.startsWith(dial)) {
    const afterDouble = rest.slice(dial.length);
    if (afterDouble.startsWith("0")) {
      candidates.push(`+${dial}${afterDouble.replace(/^0+/, "")}`);
    }
  }

  for (const candidate of candidates) {
    if (isValidPhoneNumber(candidate)) return candidate;
  }
  return raw;
}

/**
 * Work out what a pasted string should become.
 * Returns an E.164 string, or null to let the default paste happen.
 */
export function phoneFromPaste(text = "", dialCode = DEFAULT_DIAL) {
  const trimmed = String(text).trim();
  if (!trimmed) return null;

  // "+91 98765 43210" or "0091 98765 43210" — the paste carries its own country
  if (/^(\+|00)/.test(trimmed)) {
    const digits = trimmed.replace(/^00/, "").replace(/\D/g, "");
    return digits ? `+${digits}` : null;
  }

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 6) return null; // a fragment — let it paste normally

  // A bare national number stays in the selected country; drop the trunk 0.
  const dial = String(dialCode).replace(/\D/g, "") || DEFAULT_DIAL;
  return `+${dial}${digits.replace(/^0+/, "")}`;
}

/** field -> message, or null when the number is fine. */
export function validatePhone(value) {
  const e164 = tidyE164(
    typeof value === "string" ? value : value?.e164 || "",
    typeof value === "string" ? "" : value?.dialCode || DEFAULT_DIAL,
  );

  if (isPhoneEmpty({ e164, dialCode: value?.dialCode })) {
    return "Phone number is required";
  }
  if (!E164_REGEX.test(e164)) return "Enter a valid phone number";

  if (e164.startsWith("+91")) {
    if (!INDIA_REGEX.test(e164)) {
      return "Enter a valid 10-digit mobile number starting 6, 7, 8 or 9";
    }
    return null;
  }

  return isValidPhoneNumber(e164) ? null : "Enter a valid phone number";
}

/** What the form sends to the API. */
export function phonePayload(value) {
  const e164 = tidyE164(value?.e164 || "", value?.dialCode || DEFAULT_DIAL);
  const parsed = parsePhoneNumberFromString(e164);

  return {
    phone: e164,
    mobileCountry: (parsed?.country || value?.iso2 || "").toUpperCase(),
    mobileNational: parsed?.nationalNumber || e164.replace(/^\+\d{1,3}/, ""),
  };
}
