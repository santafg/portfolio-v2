import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Introduction = () => {
  return (
    <>
      <div
        // style={{ background: "#eddcd9" }}
        className="flex justify-center items-center bg-green-200 text-indigo-100 min-h-screen"
        style={{
          backgroundImage: "url(" + `/imgs/bgintro2.jpg` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div className="p-8  flex flex-col-reverse gap-24 sm:p-16 sm:gap-0 sm:flex-row items-center justify-between my-24 sm:mt-32 w-full max-w-7xl ">
          <div className="sm:w-6/12 ">
            <h1 className="text-2xl lg:text-4xl">Hello !</h1>
            <h1 className=" text-4xl lg:text-6xl my-2">
              I&apos;m Santanu Ghosh
            </h1>
            <p className="text-md lg:text-xl mb-8">A Fullstack Web Developer</p>
            <div>
              <ScrollLink
                to={`about`}
                spy={true}
                // offset={-150}
                smooth={true}
                duration={500}
              >
                <button
                  // style={{ color: "#264143" }}
                  className="p-2 px-12 shadow-lg font-semibold outline-none  rounded bg-black  "
                >
                  Know me
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="sm:w-3/12 ">
            <img
              src="/imgs/mypic.webp"
              alt=""
              id="myimg"
              className="rounded-2xl drop-shadow-xl w-10/12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
