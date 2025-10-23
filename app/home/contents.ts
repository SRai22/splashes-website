// lib/content.ts
export const HERO = {
  title: "Learning it the Right Way,\nRight from the Beginning",
  ctas: [
    { label: "Informational Video", href: "#" },
    { label: "Swimvenger Video", href: "#" },
  ],
  image: "/Images/home.jpeg",
};

export const REGISTER_BANNER = {
  imageSrc: "/Images/register-online-here-banner.png",
  alt: "Register Online Here",
  href: "/register",
  fullBleed: true as const,
};

export const HIRING_BANNER = {
  imageSrc: "/Images/ww-site-hiring-banner-resized.png",
  alt: "Now Hiring — Swim Instructors, Lifeguards & Customer Service Reps",
  href: "/careers",
  fullBleed: false as const,
};

export const TEACHING = {
  heading: "Hands On Teaching",
  copy: `Splashes Swim School provides high quality swim instruction and the ideal environment for learning how to swim. Our swim instructors use specialized "muscle memory" teaching techniques that help our students progress at a quick rate. Grouped by age and ability, our students benefit from swim classes that offer personalized attention. It's never too late to learn to swim!`,
  bullets: [
    { text: "Private Swimming Lessons – All Locations", href: "/lessons/private" },
    { text: "Semi-Private Swimming Lessons – All Locations", href: "/lessons/semi-private" },
    { text: "Parent & Me (Baby) Swimming Lessons – Select Locations", href: "/lessons/parent-and-me" },
  ],
  additionalText: `Select locations also offer additional swim programs such as swim competitions, swim teams, water aerobics, aquatic therapy, swim camps and more! To learn more about the Waterworks Family Swim School near you, select a location below.`,
  callToAction: "Ready to sign up?",
  button: { label: "REGISTER NOW", href: "/register" },
  decoImageSrc: "/Images/home-hands-on-teaching.jpeg",     // the photo
  waveMaskSrc: "/Images/splash-wave.png",                  // used by CSS mask
};

export const LOCATIONS = {
  bg: "/Images/home-our-locations-bg.jpeg",
  map: "/Images/home-our-locations-map.png",
  heading: "Find a Splashes Swim School near you",
  subheading: "Family Swim School Locations",
  button: { label: "Find a Location Near You", href: "/locations" },
};

