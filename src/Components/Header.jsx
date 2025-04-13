import { FaBars } from "react-icons/fa";
import React, { useState,useRef} from "react";
import { ImCross } from "react-icons/im";
import { GoTriangleRight } from "react-icons/go";


const Header = () => {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <nav className="font-roboto ">
        <div className="fixed top-0 left-0 right-0 h-20 w-full  flex justify-between items-center px-5 md:px-10 z-50 bg-black">
          <div className="text-4xl font-bold text-[#d1fa02] ">Chandan</div>

          <div className="hidden text-xl font-semibold md:flex gap-x-10 ">
            <ul className="space-x-10 text-white">
              <a
                href="#home"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200"
              >
                Home
              </a>
              <a
                href="#education"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200"
              >
                Education
              </a>
              <a
                href="#skills"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200"
              >
                Skills
              </a>
              <a
                href="#about"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200"
                onClick={scrollToSection}
              >
                About
              </a>
              <a
                href="#contact"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200"
              >
                Contact
              </a>
            </ul>
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden">
            <FaBars className="text-white md:hidden text-2xl" />
          </button>
        </div>
      </nav>
      <aside
        className={`fixed top-0 right-0 h-full w-50 bg-gray-800 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="text-[#d1fa02] text-[20px] absolute top-7 right-10" onClick={() => setOpen(false)}><ImCross /></button>

        <div>
        <ul className="text-white flex flex-col space-y-5 ml-10 mt-25 text-[20px] font-semibold">
              <a
                href="#"
                className="focus:text-[#d1fa02]  hover:text-[#d1fa02] duration-200" onClick={()=>setOpen(false)}
              >
                Home
              </a>
              <a
                href="#education"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200" onClick={()=>setOpen(false)}
              >
                Education
              </a>
              <a
                href="#skills"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200" onClick={()=>setOpen(false)}
              >
                Skills
              </a>
              <a
                href="#about"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200" onClick={()=>setOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="focus:text-[#d1fa02] hover:text-[#d1fa02] duration-200" onClick={()=>setOpen(false)}
              >
                Contact
              </a>
            </ul>
        </div>

      </aside>

    
    </>
  );
};

export default Header;
