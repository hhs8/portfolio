interface TabProps {
  index: number;
  name: string;
  color: string;
  flair: string;
  tabChange: Function;
}

function Tab(props: TabProps) {
  const borderClass = props.index == 0 ? "tab-border-left tab-border-right " : "tab-border-right ";
  const tabClass =
    "text-lg tabs text-left font-medium mt-2 py-5 leading-4 px-6 ease-in-out duration-500 text-gray-500 cursor-pointer " +
    borderClass +
    props.color;

  const tabChange = () => {
    props.tabChange(props.index);
  }

  return <div className={tabClass} onClick={tabChange}><span className="pr-2">{props.flair}</span>{props.name}</div>;
}

export { Tab }
