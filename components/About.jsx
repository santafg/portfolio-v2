import React from "react";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <>
      <div className="p-4 sm:p-20 sm:flex items-center ">
        <div className="sm:w-6/12 text-green-600">
          <h1 className="text-2xl lg:text-4xl">About Me </h1>

          <p className="text-base lg:text-md mt-4 mb-8">
            I'm from Saltlake city (Kolkata) , completed my B.Tech in the field
            Electrical Engineering , beside that I have a great potential
            towards Web Devlopment . I started learning Web Devlopment from Year
            2020 and fell in love with the concepts of Web Devlopment and then
            started exploring the technologies like 'Reactjs' , 'Nodejs' ,
            'Expressjs' , 'MongoDB' , after gathering some basic knowledge about
            those technologies I started to build my own projects .
          </p>
          <div>
            <ScrollLink to={`skills`}>
              <button
                style={{ color: "#2ECC71" }}
                className="p-2 px-12 shadow-lg font-semibold bg-white rounded border border-green-400 "
              >
                My Skills
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="sm:w-6/12">
          <img src="/imgs/about.png" alt="" id="updown" />
        </div>
      </div>
    </>
  );
};

export default About;
