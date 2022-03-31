import {
  textColors,
  hoverStyles,
  darkHoverStyles,
  decorations,
  flairs,
} from "../data/data";

interface TabProps {
  index: number;
  name: string;
  active: boolean;
  onClick: Function;
}

function Tab(props: TabProps) {
  const textClass = () => {
    const textStyle =
      "p-2 font-medium text-left cursor-pointer md:p-4 whitespace-nowrap ";
    const activeStyle = props.active
      ? textColors[props.index] + " underline "
      : " text-gray-700 dark:text-gray-300 ";

    const colors = ` ${hoverStyles[props.index]} ${
      darkHoverStyles[props.index]
    } ${decorations[props.index]}  `;

    const decoration =
      " hover:underline underline-offset-8 decoration-2 duration-300 ease-in-out";

    return textStyle + activeStyle + colors + decoration;
  };

  const tabChange = () => {
    props.onClick(props.index);
  };

  const keyTabChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter" || event.key == " ") {
      tabChange();
    }
  };

  return (
    <div
      tabIndex={0}
      className={textClass()}
      onClick={tabChange}
      onKeyPress={keyTabChange}
    >
      <span className="text-base md:text-lg lg:text-xl">
        {flairs[props.index]}
      </span>
      <span className="hidden lg:inline">&nbsp;</span>
      <span className="hidden text-xs md:inline md:text-base lg:text-lg">
        {props.name}
      </span>
    </div>
  );
}

export { Tab };
