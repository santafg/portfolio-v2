import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Introduction = () => {
  return (
    <>
      <div className="p-4 sm:flex items-center ">
        <div className="sm:w-7/12">
          <img src="/imgs/hello.png" alt="" id="updown" />
        </div>
        <div className="sm:w-5/12 text-green-600">
          <h1 className="text-2xl lg:text-4xl">Hello !</h1>
          <h1 className=" text-4xl lg:text-6xl my-2">I&apos;m Santanu Ghosh</h1>
          <p className="text-md lg:text-xl mb-8">A Fullstack Web Developer</p>
          <div>
            <ScrollLink to={`about`}>
              <a>
                <button
                  style={{ color: "#2ECC71" }}
                  className="p-2 px-12 shadow-lg font-semibold bg-white rounded border border-green-400 "
                >
                  Know me
                </button>
              </a>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
