// Shared enquiry helpers: validation rules + API submit.

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "/api/enquiry.php";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Indian mobile: exactly 10 digits, first digit 6/7/8/9
export const PHONE_REGEX = /^[6-9]\d{9}$/;

/** Strip everything but digits and cap at 10 characters. */
export function normalizePhone(value = "") {
  return String(value).replace(/\D/g, "").slice(0, 10);
}

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

  const phone = normalizePhone(form.phone);
  if (!phone) errors.phone = "Phone number is required";
  else if (phone.length !== 10) errors.phone = "Phone number must be 10 digits";
  else if (!PHONE_REGEX.test(phone))
    errors.phone = "Phone number must start with 6, 7, 8 or 9";

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
      phone: normalizePhone(payload.phone),
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
