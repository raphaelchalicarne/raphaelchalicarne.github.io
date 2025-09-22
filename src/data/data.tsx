import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon"
import heroImage from "../images/header-background.webp";
import chronobuses from "../images/portfolio/chronobuses.png";
import weatherapp from "../images/portfolio/weatherapp.png";
import environnement_5g from "../images/portfolio/environnement-5g.jpg";
import musicharts from "../images/portfolio/musicharts.png";
import dispo_velib_1 from "../images/portfolio/dispo_velib_1.png";
import dispo_velib_2 from "../images/portfolio/dispo_velib_2.png";
import f1_drivers from "../images/portfolio/f1_drivers.png";
import photo_profil_Malt from "../images/photo_profil_Malt.png";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "React Resume Template",
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Raphaël Chalicarne.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Lyon based{" "}
        <strong className="text-stone-100">Back-end Software Engineer</strong>,
        currently looking for a full-time position.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me{" "}
        <strong className="text-stone-100">cycling</strong>, or playing{" "}
        <strong className="text-stone-100">chess</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: photo_profil_Malt,
  description: `After graduating from École Centrale Lyon in 2021, I worked for three years as a back-end developer for the French startup Omie. I specialized myself in Ruby on Rails. The projects I worked on included API development and integration, improvements to the Spree e-commerce interface and data model design.`,
  aboutItems: [
    { label: "Location", text: "Lyon, France", Icon: MapIcon },
    { label: "Age", text: "28", Icon: CalendarIcon },
    { label: "Nationality", text: "French", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Cycling, Chess, Theater",
      Icon: SparklesIcon,
    },
    { label: "Study", text: "École Centrale de Lyon", Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "French",
        level: 10,
      },
      {
        name: "English",
        level: 7,
      },
      {
        name: "German",
        level: 4,
      },
      {
        name: "Portuguese",
        level: 4,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Ruby on Rails",
        level: 8,
      },
      {
        name: "JavaScript",
        level: 7,
      },
      {
        name: "PostgreSQL",
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Chronobuses",
    description: "An interactive map displaying the direct coach lines in Europe.",
    url: "https://raphaelchalicarne.github.io/chronobuses/",
    image: chronobuses,
  },
  {
    title: "Weather app",
    description: "A simple web app showing the current weather and a picture of any city.",
    url: "https://raphaelchalicarne.github.io/weather-app",
    image: weatherapp,
  },
  {
    title: "Environnement 5G",
    description: "A blog about the environnemental impact of the 5G.",
    url: "https://raphaelchalicarne.github.io/environnement-5g",
    image: environnement_5g,
  },
  {
    title: "Musicharts",
    description: "A data visualisation about the music listening habits in Europe and South America.",
    url: "https://observablehq.com/@raphaelchalicarne/musicharts?collection=@raphaelchalicarne/spotify",
    image: musicharts,
  },
  {
    title: "Disponibilité des stations Vélib sur une journée",
    description: "A data visualisation about the Vélib' availability over a day.",
    url: "https://observablehq.com/@raphaelchalicarne/disponibilite-des-stations-velib-sur-une-journee?collection=@raphaelchalicarne/velov",
    image: dispo_velib_1,
  },
  {
    title: "Stations vélos libre service Rio de Janeiro 🇧🇷 (temps réel)",
    description: "An observable notebook showing the realtime availability of self-service bicycles in 28 cities.",
    url: "https://observablehq.com/d/346e512bb80d06a4?collection=@raphaelchalicarne/velov",
    image: dispo_velib_2,
  },
  {
    title: "F1 Drivers 1997 - 2025",
    description: "An observable notebook showing the different teams in which competed the F1 drivers from 1997 to 2025.",
    url: "https://observablehq.com/@raphaelchalicarne/f1-drivers-1997-2021?collection=@observablehq/industrial",
    image: f1_drivers,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "April 2007",
    location: "Clown college",
    title: "Masters in Beer tasting",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
  {
    date: "March 2003",
    location: "School of Business",
    title: "What did you study 101",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2010 - Present",
    location: "Awesome Development Company",
    title: "Senior UX Engineer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies
        you have been working with, and anything else that would be useful for
        an employer to know.
      </p>
    ),
  },
  {
    date: "March 2007 - February 2010",
    location: "Garage Startup Studio",
    title: "Junior bug fixer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies
        you have been working with, and anything else that would be useful for
        an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "Here is a good spot for a message to your readers to let them know how best to reach out to you.",
  items: [
    {
      type: ContactType.Email,
      text: "raphael.chalicarne@outlook.com",
      href: "mailto:raphael.chalicarne@outlook.com",
    },
    {
      type: ContactType.Location,
      text: "Lyon, France",
      href: "https://www.openstreetmap.org/relation/120965",
    },
    {
      type: ContactType.Github,
      text: "raphaelchalicarne",
      href: "https://github.com/raphaelchalicarne",
    },
    {
      type: ContactType.LinkedIn,
      text: "raphael-chalicarne",
      href: "https://www.linkedin.com/in/raphael-chalicarne/",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/raphaelchalicarne" },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/raphael-chalicarne/",
  },
];
