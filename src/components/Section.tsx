import { ReactElement, useEffect, useRef, useState } from "react";
import { tabs, textColors, hoverStyles } from "../data/data";

interface SectionProp {
  index: number;
  cur: number;
  children: ReactElement | ReactElement[];
}

function Section(props: SectionProp) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (props.index == props.cur) {
      scrollToRef();
    }
  }, [props.cur]);

  const divRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    divRef.current?.scrollIntoView();
  };

  const h1Class = () => {
    const mouseOnSection = hover ? textColors[props.index] : "";
    return (
      "my-2 text-4xl font-bold uppercase text-gray-500 ease-linear duration-300 " +
      mouseOnSection +
      " " +
      hoverStyles[props.index]
    );
  };

  const renderH1 = () => {
    if (props.index != 10) {
      return <h1 className={h1Class()}>{tabs[props.index]}</h1>;
    }
    return <></>;
  };

  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div ref={divRef} className="my-8 text-2xl text-left">
        {renderH1()}
        <div className="my-4">{props.children}</div>
      </div>
    </section>
  );
}

export { Section };
