import phone from "../data/phone.png";
import blueprint from "../data/blueprint.png";
import work from "../data/work.png";
import workstation from "../data/workstation.png";

const tabs = [
  "About", //life, education & techstack
  "Career",
  "Projects",
  "Contact",
];

const textColors = ["text-apple-close", "text-apple-min", "text-apple-zoom", "text-indigo-500"];

const hoverStyles = ["hover:text-apple-close", "hover:text-apple-min", "hover:text-apple-zoom", "hover:text-indigo-500"];

const darkHoverStyles = ["dark:hover:text-apple-close", "dark:hover:text-apple-min", "dark:hover:text-apple-zoom", "dark:hover:text-indigo-500"];

const decorations = ["decoration-apple-close", "decoration-apple-min", "decoration-apple-zoom", "decoration-indigo-500"];

const flairs = [work, workstation, blueprint, phone];

export { tabs, textColors, hoverStyles, darkHoverStyles, decorations, flairs }