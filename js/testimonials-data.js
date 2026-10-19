// ============================================================
// On-camera reviews copied from windows-test (read-only source):
// windows.rankflow/js/testimonials-data.js and assets/videos/.
// Duplicate homepage variants (chriss, natalies) are the same
// people as chris and natalie, so this rail keeps one clip each.
// Joseph Schmidt is quote-only in the source (no video file).
// The three written homepage story cards stay anonymized in HTML.
// ============================================================
window.TESTIMONIALS = [
  {
    id: "todd",
    quote: "After 30 days I'm at an extra $6,300 in commercial and residential $2,400",
    name: "Todd",
    company: "Owner, Harborline Water Mitigation",
    videoSrc: "assets/videos/todd.mp4",
    poster: "assets/videos/todd-poster.jpg",
  },
  {
    id: "anthony",
    quote: "Even in our slowest months in the winter our phone is STILL ringing every day",
    name: "Anthony",
    company: "Owner, Stillwater Emergency Restoration",
    videoSrc: "assets/videos/anthony.mp4",
    poster: "assets/videos/anthony-poster.jpg",
  },
  {
    id: "paul",
    quote: "Game changer for my business, generated 8 [large] jobs and had our best month ever in a few months",
    name: "Paul",
    company: "Owner, Ironwood Dry Restoration",
    videoSrc: "assets/videos/paul.mp4",
    poster: "assets/videos/paul.jpg",
  },
  {
    id: "jim",
    quote: "And literally within 30 days I'm at the top - I've had everyone tell me they could get me there but nobody could get me there",
    name: "Jim",
    company: "Owner, Northbend Water Restoration",
    videoSrc: "assets/videos/jim.mp4",
    poster: "assets/videos/jim-poster.jpg",
  },
  {
    id: "trevor",
    quote: "By the time you're 2 or 3 companies in that burned you, your done. For some reason I trusted Andre and he got us number 1. I ONLY do my own jobs now, no subcontracting",
    name: "Trevor",
    company: "Owner, Summit Water Restoration",
    videoSrc: "assets/videos/trevor.mp4",
    poster: "assets/videos/trevor-poster.jpg",
  },
  {
    id: "mindi",
    quote: "We have our gifts, we need to focus on what we do and marketers need to focus on what they do - in that short amount of time, the growth has been PHENOMENAL",
    name: "Mindi",
    company: "Rapid Dry Restoration",
    videoSrc: "assets/videos/mindi.mp4",
    poster: "assets/videos/mindi-poster.jpg",
  },
  {
    id: "chris",
    quote: "2 months ago I wasnt getting calls, now my site presence has gone through the rough [over 100 5 star reviews] and getting calls every day",
    name: "Chris",
    company: "Owner, Cedar Creek Restoration",
    videoSrc: "assets/videos/chris.mp4",
    poster: "assets/videos/chris-poster.jpg",
  },
  {
    id: "natalie",
    quote: "We were working with another company prior and now we see what a horrible job they did because Andre's team has been amazing",
    name: "Natalie",
    company: "Owner, Prime Dry Restoration",
    videoSrc: "assets/videos/natalie.mp4",
    poster: "assets/videos/natalie-poster.jpg",
  },
  {
    id: "danny",
    quote: "I saw the ad and thought this would be a scammy thing and come to find out people we work with were very professional [2 new leads within one WEEK]",
    name: "Danny",
    company: "Owner, Metro Flood Response",
    videoSrc: "assets/videos/danny.mp4",
    poster: "assets/videos/danny-poster.jpg",
  },
  {
    id: "bryan",
    quote: "People think when the economy is bad, they should stop all advertising- this is really when you should double down on all advertising to the RIGHT PEOPLE",
    name: "Bryan",
    company: "Owner, Brightpath Restoration",
    videoSrc: "assets/videos/bryan.mp4",
    poster: "assets/videos/bryan.jpg",
  },
];

// Same 2:11 VSL as the homepage hero. Booking and thank-you pages
// play it through renderExplainerVideo().
window.EXPLAINER_VIDEO = {
  videoSrc: "assets/video/vsl.mp4",
  poster: "assets/video/vsl-poster.jpg",
  caption: "",
};

// Homepage rail: windows-test HOME order, with the duplicate
// chriss/natalies clips collapsed to chris/natalie, plus Danny.
window.HOME_TESTIMONIAL_IDS = ["trevor", "todd", "anthony", "bryan", "natalie", "jim", "mindi", "chris", "paul", "danny"];
// Booking pages match windows-test BOOKING_TESTIMONIAL_IDS.
window.BOOKING_TESTIMONIAL_IDS = ["jim", "trevor", "mindi"];
// Thank-you page matches windows-test THANK_YOU_TESTIMONIAL_IDS.
window.THANK_YOU_TESTIMONIAL_IDS = ["danny", "jim", "trevor", "mindi", "chris", "natalie"];

// Quote-only closer from windows-test. No video file exists for Joseph.
window.CLOSING_TESTIMONIAL = {
  quote: "This was the best money ive ever invested, I've spent twice as much money on other advertising companies for getting no leads, Andre and his team has been WONDERFUL",
  name: "Joseph Schmidt",
  company: "Rev Joes",
};
