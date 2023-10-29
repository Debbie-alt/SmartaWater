import Body from "../Shared/Body";
import { Link } from "react-router-dom";

const Order = ({ Username }) => {
  return (
    <div className="flex">
      <div className=" space-x-16 md:space-x-28 space-y-2">
        <Body />
        <main className="flex space-x-24">
          <section className="">
            <aside className="flex flex-col space-y-2">
              <div className="flex flex-col  space-x-8 md:space-x-16">
                <p className="font-semibold text-blue-800 text-sm md:text-xl">
                  Smarta DashBoard
                </p>
                <p className="text-xs -mt-1  text-slate-700">
                  {Username}'s Portal
                </p>
              </div>
              <div className="w-[80vw] md:w-[38vw] h-8 md:h-10 rounded-xl border-2  bg-cyan-200 flex p-1 space-x-2">
                <Link  to='/Dashboard' className=" w-1/4  rounded-lg text-black text-center text-xs sm:text-xs font-semibold py-1 md:py-2 hover:bg-white focus:bg-white">
                  Dashboard
                </Link>
                <Link className=" w-1/4  rounded-lg text-black text-center text-xs sm:text-xs font-semibold py-1 md:py-2 hover:bg-white focus:white">
                  Reciepts
                </Link>
                <Link className=" w-1/4  rounded-lg text-black text-center text-xs sm:text-xs font-semibold py-1 md:py-2 hover:bg-white">
                  Visual
                </Link>
                <Link
                  to="/Order"
                  className=" w-1/4 bg-white  rounded-lg text-black text-center text-xs sm:text-xs  hover:bg-white focus:bg-white font-semibold py-1 md:py-2"
                >
                  My Orders
                </Link>
              </div>
            </aside>

          </section>
        </main>
        

      </div>

    </div>
  );
};
export default Order;
