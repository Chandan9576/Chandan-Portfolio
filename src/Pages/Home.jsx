import React from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="h-full md:h-screen w-full pt-40 md:pt-0 flex flex-col-reverse items-center md:justify-evenly gap-y-15  md:flex-row px-10">
        <div className="text-white text-3xl font-bold md:text-6xl space-y-3 text-center md:text-start md:w-155">
          <p className="">Hello, I'm Chandan</p>
          <p className="">
            <TypeAnimation
              sequence={[
                "Full Stack Web Devloper.",
                1000,
                "Software Devloper.",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-2xl text-[#d1fa02] md:text-5xl"
            ></TypeAnimation>
          </p>
          <p className="text-xl font-medium w-full md:w-100">
            Full stack development is the process of developing both the
            frontend and backend of applications.
          </p>
          <div className="flex mt-5 gap-x-8 justify-center md:justify-start">
            <button className="h-10 w-32 bg-[#d1fa02] text-xl font-semibold text-black rounded-md md:h-12 md:w-35 hover:scale-110 duration-300 hover:shadow-[0_0_20px_rgba(209,250,2,1)] cursor-pointer">
              <a href="#contact">Contact Me !</a>
            </button>

            <button>
              <a
                href="mailto:chandan95765@gmail.com"
                className="h-10 w-32 border-2 border-[#d1fa02] text-xl font-semibold text-[#d1fa02] rounded-md md:h-12 md:w-35 hover:scale-110 duration-300 hover:shadow-[0_0_20px_rgba(209,250,2,1)] hover:bg-[#d1fa02] hover:text-black cursor-pointer flex items-center justify-center"
              >
                Hire me!
              </a>
            </button>
            {/* <button className="h-10 w-32 border-2 border-[#d1fa02] text-xl font-semibold text-[#d1fa02] rounded-md md:h-12 md:w-35 hover:scale-110 duration-300 hover:shadow-[0_0_20px_rgba(209,250,2,1)] hover:bg-[#d1fa02] hover:text-black cursor-pointer flex items-center justify-center">
              <a
                href="mailto:chandan95765@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              Hire me !
            </button> */}
          </div>
        </div>

        <div className=" bg-[#d5fa02] h-70 w-70 border-3 md:w-95 md:h-95 border-black rounded-full   shadow-[0_0_100px_rgba(209,250,2,1)] hover:scale-107 duration-300 bg-[url(/public/chandan4.png)] bg-cover bg-no-repeat "></div>
      </div>
    </>
  );
};

export default Home;
