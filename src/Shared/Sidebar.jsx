import GoogleFont from "react-google-fonts";
import {
  FaChartBar,
  FaTachometerAlt,
  FaRegListAlt,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const moveside = () => {
    block.classList.add("expand");
    
  };
  const closide =()=>{
    block.classList.remove('expand'); 

  }
  

  return (
    <div
      onMouseEnter={moveside} onMouseLeave={closide}
      className=" hidden lg:flex fixed sidebar bg-gradient-to-b from-white to-blue-200 p-3 mt-0.3 h-screen w-14 transition-all ease-in-out rounded" id="block"
    >
      <GoogleFont font="Quicksand" />
      {/* <section> */}

      <main className="flex flex-col justify-between ">
        <div className="flex flex-col space-y-5 ">
          <div>
            <img
              src="./src/assets/smartalogo.png"
              className="w-12 "
              alt="SmartaWater Logo"
            />
          </div>
          <hr />
          <section className="flex flex-col space-y-5 icons">
            <div className="flex  px-1 py-2">
              <FaTachometerAlt className="text-blue-700 " />
              <p className="hidden text-slate-600 text-right  font-semibold ">
                <Link to="Dashboard" className="hover:text-cyan-600" >Dashboard</Link>
              </p>
            </div>
            <div className="flex px-1 py-2">
              <FaRegListAlt className="text-blue-700" />
              <p className="hidden text-slate-700 text-right  font-semibold">
                 <Link to='/Order'  className="hover:text-cyan-600">Orders</Link>
              </p>
            </div>
            <div className="flex px-1 py-2">
              <FaChartBar className="text-blue-700" />
              <p className="hidden text-slate-700 text-right  font-semibold">
                 <Link to='/ProfileBox'  className="hover:text-cyan-600">Payments</Link>
              </p>
            </div>
            
            <div className="flex px-1 py-2">
              <FaTachometerAlt className="text-blue-700" />
              <p className="hidden text-slate-700 text-right font-semibold">
                 <Link  className="hover:text-cyan-600">Revenue</Link>
              </p>
            </div>
            <div className="flex px-1 py-2">
              <FaRegUserCircle className="text-blue-700" />
              <p className="hidden text-slate-700 text-right  font-semibold">
                <Link to="/Profile"  className="hover:text-cyan-600">Profile</Link>
              </p>
            </div>
          </section>
        </div>

        <div className="self-end my-10 flex flex-col px-2">

          </div>
      </main>
    </div>
  );
};
export default Sidebar;
