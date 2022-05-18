import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import navLinks from "../js/navlinks";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent  lg:hidden">
        <div className="w-full text-white shadow-lg p-4 px-6 flex items-center justify-between bg-gray-900">
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            to={`introduction`}
          >
            <div className="flex justify-center items-center gap-2 cursor-pointer ">
              <div className="flex justify-center items-center">
                <img src="/imgs/logo.png" className="w-16" />
              </div>
              <h1 className="font-extrabold text-lg">Santanu Ghosh</h1>
            </div>
          </ScrollLink>

          <MenuIcon
            onClick={() => setOpenMenu(true)}
            className=" text-white w-8"
          />
        </div>
      </div>

      <div
        className={`transition-all duration-200 ease-out  min-h-full fixed top-0 right-0 overflow-hidden flex items-left backdrop-blur-xl bg-black/30 z-50 lg:hidden ${
          openMenu ? "w-80 opacity-100" : "w-0 opacity-0"
        } `}
      >
        <div className=" flex flex-col justify-between px-8 py-6 w-full">
          <div className=" flex justify-between items-center">
            <ScrollLink
              spy={true}
              smooth={true}
              duration={500}
              to={`introduction`}
            >
              <div className="">
                <div className="">
                  <img src="/imgs/logo.png" className="w-16 -ml-2" />
                </div>
                {/* <h1 className="font-extrabold text-lg text-white">
                  Santanu Ghosh
                </h1> */}
              </div>
            </ScrollLink>

            <XIcon
              onClick={() => setOpenMenu(false)}
              className=" text-white w-8"
            />
          </div>
          <div className="flex flex-col items-left mt-3 font-bold text-xl text-white">
            {navLinks.map((nlink, i) => (
              <div className="cursor-pointer font-thin my-1" key={i}>
                <ScrollLink
                  activeClass="text-green-300"
                  to={`${nlink.route}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                  // offset={-150}
                >
                  {nlink.name}
                </ScrollLink>
              </div>
            ))}
          </div>
          <div className=" flex-1"></div>
          <div className=" flex justify-center ">
            <a href="/Assets/resume.pdf" target="blank" className="w-full">
              <button
                style={{ color: "#264143" }}
                className="p-2 px-12 shadow font-semibold w-full  bg-white rounded"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
