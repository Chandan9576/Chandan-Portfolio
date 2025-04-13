import React from "react";

const Skills = () => {
  return (
    <>
      <div className="h-auto  w-full font-roboto pt-30 ">
        <div>
          <h1 className="text-4xl text-center font-bold md:text-6xl text-[#d1fa02]">
            My Skills !
            <p className="text-2xl font-semibold text-red-600 md:text-3xl pt-3">
              
              - What I Know -
            </p>
          </h1>
        </div>

        <div className="w-full flex justify-evenly mt-10 flex-wrap gap-y-12">
          <div className="h-50 w-85 bg-gray-800 flex items-center flex-col text-2xl font-semibold rounded-2xl md:h-100 md:w-75 hover:scale-105 duration-400 border-2 hover:border-[#d1fa02] ">
            <img
              className="size-18 mt-2 md:mt-10 "
              src="public\Image\web.png"
              alt=""
            />

            <p className="font-bold text-center md:pt-10 text-[#d1fa02]">
              Languages{" "}
            </p>
            <span className="text-center px-4 text-white text-[22px] md:mt-10">
              C - C++ - Java - C# - Java Script - Html - CSS
            </span>
          </div>

          <div className="h-50 w-85 bg-gray-800 flex items-center flex-col text-2xl font-semibold rounded-2xl md:h-100 md:w-75 hover:scale-105 duration-400  border-2 hover:border-[#d1fa02] ">
            <img
              className="size-18 mt-2 md:mt-10 "
              src="public\Image\database-configuration (1).png"
              alt=""
            />

            <p className="font-bold text-center md:pt-10 text-[#d1fa02]">
              Database
            </p>
            <span className="text-center px-4 text-white text-[22px] md:mt-10">
              My SQL(Structud Query Language)
            </span>
          </div>

          <div className="h-50 w-85 bg-gray-800 flex items-center flex-col text-2xl font-semibold rounded-2xl md:h-100 md:w-75 hover:scale-105 duration-400  border-2 hover:border-[#d1fa02] ">
            <img
              className="size-18 mt-2 md:mt-10 "
              src="public\Image\science.png"
              alt=""
            />

            <p className="font-bold text-center md:pt-10 text-[#d1fa02]">
              Framework & Library{" "}
            </p>
            <span className="text-center px-4 text-white text-[22px] md:mt-10">
              {" "}
              .Net MVC(Framework) & React js(Library)
            </span>
          </div>

          <div className="h-50 w-85 bg-gray-800 flex items-center flex-col text-2xl font-semibold rounded-2xl md:h-100 md:w-75 hover:scale-105 duration-400   border-2 hover:border-[#d1fa02] ">
            <img
              className="size-18 mt-2 md:mt-10"
              src="public\Image\structure.png "
              alt=""
            />

            <p className="font-bold text-center  md:pt-10 text-[#d1fa02]">
              Domain
            </p>
            <span className="text-center px-4 text-white text-[22px] md:mt-10">
              DSA in C++ (Data Structure Algorithm)
            </span>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Skills;
