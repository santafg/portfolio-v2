import React from "react";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <>
      <div
        // style={{ background: "#F9E561" }}
        className="flex justify-center items-center bg-orange-300 text-amber-900"
      >
        <div className="p-8 sm:p-16 flex flex-col gap-6 sm:flex-row items-center justify-between min-h-screen mt-12 w-full max-w-7xl">
          <div className="sm:w-5/12">
            <img src="/imgs/about.png" alt="" id="updown" />
          </div>
          <div className="sm:w-6/12 ">
            <h1 className="text-3xl lg:text-5xl">About Me </h1>

            <p className="text-base lg:text-md font-light mt-4 mb-8">
              I'm from Saltlake city (Kolkata) , completed my B.Tech in the
              field Electrical Engineering , beside that I have a great
              potential towards Web Devlopment . I started learning Web
              Devlopment from Year 2020 and fell in love with the concepts of
              Web Devlopment and then started exploring the technologies like
              'Reactjs' , 'Nodejs' , 'Expressjs' , 'MongoDB' , after gathering
              some basic knowledge about those technologies I started to build
              my own projects .
            </p>
            <div>
              <ScrollLink to={`skills`}>
                <button
                  // style={{ color: "#2ECC71" }}
                  className="p-2 px-12 shadow-lg font-semibold bg-white rounded border  "
                >
                  My Skills
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
