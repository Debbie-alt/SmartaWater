import "./Navbar.css";
import Search from "./Search";
import { BsChatDots } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";

import { FaSistrix } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

const Navbar = ({moveside}) => {
  
  return (
    <>
    {/* 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 */}
      <main className="h-12 w-screen  bg-gradient-to-r from-blue-300 to-blue-700 justify-between items-center   flex  border-b-2 border-b-slate-300 rounded">
        <div className="flex space-x-10  mx-16 sm:mx-20 md:mx-24 w-2 "  >
          {/* <p onClick={moveside} className="cursor-pointer sm:hidden">&#9776;</p> */}
          {/* 👋🏼 👋*/}
          
             <p className="text-slate-700 text-xs md:text-lg font-semibold flex  italic">
            Goodday! <span> 👋🏼  </span>
          </p>
          </div>
        <div className=" flex  bg-justify-self-end items-center space-x-1 md:space-x-3">
          <Search className="" />
           <figure className="mt-0.5">
          <div className=" p-1  md:p-2  rounded-full  relative">
            <div className="bg-red-500  absolute  top-0 sm:top-1.5 s mx-2 sm:mx-2.5 w-2.5 h-2.5 notbadge text-white rounded-full">
              8
            </div>
            <HiOutlineBellAlert className=" text-sm md:text-lg hover:text-2xl  font-bold text-blue-100 " />
          </div>
          </figure>

          <div className="bg-cyan-400  md:p-1 rounded-full ">
            <BsChatDotsFill
              className="text-white hover:text-lg  text-xs"
              onClick={function me() {
                alert("yes");
              }}
            />
          </div>

          {/* <FaGear className='text-slate-700'/> */}

          <div className="flex space-x-2 ">
            <div className=" flex  h-11 w-12  md:w-28    border-l-slate-800  bg-[0036b2] bg-cyan-600 p-2    ">
              <img
                src="./src/assets/ode boy.jpg  "
                className="text-white text-2xl w-6 h-8 mx-auto md:mx-2 profilee "
              />
              <span className="text-white hidden md:flex text-xs mx-auto font-semibold">
                {" "}
                Sammie{" "}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Navbar;
