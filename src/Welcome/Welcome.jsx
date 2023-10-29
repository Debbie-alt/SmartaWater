import { Link } from "react-router-dom";
import './welcome.css'
const Welcome=()=>{
      return(
            <div  className="w-screen h-screen py-3 bg-gradient-to-b from-white to-blue-200">
             <img
              src="./src/assets/smartalogo.png"
              className="w-16 mx-12 "
              alt="SmartaWater Logo"  />
              <div className="flex  items-center justify-center mt-12 md:mt-6">
              <main  className="flex   self-center  font-bold text-xl space-y-44 ">
                  <div className="space-y-20">
                   <p className="text text-blue-400 tracking-wider text-[2.9em] sm:text-[3.8em]">WELCOME </p>
                   <p className="text text-blue-400 tracking-wider text-[2.9em] sm:text-[3.8em]">BACK</p>
                     <img src="./src/assets/rocket.png" className="w-24  absolute  mx-40 sm:mx-48 " alt="SmartaWater Logo"  />
                    
                    </div>
                  
                  <button className="bg-cyan-300 w-40  rounded-2xl h-16 px-1 hover:opacity-80 text-blue-800"><a href="/Dashboard">GO TO PORTAL</a></button>
             </main>
        </div>
        </div>
      )
}
export default Welcome;