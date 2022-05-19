import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Skills = () => {
  return (
    <>
      <div
        // style={{ background: "#F9E561" }}
        className="flex justify-center items-center bg-amber-300 lg:min-h-screen"
      >
        <div className="p-8 sm:p-16 flex flex-col gap-6 sm:flex-row items-center justify-between my-24 sm:mt-32 w-full max-w-7xl">
          <div className="sm:w-6/12 text-white ">
            <div className="bg-green-600 rounded h-24 my-4">
              <h1>Langauages</h1>
              <p>Javascript, Typescript, Python</p>
            </div>
            <div className="bg-green-600 rounded h-24 my-4"></div>
            <div className="bg-green-600 rounded h-24 my-4"></div>
          </div>
          <div className="sm:w-4/12">
            <img
              src="/imgs/skills.png"
              alt=""
              id="updown"
              className=" sm:-ml-16"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
