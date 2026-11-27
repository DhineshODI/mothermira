// Shared enquiry helpers: validation rules + API submit.
import { phonePayload, validatePhone } from "./phone";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "/api/enquiry.php";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone rules now live in ./phone (E.164, any country). Re-exported so the
// forms have a single import.
export { EMPTY_PHONE, phonePayload, validatePhone } from "./phone";

/**
 * Validate an enquiry payload.
 * @param {object} form
 * @param {"contact"|"sitevisit"|"brochure"} type
 * @returns {Record<string,string>} field -> error message
 */
export function validateEnquiry(form, type = "contact") {
  const errors = {};

  const name = (form.name || "").trim();
  if (!name) errors.name = "Name is required";
  else if (name.length < 2) errors.name = "Enter a valid name";
  else if (!/^[a-zA-Z\s.'-]+$/.test(name))
    errors.name = "Name can only contain letters";

  const email = (form.email || "").trim();
  if (!email) errors.email = "Email is required";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address";

  // form.phone is the { e164, iso2, dialCode } object from PhoneField.
  const phoneError = validatePhone(form.phone);
  if (phoneError) errors.phone = phoneError;

  if (type === "sitevisit" || type === "brochure") {
    if (!(form.project || "").trim()) errors.project = "Project is required";
  }

  if (type === "sitevisit" && form.expectedDate) {
    const picked = new Date(form.expectedDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(picked.getTime())) {
      errors.expectedDate = "Enter a valid date";
    } else if (picked < today) {
      errors.expectedDate = "Date cannot be in the past";
    }
  }

  return errors;
}

/** POST the enquiry to the PHP endpoint. Throws on failure. */
export async function submitEnquiry(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      // { phone: "+919876543210", mobileCountry: "IN", mobileNational: "9876543210" }
      ...phonePayload(payload.phone),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    }),
  });

  // Read as text first: a PHP fatal error returns HTML, not JSON.
  const raw = await res.text();
  let data = {};
  try {
    data = JSON.parse(raw);
  } catch {
    data = {};
  }

  if (!res.ok || !data.ok) {
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.fields = data.fields || null;
    err.detail = data.detail || (data.error ? null : raw.slice(0, 500));
    err.status = res.status;
    if (err.detail) console.error("Enquiry endpoint said:", err.detail);
    throw err;
  }

  return data;
}

/** Build the thank-you URL, carrying the brochure file when there is one. */
export function thankYouUrl({ type = "contact", brochure = "", project = "" }) {
  const params = new URLSearchParams({ type });
  if (brochure) params.set("file", brochure);
  if (project) params.set("project", project);
  return `/thank-you?${params.toString()}`;
}
