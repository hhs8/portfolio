import { useState } from "react";
import { Tab } from "./Tab";
import { ThemeButton } from "./ThemeButton";
import { tabs } from "../data/data";
import Favicon from "../favicon.svg";

function TabPanel(props: { tabChange: Function }) {
  const [curTab, setCurTab] = useState(0);

  const tabChange = (idx: number) => {
    props.tabChange(idx);
    setCurTab(idx);
  };

  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 p-2 mr-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
        src={Favicon}
        title="This is my initials!"
        alt="Site logo - my initials"
        aria-label="Site logo"
      />
      <div className="flex-1" />
      {tabs.map((tab, idx) => {
        return (
          <Tab
            index={idx}
            name={tab}
            key={idx}
            active={curTab == idx}
            onClick={tabChange}
          />
        );
      })}
      <ThemeButton />
    </div>
  );
}

export { TabPanel };
