// ============================================================
// WealthLink Media — Water Damage Restoration landing config
// Fill in every blank value below before going live.
// Nothing else in the codebase needs to change once these are set.
// Every value below was intentionally left empty. Do not invent them.
// ============================================================
window.RANKFLOW_CONFIG = {
  // Meta (Facebook) Pixel ID — Events Manager > Data Sources > your pixel.
  // index.html also includes this pixel in <head>. initTracking() does not
  // init or send PageView again when fbq is already on the page.
  // Blank: initTracking() does not load fbevents.js and does not fire.
  META_PIXEL_ID: "1072650102023137",

  // Google Places API key. Same browser key as windows-test. It is
  // expected to be visible client-side. Blank: the business name stays a
  // plain text field and autocomplete is not loaded.
  GOOGLE_PLACES_API_KEY: "AIzaSyB7VqEv9lQC71rLQmLlH2JOp9WSyhf9aTk",

  // GHL calendar embed URLs for the water-damage calendars.
  // TRACKED = good leads (book-tracked.html).
  // UNTRACKED = leads who are not the primary fit (book-untracked.html).
  // Blank would show "Calendar not configured yet".
  GHL_CALENDAR_TRACKED_URL: "https://api.leadconnectorhq.com/widget/booking/pMJDW8Cfcd9WPJ4cYgZD",
  GHL_CALENDAR_UNTRACKED_URL: "https://api.leadconnectorhq.com/widget/booking/ga0cRduAzJ5K5ZYKrDjU",

  // GHL inbound webhook. The survey POSTs the flat JSON body
  // documented in docs/ghl-webhook-sample.json. The thank-you redirect still runs.
  LEAD_WEBHOOK_URL: "https://services.leadconnectorhq.com/hooks/oJyfQVqrbosEEz3hI106/webhook-trigger/H0OdxM0lnZtEWNXMhq5T",

  // Thank-you page contact card. The number is also a tel: link.
  THANK_YOU_CONTACT: {
    heading: "Expect a call from Angie",
    name: "Angie, WealthLink Media",
    phoneDisplay: "725-527-4503",
    phoneTel: "+17255274503",
    noteBefore: "Angie from our team will call you from ",
    noteAfter: " (Las Vegas, NV). Save the number so you don't miss it.",
  },
};
