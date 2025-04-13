import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <>
      <div className=" font-roboto pt-30 px-10 md:h-screen">
        <div>
          <h1 className="text-4xl text-center font-bold md:text-6xl text-[#d1fa02]">
            About Me !
            <p className="text-2xl font-semibold text-red-600 md:text-3xl pt-3">
              - Who I am -
            </p>
          </h1>
        </div>

        <div className=" w-full flex flex-wrap items-center justify-evenly gap-y-12 mt-15">
          <div className="h-80 w-70  rounded-4xl hover:scale-110 duration-300 shadow-[0_0_50px_rgba(209,250,2,1)] md:h-90 md:w-80  bg-[url(/public/chandan1.png)] bg-cover bg-no-repeat border-2 border-[#d1fa02] "></div>

          <div className="h-auto w-full md:w-150 mb-20">
            <h1 className="">
            <TypeAnimation
              sequence={["Full Stack Web Devloper.",1000,"Software Devloper.",1000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-[#d1fa02] text-center font-bold text-2xl pb-5 md:text-4xl"
            ></TypeAnimation>
            </h1>
            <p className="text-xl font-medium md:font-semibold text-white ">
              Hii, my name is Chandan Kumar prajapatai and I am a full stack web
              devloper. I am from Jharkhand. I have completed my
              intermediate(Science stream) from +2 Virendra HiGh School Doranda
              and currently I am doing B.Sc IT From Marwadi college Ranchi,
              Jharkhand. Thank you <span className="text-red-700 text-2xl">&#x2665;</span>
            </p>

            <div className="flex  gap-x-2 md:gap-x-5 mt-5 text-white ">
              <button className="h-12 w-40 border-2 border-[#d1fa02] rounded-lg md:text-[18px] mr-10 hover:bg-[#d1fa02] hover:text-black duration-300 font-semibold cursor-pointer text-[15px]">
                <a href="" target="_blank">Download CV</a>
              </button>

              <a href="https://www.facebook.com/share/1BqXVD48f9/" target="_blank">
                <FaFacebook className="border-2 border-[#d1fa02] rounded-full p-1.5 h-10 w-10 hover:text-blue-600 duration-300 hover:scale-120 " />
              </a>

              <a href="" target="_blank">
                <FaTelegram className="border-2 border-[#d1fa02] rounded-full p-1.5 h-10 w-10 hover:text-[#0fc1f2] duration-300 hover:scale-120" />
              </a>

              <a href="https://github.com/" target="_blank">
                <FaGithub className="border-2 border-[#d1fa02] rounded-full p-1.5 h-10 w-10  hover:text-green-500 duration-300 hover:scale-120" />
              </a>
            </div>
          </div>
        </div>
      </div>
      

      
    </>
  );
};

export default About;
