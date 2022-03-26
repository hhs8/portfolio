import { useEffect, useState } from "react";
import "./App.css";
import TabPanel from "./TabPanel";
import {Section} from "./Section";

function App() {
  const [curTab, setCurTab] = useState(0);

  const colors = [
    "text-indigo-500",
    "text-rose-600",
    "text-amber-400",
    "text-lime-500",
    // "hover:text-purple-500",
  ];

  const tabs = [
    // "<About/>",
    // "<Tech Stack/>",
    // "<Projects/>",
    // "<Contact/>",
    "About",
    "Tech Stack",
    "Projects",
    "Contact",
  ];

  return (
    <div className="App scroll-smooth">
      <TabPanel tabChange={setCurTab} />
      <div className="overflow-y-auto App-content scroll-smooth">
        <div className="px-4 m-auto xl:w-3/4">
          <Section id="about" index={0} colors={colors} tabs={tabs} cur={curTab} />
          <Section id="career" index={1} colors={colors} tabs={tabs} cur={curTab} />
          <Section id="projects" index={2} colors={colors} tabs={tabs} cur={curTab} />
          <Section id="contact" index={3} colors={colors} tabs={tabs} cur={curTab} />
        </div>
      </div>
      {/* <header className="App-content">
        <div className="flex gap-4 px-24">
          <div className="flex-1"/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <button className="px-6 mr-6 bg-indigo-300 rounded-lg">Save Changes</button>
          <button type="button" className="px-6 bg-indigo-500 rounded-full" onClick={() => setCount((cnt) => cnt + 1)}>
            count is: {count}
          </button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <div className="p-5 m-4 bg-gray-700 rounded-lg Sample-article">
          <p>
            I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at <a className="underline decoration-sky-500">My Company, Inc</a>.
            Outside of work, I like to <a className="underline decoration-pink-500">watch
            pod-racing</a> and have <a className="underline decoration-indigo-500">light-saber</a> fights.
          </p>
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <div>
          <button type="button" className="px-6 bg-indigo-700 rounded-full" onClick={() => setCount(0)}>
            Reset count
          </button>
        </div>
      </header> */}
    </div>
  );
}

export default App;
