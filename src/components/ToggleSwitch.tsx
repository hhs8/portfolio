import { ReactElement } from "react";

const sizes: { [key: string]: number } = {
  sm: 5,
  base: 6,
  lg: 8,
};

const sizeClass: { [key: string]: string } = {
  sm: "h-5 w-10",
  base: "h-6 w-12",
  lg: "h-8 w-16",
};

export default function ToggleSwitch(props: {
  label: string;
  size: string;
  value: boolean;
  background: string;
  checkedBackground: string;
  onToggle: Function;
  children: ReactElement[];
}) {
  const toggle = () => {
    props.onToggle(!props.value);
  };

  const size = sizes[props.size] ? sizes[props.size] : sizes["base"];

  const inputClass = () => {
    return (
      "bg-gray-300 bg-no-repeat bg-contain rounded-full appearance-none cursor-pointer toggle-switch-input " +
      sizeClass[props.size]
    );
  };

  const thumbStyle = {
    width: size * 4 - 1,
    height: size * 4 - 2,
    margin: "1px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: ".25s ease",
    transform: props.value ? "translateX(100%)" : "",
  };

  const inputBackground = {
    backgroundColor: props.value ? props.checkedBackground : props.background,
  };

  return (
    <div className="relative flex items-center px-3 ease-linear sm:py-1 md:py-3 duration-250 toggle-switch">
      <input
        className={inputClass()}
        type="checkbox"
        role="switch"
        checked={props.value}
        onChange={toggle}
        style={inputBackground}
      />
      <div className="absolute pointer-events-none" style={thumbStyle} />
      {props.children}
      <label className="text-gray-300 toggle-switch-label">{props.label}</label>
    </div>
  );
}
