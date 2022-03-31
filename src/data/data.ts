const tabs = [
  "About", //life, education & techstack
  "Career",
  "Projects",
  "Contact",
];

const colors = ["apple-close", "apple-min", "apple-zoom", "indigo-500"];

const hoverStyles = colors.map(color => {
  return "hover:text-" + color;
})

const flairs = ["🙋‍♂️", "🖥️", "📋", "📱"];

export { tabs, colors, hoverStyles, flairs }