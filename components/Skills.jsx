import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Skills = () => {
  return (
    <>
      <div
        // style={{ background: "#F9E561" }}
        className="flex justify-center items-center bg-amber-300"
      >
        <div className="p-4 sm:p-16 sm:flex items-center min-h-screen mt-12">
          <div className="sm:w-5/12 text-green-600">
            <h1 className="text-2xl lg:text-4xl">Hello !</h1>
            <h1 className=" text-4xl lg:text-6xl my-2">
              I&apos;m Santanu Ghosh
            </h1>
            <p className="text-md lg:text-xl mb-8">A Fullstack Web Developer</p>
            <div>
              <ScrollLink
                to={`projects`}
                spy={true}
                offset={-150}
                smooth={true}
                duration={500}
              >
                <button
                  style={{ color: "#2ECC71" }}
                  className="p-2 px-12 shadow-lg font-semibold bg-white rounded border border-green-400 "
                >
                  Projects
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="sm:w-7/12">
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
