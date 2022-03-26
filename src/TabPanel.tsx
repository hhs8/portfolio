import { Tab } from "./Tab";
import WindowButtons from "./WindowButtons";

const tabs = [
  "About", //life, education & techstack
  "Career",
  "Projects",
  "Contact",
];

const colors = [
  "hover:text-rose-600",
  "hover:text-lime-500",
  "hover:text-amber-400",
  "hover:text-indigo-500",
];

const flairs = ["🙋‍♂️", "🖥️", "📋", "📱"];

export default function TabPanel(props: { tabChange: Function }) {
  const tabChange = (idx: number) => {
    props.tabChange(idx);
  };

  return (
    <div className="flex TabPanel bg-apple-tab">
      <WindowButtons />
      <div className="flex overflow-x-auto">
        {colors.map((color, idx) => {
          return (
            <Tab
              index={idx}
              name={tabs[idx]}
              color={color}
              flair={flairs[idx]}
              key={idx}
              tabChange={tabChange}
            />
          );
        })}
      </div>
    </div>
  );
}
