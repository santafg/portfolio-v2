import { Link as ScrollLink } from "react-scroll";
import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Introduction",
      route: "introduction",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Skills",
      route: "skills",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];
  return (
    <>
      <div className="p-8 hidden lg:flex fixed top-0 left-0 w-full z-50 bg-white">
        <div
          style={{ background: "#2ECC71" }}
          className=" w-full text-white shadow-lg rounded-lg p-4 px-6 flex items-center justify-between"
        >
          <ScrollLink to={`inroduction`}>
            <div className="flex justify-center items-center gap-2 ">
              <div className="flex justify-center items-center">
                <img src="/imgs/logo.png" className="w-16" />
              </div>
              <h1 className="font-extrabold text-lg">Santanu Ghosh</h1>
            </div>
          </ScrollLink>
          <div className="flex items-center">
            <div className="flex items-center gap-8 mr-8">
              {navLinks.map((nlink, i) => (
                <div key={i}>
                  <ScrollLink
                  className="cursor-pointer"
                    // activeClass="active"
                    to={`${nlink.route}`}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-150}
                  >
                    {nlink.name}
                  </ScrollLink>
                </div>
              ))}
            </div>
            <div>
              <a href="/Assets/resume.pdf" target="blank">
                <button
                  style={{ color: "#2ECC71" }}
                  className="p-2 px-12 shadow font-semibold bg-white rounded"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
