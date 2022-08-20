import { useState } from "react";
import {
  textColors,
  hoverStyles,
  darkHoverStyles,
  flairs,
  bottomBorders,
} from "../data/data";

interface TabProps {
  index: number;
  name: string;
  active: boolean;
  onClick: (index: number) => void;
}

export const Tab = (props: TabProps) => {
  const [hover, setHover] = useState(false);

  const textClass = () => {
    const textStyle =
      "p-2 font-medium text-left cursor-pointer whitespace-nowrap flex items-center ";

    const activeStyle = props.active
      ? textColors[props.index] + " border-b-4 "
      : " text-gray-700 dark:text-gray-300 ";

    const colors = ` ${hoverStyles[props.index]} ${
      darkHoverStyles[props.index]
    } ${bottomBorders[props.index]} `;

    return (
      textStyle +
      activeStyle +
      colors +
      " transition-colors duration-300 ease-linear hover:border-b-4"
    );
  };

  const tabChange = () => {
    props.onClick(props.index);
  };

  const keyTabChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter" || event.key == " ") {
      tabChange();
    }
  };

  const tooltipClass = () => {
    const style = hover ? "block" : "hidden";
    return (
      style +
      " md:hidden absolute top-9 -left-4 text-slate-50 dark:text-slate-900 text-sm font-normal bg-dark-canvas dark:bg-light-canvas rounded-lg py-1 px-2 opacity-70"
    );
  };

  return (
    <div
      tabIndex={0}
      className={textClass()}
      onClick={tabChange}
      onKeyPress={keyTabChange}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        <img
          src={flairs[props.index]}
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 "
        />
        <span className={tooltipClass()}>{props.name}</span>
      </div>
      <span className="hidden lg:inline">&nbsp;</span>
      <span className="hidden text-xs md:inline md:text-base lg:text-lg">
        {props.name}
      </span>
    </div>
  );
};
