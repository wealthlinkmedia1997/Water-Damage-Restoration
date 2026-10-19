// ============================================================
// Testimonial content for the water-damage restoration funnel.
// videoSrc points at a self-hosted mp4 when a real clip exists.
// Empty videoSrc renders a labeled placeholder in the portrait
// rail (see renderTestimonials() in main.js). Do not invent a
// filename. No company names. No state names.
// ============================================================
window.TESTIMONIALS = [
  {
    id: "owner-ads",
    quote: "We were living off Google Ads spending over $10k/mo and now we're getting double the calls from Andre's team with half the ad spend.",
    name: "A restoration owner",
    company: "Stain & restoration company ($700K–$2M)",
    videoLabel: "Replace this clip",
    videoSrc: "",
    poster: "",
  },
  {
    id: "jim",
    quote: "Much easier to close someone from Google and ChatGPT than anything else we tried.",
    name: "Jim",
    company: "Restoration company owner ($500K–$4.3M)",
    videoLabel: "Replace this clip",
    videoSrc: "",
    poster: "",
  },
  {
    id: "owner-rank",
    quote: "In a popular area for ads but we just outranked everyone on Google instead.",
    name: "A restoration owner",
    company: "Restoration company ($500K–$4.3M)",
    videoLabel: "Replace this clip",
    videoSrc: "",
    poster: "",
  },
  {
    id: "clip-4",
    quote: "",
    name: "Client video",
    company: "Replace this clip",
    videoLabel: "Replace this video",
    videoSrc: "",
    poster: "",
  },
  {
    id: "clip-5",
    quote: "",
    name: "Client video",
    company: "Replace this clip",
    videoLabel: "Replace this video",
    videoSrc: "",
    poster: "",
  },
  {
    id: "clip-6",
    quote: "",
    name: "Client video",
    company: "Replace this clip",
    videoLabel: "Replace this video",
    videoSrc: "",
    poster: "",
  },
  {
    id: "clip-7",
    quote: "",
    name: "Client video",
    company: "Replace this clip",
    videoLabel: "Replace this video",
    videoSrc: "",
    poster: "",
  },
];

// Same 2:11 VSL as the homepage hero. Booking and thank-you pages
// play it through renderExplainerVideo().
window.EXPLAINER_VIDEO = {
  videoSrc: "assets/video/vsl.mp4",
  poster: "assets/video/vsl-poster.jpg",
  caption: "",
};

window.HERO_TESTIMONIAL_IDS = ["owner-ads", "jim", "owner-rank"];
window.BOOKING_TESTIMONIAL_IDS = ["owner-ads", "jim", "owner-rank", "clip-4", "clip-5", "clip-6", "clip-7"];
window.HOME_TESTIMONIAL_IDS = ["owner-ads", "jim", "owner-rank", "clip-4", "clip-5", "clip-6", "clip-7"];
window.THANK_YOU_TESTIMONIAL_IDS = ["jim", "owner-ads", "owner-rank", "clip-4", "clip-5", "clip-6", "clip-7"];

window.CLOSING_TESTIMONIAL = {
  quote: "Much easier to close someone from Google and ChatGPT than anything else we tried.",
  name: "Jim",
  company: "a restoration company owner ($500K–$4.3M)",
};
