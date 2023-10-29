import { Link } from "react-router-dom";
import Body from "./Shared/Body";
import { useState } from "react";
import DataCard from "./DataCard";
import OrderPurchase from "./Orders/OrderPurchaseChart";
import OrderDetail from "./Orders/OrderDetails";
const Dashboard = ({ neworder }) => {
  const [Username, setUsername] = useState("Sammie");
  
  const Header=([
       {
        path:"/Profile",
        id:"dash",
        Heading:"Dashboard"
       },
       {
        id:"rev",
        Heading:"Revenue"
       },
       {
        id:"ord",
        Heading:"Orders"
       },
       {
        id:"visual",
        Heading:"Payments",
       },
  ])
  

  return (
    <div className="flex ">
      <div className=" mx-auto  space-y-3 sm:space-y-2">
        <div className="flex flex-col space-x-8 sm:space-x-12 lg:space-x-24 space-y-2 justify-between">
          <Body />
          <main className=" flex flex-col md:flex-row  md:space-x-10 lg:space-x">
            <section className="">
              <aside className="flex flex-col space-y-2  sm:space-y-1 ">
                <div className="flex flex-col  space-x-8 md:space-x-16">
                  <p className="font-semibold text-blue-800 text-sm md:text-xl">
                    Smarta DashBoard
                  </p>
                  <p className="text-xs sm:-mt-1  text-slate-700">
                    {Username}'s Portal
                  </p>
                </div>

                <div className="w-[85vw] d-text md:w-[42vw] h-8 md:h-10 rounded-xl border-2  bg-cyan-200 flex p-1 space-x-2">


                <Link className=" w-1/4 bg-white rounded-lg text-black text-center text-xs sm:text-xs font-semibold py-1 md:py-2 hover:bg-white focus:white">
                      Dashboard  
                  </Link>
                
                  <Link className=" w-1/4  rounded-lg text-black text-center text-xs sm:text-xs font-semibold py-1 md:py-2 hover:bg-white focus:white">
                     Revenue
                  </Link>
                  <Link className=" w-1/4  rounded-lg text-black text-center text-xs sm:text-xs font-semibold py-1 md:py-2 hover:bg-white">
                    Visual 
                  </Link>
                  <Link
                    to="/Order"
                    className=" w-1/4 transition-all fade-in  ease-in-out  rounded-lg text-black text-center text-xs sm:text-xs  hover:bg-white focus:bg-white font-semibold py-1 md:py-2"
                  >
                    Orders
                  </Link> 
                </div>
                <DataCard/>
              </aside>
              
              <figure className="flex flex-col">
              

                <OrderDetail/>              
             
              </figure>
            </section>

            <OrderPurchase />
          </main>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
