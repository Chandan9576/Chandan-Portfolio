import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    console.log("footer page")
      <div className="text-white w-full h-40 flex justify-center  bg-gray-800 items-center">
        <footer>
          <span>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedinIn className="border-2 border-[#d1fa02] rounded-md p-1.5 h-10 w-10 hover:text-[#087fc9] duration-300 hover:scale-120 inline-block m-5" />
            </a>
            |
            <a href="https://github.com/" target="_blank">
              <FaGithub className="border-2 border-[#d1fa02] rounded-md p-1.5 h-10 w-10 hover:text-[#087fc9] duration-300 hover:scale-120 inline-block m-5" />
            </a>
            |
            <a
              href="https://www.facebook.com/share/1BqXVD48f9/"
              target="_blank"
            >
              <FaFacebook className="border-2 border-[#d1fa02] rounded-md p-1.5 h-10 w-10 hover:text-blue-600 duration-300 hover:scale-120 inline-block m-5" />
            </a>
            |
            <a href="mailto:chandan95765@gmail.com" target="_blank">
              <IoMdMailOpen className="border-2 border-[#d1fa02] rounded-md p-1.5 h-10 w-10 hover:text-[#087fc9] duration-300 hover:scale-120 inline-block m-5" />
            </a>
          </span>
          <h1 className="text-4xl text-center font-semibold ">Thanks..!</h1>
        </footer>
      </div>
    </>
  );
};

export default Footer;
