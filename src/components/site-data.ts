/** All image and document URLs from https://drsarulrhaj.com/ */
export const SITE = "https://drsarulrhaj.com";

export function asset(path: string) {
  return `${SITE}/${path.replace(/^\//, "")}`;
}

export const LOGO = asset("assets/images/12mm.png");
export const FAVICON = asset("assets/images/favicon.png");
export const HERO_BG = asset("assets/images/hero/33.jpg");
export const PORTRAIT = asset("assets/images/about/pp%20(1).jpg");
export const PHOTO = asset("assets/images/about/Photo.jpg");
export const BEST_DOCTOR = asset("assets/images/about/best_doctor.jpg");
export const SERVICE_ANGLE = asset("assets/images/services/service-angle.png");
export const SERVICE_ELLIPSE = asset("assets/images/services/ellipse.png");
export const FOOTER_DOT_TOP = asset("assets/images/footer/footer-dot1.png");
export const FOOTER_DOT_BOTTOM = asset("assets/images/footer/footer-dot2.png");
export const SPEECH = asset("assets/images/testimonials/speech.jpg");
export const TESTIMONIAL_QQQ = asset("assets/images/testimonials/qqq.jpg");

export const UHC_DOC = asset("Robust%20Indian%20Healthcare%20Reforming%20leading%20to%20UHC%202%20(3).doc");
export const API_EBOOK = asset("API%20Digital%20e-book%202020.pdf");

export const GALLERY_IMAGES = [
  { src: asset("assets/images/gallery/i8%20(1).jpg"), alt: "Gallery" },
  { src: asset("assets/images/gallery/i4.jpg"), alt: "Gallery" },
  { src: asset("assets/images/gallery/i3.jpg"), alt: "Gallery" },
  { src: asset("assets/images/gallery/anbu.jpg"), alt: "Gallery" },
  { src: asset("assets/images/i3.jpg"), alt: "Gallery" },
  { src: asset("assets/images/Hosp.jpg"), alt: "Hospital" },
  { src: asset("assets/images/gallery/2.jpg"), alt: "Gallery" },
  { src: asset("assets/images/gallery/pp%20(1).jpg"), alt: "Gallery" },
] as const;

export const LEADER_IMAGES = [
  { src: asset("assets/images/2.jpg"), alt: "Leader" },
  { src: asset("assets/images/i1.jpg"), alt: "Leader" },
  { src: asset("assets/images/i8%20(1).jpg"), alt: "Leader" },
  { src: asset("assets/images/i3.jpg"), alt: "Leader" },
  { src: BEST_DOCTOR, alt: "Best Doctor" },
  { src: asset("assets/images/i2.jpg"), alt: "Leader" },
  { src: asset("assets/images/i7.jpg"), alt: "Leader" },
] as const;

export type NavItem = {
  label: string;
  to?: string;
  href?: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { label: "Profile", to: "/profile" },
      { label: "Academic", to: "/academic" },
      { label: "Education", to: "/education" },
      { label: "Business", to: "/business" },
    ],
  },
  { label: "Leader of profession", to: "/leader-of-profession" },
  {
    label: "Health",
    children: [{ label: "Digital Health", to: "/digital-health" }],
  },
  { label: "Sundaram Arulrhaj Hospital", to: "/hospital" },
  { label: "Gallery", to: "/gallery" },
];

export const FOOTER_SERVICES = [
  "Health",
  "Environmental Project",
  "Academic",
  "Health Care",
  "Education",
  "Digital Health",
] as const;

export const WELCOME_TEXT =
  'Born & brought up in Tuticorin, a semi urban city on the southern coast of India by ambitious parents who gave the Best education to their son to see him as on Effective & Efficient Doctor for the Pearl City. I have fulfilled my parents wish by being a Gold medalist in MD (Medicine) and by my professional services over 45 years at Tuticorin as a Senior Physician with special expertise in cardiology & Intensive care. With the support of the people and professional colleagues, the present Sundaram Arulrhaj Hospital was born to be the first ISO 9001:2015 certified 100 Bedded Cardiac and Multi specialty Hospital with all Tertiary care Medical facilities under one roof.';

export const RESOURCES = [
  {
    title: "Medical Presentation",
    href: "https://drive.google.com/drive/u/4/folders/17qCxabF2tqVFSptzwcEu9PcNAVxGZjVl",
  },
  {
    title: "Research",
    href: "https://drive.google.com/drive/folders/13XhnedwsCPeNMqe7cOk0_KBsO3NaNYJL?usp=sharing",
  },
  {
    title: "Books",
    href: "https://drive.google.com/drive/folders/1r-Gd4erFBIeNYV_cqGhdCmdrpTfwN2lz?usp=sharing",
  },
  {
    title: "Health Documents",
    href: "https://drive.google.com/drive/folders/1aB_MG9bHPvXHbxSbDM0_to6v-yFXy1tX?usp=sharing",
  },
] as const;

export const PILLARS = [
  {
    title: "HEALTH CARE",
    body: 'Life style centres – "Health Wealth", Tuticorin.',
    style: "one" as const,
  },
  {
    title: "ENVIRONMENTAL",
    body: "Biogas extraction plant in Pipeline. Green Ozone",
    style: "two" as const,
  },
  {
    title: "EDUCATION",
    body: "Education is the most powerful weapon which you can use to change the world.",
    style: "three" as const,
  },
  {
    title: "ACADEMIC",
    body: "University First Rank holder and Gold Medal winner in MD (Internal Medicine).",
    style: "four" as const,
  },
] as const;

export const VIDEO_BLOCKS = [
  {
    title: "Medi Talk",
    embed: "https://www.youtube.com/embed/videoseries?list=PLMRdYyjqTxkG7uLe8EjhZjpW9WT98Y5Px",
    text: "Watch this Medi talk Playlist Watch this video in Tamil .",
  },
  {
    title: "Health Talk",
    embed: "https://www.youtube.com/embed/videoseries?list=PLMRdYyjqTxkFizVpjoNWNQvrCu6TaZElZ",
    text: "Watch this Health talk Playlist Watch this video in Tamil .",
  },
  {
    title: "NO TO MIXOPATHY",
    embed: "https://www.youtube.com/embed/RICvuc4lIjU",
    text: "Say No to Mixopathy watch this full video about mixopathy Watch this video in English .",
  },
  {
    title: "NO TO MIXOPATHY",
    embed: "https://www.youtube.com/embed/7xPnT3bweaQ",
    text: "Say No to Mixopathy watch this full video about mixopathy Watch this video in Tamil .",
  },
] as const;

export const MISSION_BLOCKS = {
  future: {
    title: "My Future Mission.",
    items: [
      "For my Hometown, Tuticorin: Rural Health University with Medical Facilities & Health Education services to the Semi Urban and Rural masses of south Tamilnadu.",
      'For my country, India: Health must be declared as fundamental right of Indians. Lobbying with Political & Professional leaders to enact "The Health Bill 2010 ", reaching Primary care and Emergency care Free to all citizen of India.',
      'Towards developing & under developed countries of Commonwealth: Healthy Commonwealth. Adopting Telehealth to "Reach the unreached"',
    ],
  },
  mission: {
    title: "My Mission.",
    items: [
      "Infections free Commonwealth. Effective & Efficient Waste management system for Hospital Waste, Solid Waste, Hazardous Waste, etc - Healthy Environment.",
      "Control & Prevent Non Communicable Disease epidemic through Diet control, increased Physical activities & Control of Harmful use of alcohol & smoking.",
      "Primary Health Care for all. Primary care is the backbone of the Health of Nation. Strengthening & making it reachable to population in the rural & urban areas equally.",
      "Secondary & Tertiary care affordable to low and middle income citizen.",
      "Life saving drugs & newer introductions in Treatments must be available with quality & affordable cost to the Common man.",
      "Accident & Emergency Medical Services to the victims within the Golden Hour.",
    ],
  },
} as const;
