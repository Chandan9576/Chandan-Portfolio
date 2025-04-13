import React from "react";

const Project = () => {
  return (
    <>
      <div className="font-roboto w-full pt-30">
        <div>
          <h1 className="text-4xl text-center font-bold md:text-6xl text-[#d1fa02] ">
            My Education !
          </h1>
        </div>

        <div className="w-full flex flex-col justify-center  items-center mt-10 gap-y-10 md:flex-row flex-wrap gap-10 " >

          <div className="h-60 w-85 md:w-170 flex flex-col justify-center text-[17px] text-white px-7 rounded-2xl border-2 border-[#d1fa02] bg-gray-800 hover:shadow-[0_0_20px_rgba(209,250,2,1)] hover:scale-101 duration-400">
            <h1 className="text-[25px] font-semibold text-[#d1fa02] ">Matriculation</h1>

            <p><span className="font-medium">School Name :- </span> Utkarmit high school Nawadih, Dhanwar Giridih (Jharkhand)</p>

             <p><span className="font-medium">Percentage :- </span> 92.4%</p>

             <p><span className="font-medium">Passing year :- </span> 2021</p>

             <p><span className="font-medium">Board :- </span> Jac board</p>
          </div>

          <div className="h-60 w-85 md:w-170 flex flex-col justify-center text-[17px] text-white px-7 rounded-2xl border-2 border-[#d1fa02] bg-gray-800 hover:shadow-[0_0_20px_rgba(209,250,2,1)] hover:scale-101 duration-400">
            <h1 className="text-[25px] font-semibold text-[#d1fa02] ">I.Sc</h1>

            <p><span className="font-medium">School Name :- </span> +2 Virendra aayan high school Doranda, Dhanwar Giridih (Jharkhand)</p>

             <p><span className="font-medium">Percentage :- </span> 74.4%</p>

             <p><span className="font-medium">Passing year :- </span> 2023</p>

             <p><span className="font-medium">Board :- </span> Jac board</p>
          </div>

          <div className="h-60 w-85 md:w-170 flex flex-col justify-center text-[17px] text-white px-7 rounded-2xl border-2 border-[#d1fa02] bg-gray-800 hover:shadow-[0_0_20px_rgba(209,250,2,1)] hover:scale-101 duration-400">
            <h1 className="text-[25px] font-semibold text-[#d1fa02] ">B.Sc It (Information Technology)</h1>

            <p><span className="font-medium">College Name :- </span> Marwadi College Ranchi (Jharkhand)</p>

             <p><span className="font-medium">Subject :- </span> IT (Information Technology)</p>

             <p><span className="font-medium">Session :- </span> 2023 - 2026</p>

             <p><span className="font-medium">Current Semester :- </span> 3rd semester</p>
          </div>
        </div>
      </div>

  
    </>

  );
};

export default Project;
