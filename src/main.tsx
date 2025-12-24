import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Nav from "./components/nav";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="satoshi">
      <Nav />
      {/* Hero */}
      <section className="flex w-full min-h-[calc(100vh-106px)] justify-between px-6 md:px-12 lg:px-[175px] items-center flex-col md:flex-row py-10 lg:py-0">
        <div className="max-w-xl w-full mb-10 md:mb-0 md:pr-10">
          <div>
            <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-none">
              Tyson
              <div className="mt-2">Yoshikawa</div>
            </h1>
          </div>

          <p className="text-base sm:text-lg pt-6 sm:pt-10 text-gray-700">
            Hi! My name is Tyson, and I am a Sophomore studying Computer Science
            and Education at <b>Cornell University</b>. I'm passionate about
            educational technology and anything related to using software to
            drive social change. Outside of academics, I enjoy cooking, hitting
            the gym, and listening to music!
          </p>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0">
          <img
            src="/headshot.png"
            alt="Headshot"
            className="w-full h-auto shadow-lg mx-auto md:mx-0"
          />
          <div className="flex flex-col sm:flex-row justify-between mt-3 sm:mt-[10px] text-center sm:text-left">
            <div className="text-lg text-gray-600">
              tmy25@cornell.edu
              <br />
              <span className="underline hover:text-gray-500">
                <a
                  href="https://docs.google.com/document/d/1Y637g9_FWVhkjgH9nHLHI0MiHJEbPNkm/edit"
                  target="_blank"
                >
                  Resume
                </a>
              </span>
            </div>
            <span className="flex justify-center sm:justify-end mt-3 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/tysonyoshikawa/"
                target="_blank"
                className="mr-3 hover:opacity-80"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-[36px] sm:w-[44px] h-auto"
                />
              </a>
              <a
                href="https://github.com/tysonyoshikawa06"
                target="_blank"
                className="hover:opacity-80"
              >
                <img
                  src="github.png"
                  alt="GitHub"
                  className="w-[36px] sm:w-[44px] h-auto"
                />
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative w-11/12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-[2px] bg-gray-300 timeline"></div>
        <h2 className="font-bold text-2xl sm:text-3xl mt-4 text-gray-800">
          Projects
        </h2>

        <div className="absolute right-0 top-[300px] bottom-[300px] w-[1px] bg-gray-300 hidden lg:block timeline"></div>

        <div className="text-center py-15 sm:py-15" id="recent-project">
          {[
            {
              src: "platstem.png",
              alt: "platstem.org",
              date: "July 2024",
              title: "platstem.org",
              link: "https://platstem.org/",
              stack: "HTML, CSS, Bootstrap, JavaScript",
              desc: `Platstem.org was my first attempt at building an deploying software onto the internet. Made with simple technologies, platstem.org is a website with over one hundred different science resources for high school students to explore, giving students a way to explore complex scientific topics not traditionally taught at the high school level.`,
            },
            {
              src: "ocgroups.png",
              alt: "OffCampusGroups",
              date: "Sep 2024",
              title: "OffCampusGroups",
              link: "https://off-campus-groups.vercel.app/",
              stack:
                "React, TypeScript, Node.js, Tailwind CSS, Firebase, OAuth",
              desc: `Built as a class project at Cornell, OffCampusGroups is an app designed to help students find groups to go with to large off-campus events (concerts, networking events, etc.).`,
            },
            {
              src: "pathos.png",
              alt: "PathOS.earth",
              date: "Feb 2025",
              title: "PathOS.earth",
              link: "https://www.pathos.earth/",
              stack: "React, Next.js, TypeScript, Node.js, Flask, Python, AWS",
              desc: (
                <>
                  PathOS is a tool developed by Cornell's{" "}
                  <u className="hover:text-gray-500">
                    <a
                      href="https://www.joingreenclub.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GreenClub
                    </a>
                  </u>{" "}
                  to help minimize emissions on waste transport routes. PathOS
                  uses a heuristic load dependent vehicle routing problem
                  algorithm deployed on AWS to allow stakeholders to optimize
                  their routes based on distance and stop loads.
                </>
              ),
            },
            {
              src: "valence.png",
              alt: "Valence",
              date: "May 2025",
              title: (
                <>
                  <div>Valence</div>
                </>
              ),
              link: "https://github.com/tysonyoshikawa06/valence",
              stack:
                "React, Next.js, TypeScript, Node.js, Tailwind CSS, Cytoscape.js, Express, Supabase, OAuth, OpenAI API",
              desc: (
                <>
                  I'm currently building{" "}
                  <u className="hover:text-gray-500">
                    <a
                      href="https://docs.google.com/presentation/d/19QcAWFcrui7778SaAjXAdiUdlfUM_zuHWGm2gOXasW0/edit?slide=id.g2747bfd1ede_0_44#slide=id.g2747bfd1ede_0_44"
                      target="_blank"
                    >
                      Valence
                    </a>
                  </u>
                  , a web application that leverages AI to help the 52% of
                  struggling high school students to better understand
                  intra-subject relations in science. Users are encouraged to
                  talk to an AI tutor to unlock new topics and progress through
                  the interactive graph by asking deep questions and
                  demonstrating systems thinking.
                </>
              ),
            },
          ]
            .reverse()
            .map((proj, idx) => (
              <div
                className="flex justify-center flex-col items-center pt-20 sm:pt-32 relative"
                key={idx}
              >
                <span className="text-sm text-gray-600 pb-1 block lg:hidden">
                  {proj.date}
                </span>
                <img
                  src={proj.src}
                  alt={proj.alt}
                  className="w-full max-w-2xl h-auto "
                />

                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[70px] hidden lg:block">
                  <div className="w-full h-[1px] bg-gray-300 timeline"></div>
                  <span className="absolute top-[-1.5rem] left-0 text-sm text-gray-600 w-full text-left">
                    {proj.date}
                  </span>
                </div>

                <a href={proj.link} target="_blank">
                  <h3 className="font-semibold text-xl sm:text-2xl underline pt-3 text-gray-800 hover:text-gray-500">
                    {proj.title}
                  </h3>
                </a>
                <p className="pt-1 text-gray-700">
                  <em>{proj.stack}</em>
                </p>
                <p className="w-full max-w-2xl pt-3 text-gray-700 px-4 sm:px-0">
                  {proj.desc}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  </StrictMode>
);
