import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Nav from "./components/nav";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="satoshi">
      <Nav />
      {/* Hero */}
      <section className="flex w-full h-[calc(100vh-106px)] justify-between px-[175px] items-center">
        <div className="w-[498px]">
          <h1 className="font-extrabold text-7xl text-gray-900">
            <div>Tyson</div>
            <div className="mt-2">Yoshikawa</div>
          </h1>
          <p className="text-xl pt-[40px] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
            pretium tellus duis convallis tempus leo eu aenean sed diam urna
            tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas
            iaculis massa nisl malesuada lacinia integer nunc posuere ut
            hendrerit semper vel class aptent taciti sociosqu ad litora torquent
            per.
          </p>
        </div>
        <div className="w-[420px]">
          <img
            src="/headshot.png"
            alt="Headshot"
            className="w-[420px] h-auto"
          />
          <div className="flex justify-between mt-[10px]">
            <div className="text-lg text-gray-600">
              tmy25@cornell.edu
              <br />
              <span className="underline">Resume</span>
            </div>
            <span className="flex">
              <a
                href="https://www.linkedin.com/in/tysonyoshikawa/"
                target="_blank"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-[44px] h-[44px] mr-[10px]"
                />
              </a>
              <a href="https://github.com/tysonyoshikawa06" target="_blank">
                <img
                  src="github.png"
                  alt="GitHub"
                  className="w-[44px] h-[44px]"
                />
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative w-4/5 mx-auto" id="projects">
        <div className="h-[2px] bg-gray-200"></div>
        <h2 className="font-bold text-3xl mt-4 text-gray-800">Projects</h2>

        {/* Vertical line */}
        <div className="absolute right-0 top-[300px] bottom-[300px] w-[1px] bg-gray-300"></div>

        <div className="text-center py-30">
          <div className="flex justify-center flex-col items-center relative ">
            <img
              src="platstem.png"
              alt="platstem.org"
              className="w-[680px] h-auto"
            />

            {/* Horizontal line */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[70px]">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="absolute top-[-1.5rem] left-0 text-sm text-gray-600 w-full text-left">
                July 2024
              </span>
            </div>

            <a href="https://platstem.org/" target="_blank">
              <h3 className="font-semibold text-2xl underline pt-3 text-gray-800 hover:text-gray-500">
                platstem.org
              </h3>
            </a>
            <p className="w-[65%] pt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis convallis tempus leo eu aenean sed diam urna
              tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas
              iaculis massa nisl malesuada lacinia integer nunc posuere ut
              hendrerit semper vel class aptent taciti sociosqu ad litora
              torquent per.
            </p>
          </div>

          <div className="flex justify-center flex-col items-center pt-32 relative">
            <img
              src="ocgroups.png"
              alt="OffCampusGroups"
              className="w-[680px] h-auto"
            />

            {/* Horizontal line */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[70px]">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="absolute top-[-1.5rem] left-0 text-sm text-gray-600 w-full text-left">
                Sep 2024
              </span>
            </div>

            <a href="https://github.com/wsonja/offCampusGroups" target="_blank">
              <h3 className="font-semibold text-2xl underline pt-3 text-gray-800 hover:text-gray-500">
                OffCampusGroups
              </h3>
            </a>
            <p className="w-[65%] pt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis convallis tempus leo eu aenean sed diam urna
              tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas
              iaculis massa nisl malesuada lacinia integer nunc posuere ut
              hendrerit semper vel class aptent taciti sociosqu ad litora
              torquent per.
            </p>
          </div>

          <div className="flex justify-center flex-col items-center pt-32 relative">
            <img
              src="asphalt.png"
              alt="Asphalt Case Study"
              className="w-[680px] h-auto"
            />

            {/* Horizontal line */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[70px]">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="absolute top-[-1.5rem] left-0 text-sm text-gray-600 w-full text-left">
                Feb 2025
              </span>
            </div>

            <a
              href="https://github.com/tysonyoshikawa06/asphalt-nme-sp25-tyson"
              target="_blank"
            >
              <h3 className="font-semibold text-2xl underline pt-3 text-gray-800 hover:text-gray-500">
                Asphalt Case Study
              </h3>
            </a>
            <p className="w-[65%] pt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis convallis tempus leo eu aenean sed diam urna
              tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas
              iaculis massa nisl malesuada lacinia integer nunc posuere ut
              hendrerit semper vel class aptent taciti sociosqu ad litora
              torquent per.
            </p>
          </div>
        </div>
      </section>
    </div>
  </StrictMode>
);
