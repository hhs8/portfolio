import { ReactElement, useEffect, useRef } from "react";
import { hoverStyles } from "../data/data";

interface SectionProp {
  id: string;
  index: number;
  cur: number;
  children: ReactElement | ReactElement[];
}

function Section(props: SectionProp) {
  useEffect(() => {
    if (props.index == props.cur) {
      scrollToRef();
    }
  }, [props.cur]);

  const myRef = useRef<null | HTMLDivElement>(null);

  const scrollToRef = () => {
    myRef?.current?.scrollIntoView();
  };

  const sectionClass = () => {
    const alignment =
      props.index % 2 == 0 ? "text-left float-left" : "text-right float-right";
    return "w-3/4 text-2xl my-3 pt-16 " + alignment;
  };

  const h1Class = () => {
    return (
      "my-2 text-4xl font-bold uppercase text-gray-500 ease-in-out duration-500 " +
      hoverStyles[props.index]
    );
  };

  return (
    <section>
      <div id={props.id} ref={myRef} className={sectionClass()}>
        <h1 className={h1Class()}>{props.id}</h1>
        <div className="my-4">{props.children}</div>
      </div>
    </section>
  );
}

export { Section };
