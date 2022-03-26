import { useEffect, useRef } from "react";

interface SectionProp {
  id: string;
  index: number;
  cur: number;
  colors: Array<string>,
  tabs: string[]
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
    const alignment = props.index % 2 == 0 ? "text-left float-left" : "text-right float-right";
    return "w-3/4 text-2xl my-3 " + alignment;
  }

  const h1Class = () => {
    return "my-2 text-4xl font-bold uppercase text-gray-500 ease-in-out duration-500 hover:" + props.colors[props.index];
  }

  return (
    <div>
      <div id={props.id} ref={myRef} className={sectionClass()}>
        <h1 className={h1Class()}>{props.id}</h1>
        <div className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit
          nisl ac neque euismod hendrerit. Phasellus aliquam congue dui, non porta
          ligula bibendum vitae. Ut arcu tellus, sodales quis quam a, elementum
          auctor velit. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Duis id neque tortor. Etiam interdum viverra feugiat. Quisque
          sed diam lectus. Duis arcu urna, eleifend sed justo id, finibus imperdiet
          ligula. Pellentesque ullamcorper et purus sed tristique. Pellentesque sed
          diam in diam viverra mattis. Morbi condimentum mollis tellus, iaculis
          facilisis sapien semper eget. Suspendisse porta sapien vitae arcu
          hendrerit tincidunt. Donec commodo dapibus egestas. Integer ac est
          fermentum, aliquet elit id, ullamcorper nisi. Integer sed iaculis ligula.
          Praesent ipsum mi, tincidunt ac aliquam tincidunt, blandit non neque.
          Maecenas nulla metus, porta eu leo sed, varius faucibus massa. Suspendisse
          molestie purus a tellus porta, vitae convallis quam tempus. Donec sed
          congue tellus, id tincidunt tortor. Mauris augue tellus, auctor non tempor
          sit amet, finibus id justo. Sed sapien magna, feugiat quis dui vel,
          tincidunt consequat lorem. Suspendisse a euismod quam. Nam accumsan
          vulputate elementum. Etiam sed felis commodo, tempus metus convallis,
          accumsan urna. Quisque tempus auctor est et pellentesque. Fusce ut varius
          ante. Ut cursus suscipit ex, et pulvinar neque cursus consequat. Praesent
          sed feugiat dolor. Vestibulum eget euismod nisi. In in urna vitae est
          lobortis ultricies. Vestibulum convallis id sem et rhoncus. Sed nec
          lacinia augue. Cras blandit mattis justo, ultricies scelerisque diam
          lacinia ac.
        </div>
      </div>
    </div>
  );
}

export { Section }
