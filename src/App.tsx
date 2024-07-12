import { useState } from "react";
import "./App.css";
import { TabPanel } from "./components/TabPanel";
import { Section } from "./components/Section";
import { LandingBanner } from "./components/LandingBanner";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Gmail from "./data/gmail.png";

function App() {
  const [curTab, setCurTab] = useState(15);

  const appClass = () => {
    const fixedClass =
      "overflow-y-auto duration-300 ease-in-out App scroll-smooth bg-light-canvas dark:bg-dark-canvas";
    const showScrollbar = window.innerWidth > 500 ? " show-scrollbar" : "";
    return fixedClass + showScrollbar;
  };

  return (
    <div className={appClass()}>
      <div className="sticky top-0 z-10 duration-300 ease-in-out shadow-lg bg-light-canvas TabPanel dark:bg-dark-canvas shadow-indigo-500/50">
        <div className="mx-auto 2xl:w-1/2 xl:w-2/3 lg:w-3/5 max-w-7xl">
          <TabPanel tabChange={setCurTab} />
        </div>
      </div>

      <div className="mx-auto 2xl:w-1/2 xl:w-2/3 lg:w-3/5 max-w-7xl">
        <div className="duration-300 ease-in-out App-content scroll-smooth text-slate-900 dark:text-white">
          <div className="px-4 m-auto">
            <Section index={-1} cur={curTab}>
              <LandingBanner />
            </Section>
            <Section index={0} cur={curTab}>
              <div>
                <div className="text-4xl font-bold">HONSING</div>
                <div className="text-xl opacity-70">Fullstack Developer</div>
                <p className="my-4">
                  Hi, I'm Honsing, a Fullstack Software Developer based in
                  Malaysia. I studied in Computer Science. This is my personal
                  website where I talk a little bit about myself, and as a
                  platform to showcase my skillsets and perhaps demonstrate my
                  abilities.
                </p>
                <p className="my-4">
                  You can ask me all sorts of questions, and probably I have an
                  answer or I can point to a direction for you :)
                </p>

                <ul className="my-4">
                  <li>✅ PC building/hardware-related inquiries</li>
                  <li>✅ Programming questions</li>
                  <li>✅ Mechanical keyboard enthusiast (newbie)</li>
                  <li>✅ Problem solving</li>
                </ul>
              </div>
            </Section>
            <Section index={1} cur={curTab}>
              <div>
                <p className="my-4">
                  As a Fullstack Developer, I have worked on numerous projects,
                  including some R&amp;D tasks and client projects for my
                  previous employer.
                  <ul className="my-4">
                    <li>
                      <p className="text-xl font-bold text-fuchsia-500">
                        First Year
                      </p>
                      <ul>
                        <li>Machine learning with Python &amp; Keras</li>
                        <li>Build a new front end for a legacy system</li>
                      </ul>
                    </li>
                    <li>
                      <p className="text-xl font-bold text-fuchsia-500">
                        Second Year
                      </p>
                      <ul>
                        <li>
                          New company initiative (baseline) - ui, backend,
                          database, deployment
                        </li>
                        <li>Customer project - frontend revamp</li>
                      </ul>
                    </li>
                    <li>
                      <p className="text-xl font-bold text-fuchsia-500">
                        Third year
                      </p>
                      <ul>
                        <li>
                          Customer project - backend enhancements (C# and SQL)
                        </li>
                        <li>New project - mobile development with Flutter</li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <p className="text-xl font-bold">My techstack</p>
                <ul>
                  <li>Python</li>
                  <li>Javascript/Typescript</li>
                  <li>JS Frameworks - React &amp; VueJS</li>
                  <li>SASS &amp; TailwindCSS</li>
                  <li>Java Spring</li>
                  <li>MSSQL &amp; PostgreSQL</li>
                  <li>Linux, Docker, Kubernetes</li>
                </ul>
                <div className="my-8" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                blandit nisl ac neque euismod hendrerit. Phasellus aliquam
                congue dui, non porta ligula bibendum vitae. Ut arcu tellus,
                sodales quis quam a, elementum auctor velit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Duis id neque
                tortor. Etiam interdum viverra feugiat. Quisque sed diam lectus.
                Duis arcu urna, eleifend sed justo id, finibus imperdiet ligula.
                Pellentesque ullamcorper et purus sed tristique. Pellentesque
                sed diam in diam viverra mattis. Morbi condimentum mollis
                tellus, iaculis facilisis sapien semper eget. Suspendisse porta
                sapien vitae arcu hendrerit tincidunt. Donec commodo dapibus
                egestas. Integer ac est fermentum, aliquet elit id, ullamcorper
                nisi. Integer sed iaculis ligula. Praesent ipsum mi, tincidunt
                ac aliquam tincidunt, blandit non neque. Maecenas nulla metus,
                porta eu leo sed, varius faucibus massa. Suspendisse molestie
                purus a tellus porta, vitae convallis quam tempus. Donec sed
                congue tellus, id tincidunt tortor. Mauris augue tellus, auctor
                non tempor sit amet, finibus id justo. Sed sapien magna, feugiat
                quis dui vel, tincidunt consequat lorem. Suspendisse a euismod
                quam. Nam accumsan vulputate elementum. Etiam sed felis commodo,
                tempus metus convallis, accumsan urna. Quisque tempus auctor est
                et pellentesque. Fusce ut varius ante. Ut cursus suscipit ex, et
                pulvinar neque cursus consequat. Praesent sed feugiat dolor.
                Vestibulum eget euismod nisi. In in urna vitae est lobortis
                ultricies. Vestibulum convallis id sem et rhoncus. Sed nec
                lacinia augue. Cras blandit mattis justo, ultricies scelerisque
                diam lacinia ac.
              </div>
            </Section>
            <Section index={2} cur={curTab}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                blandit nisl ac neque euismod hendrerit. Phasellus aliquam
                congue dui, non porta ligula bibendum vitae. Ut arcu tellus,
                sodales quis quam a, elementum auctor velit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Duis id neque
                tortor. Etiam interdum viverra feugiat. Quisque sed diam lectus.
                Duis arcu urna, eleifend sed justo id, finibus imperdiet ligula.
                Pellentesque ullamcorper et purus sed tristique. Pellentesque
                sed diam in diam viverra mattis. Morbi condimentum mollis
                tellus, iaculis facilisis sapien semper eget. Suspendisse porta
                sapien vitae arcu hendrerit tincidunt. Donec commodo dapibus
                egestas. Integer ac est fermentum, aliquet elit id, ullamcorper
                nisi. Integer sed iaculis ligula. Praesent ipsum mi, tincidunt
                ac aliquam tincidunt, blandit non neque. Maecenas nulla metus,
                porta eu leo sed, varius faucibus massa. Suspendisse molestie
                purus a tellus porta, vitae convallis quam tempus. Donec sed
                congue tellus, id tincidunt tortor. Mauris augue tellus, auctor
                non tempor sit amet, finibus id justo. Sed sapien magna, feugiat
                quis dui vel, tincidunt consequat lorem. Suspendisse a euismod
                quam. Nam accumsan vulputate elementum. Etiam sed felis commodo,
                tempus metus convallis, accumsan urna. Quisque tempus auctor est
                et pellentesque. Fusce ut varius ante. Ut cursus suscipit ex, et
                pulvinar neque cursus consequat. Praesent sed feugiat dolor.
                Vestibulum eget euismod nisi. In in urna vitae est lobortis
                ultricies. Vestibulum convallis id sem et rhoncus. Sed nec
                lacinia augue. Cras blandit mattis justo, ultricies scelerisque
                diam lacinia ac.
              </div>
            </Section>
            <Section index={3} cur={curTab}>
              <p>
                If you are interested in sharing your opinion or feedback to me,
                feel free to drop me a message via any of the following
                channels. 😉
              </p>

              <div className="flex items-center my-2">
                <img src={Gmail} className="mr-4" width={24} height={18} />
                <a
                  href="mailto:honsingwork@gmail.com"
                  className="underline duration-200 ease-linear decoration-4 underline-offset-4 hover:decoration-emerald-500"
                >
                  Gmail
                </a>
              </div>
              <div className="flex items-center my-2">
                <FaGithub className="mr-4 duration-200 ease-in dark:text-white text-slate-900" />
                <a
                  href="https://github.com/hhs8"
                  className="underline duration-200 ease-linear decoration-4 underline-offset-4 hover:decoration-pink-500"
                >
                  hhs8 (Honsing)
                </a>
              </div>
              <div className="flex items-center my-2">
                <FaLinkedin className="mr-4 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/honsing-ho/"
                  className="underline duration-200 ease-linear decoration-4 underline-offset-4 hover:decoration-indigo-500"
                >
                  Honsing Ho
                </a>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
