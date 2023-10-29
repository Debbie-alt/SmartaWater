import { useState, useEffect } from "react";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsHourglassSplit } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";

const DataCard=()=>{
  const [OrderNumber, setOrderNumber]= useState('5')
  const [PendingOrder, setPendingOrder]= useState('9')
  const [Expense, setExpense]= useState('5')
  const [RefundRequest, setRefundRequest]= useState('15')

    useEffect(()=> 
      {
        fetch()

      },
              
                     
      [] )

     return(
            <div>
                    <section className=" flex  -ml-6 md:-ml-1 sm:flex-row sm:space-x-3">
                        
                  <div className="bg-gray-100 w-36 shadow-md   mx-auto sm:w-1/2 border-2  h-20 mt-5   rounded-lg hover:opacity-80  ">
                    <div className="flex p-3 space-x-3 sm:space-x-7 ">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full  p-1 text-center">
                        <BsFillCartCheckFill className="text-slate-700 text-sm " />
                      </div>
                      <div className="flex-col  -mt-2">
                        <p className="text-slate-700 font-bold text-md lg:text-xl">
                         {OrderNumber} Orders
                        </p>
                        <p className="text-xs">Made in this Month</p>
                        <BsFillArrowUpCircleFill className="text-green-500 mx-10 -mt-1  sm:mt-2" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 w-36 shadow-sm mx-auto sm:w-1/2 border-2  h-20 mt-5 rounded-lg hover:opacity-80 ">
                    <div className="flex p-3 space-x-5 sm:space-x-8  ">
                      <div className="w-6 h-6 bg-[#205ff2] rounded-full p-1 text-center">
                        <BsHourglassSplit className="text-white text-sm" />
                      </div>
                      <div className="flex-col  -mt-2">
                        <p className="text-slate-700 font-bold text-md lg:text-xl">
                         {PendingOrder}
                        </p>
                        <p className="text-xs -ml-2 ">Pending Orders</p>
                        <BsFillArrowDownCircleFill className="text-red-600 mx-10 mt-2" />
                      </div>
                    </div>
                  </div>
                </section>

                <section className=" flex -ml-6 md:-ml-1 sm:flex-row sm:space-x-3">
                  <div className="bg-gray-100 shadow-sm w-36 mx-auto sm:w-1/2 border-2  h-18 mt-7 rounded-lg hover:opacity-80  ">
                    <div className="flex p-3  space-x-3 sm:space-x-8  ">
                      <div className="w-6 h-6 bg-blue-600 rounded-full  p-1.5 text-center">
                        <BsFillCreditCard2FrontFill className="mx-auto text-white text-xs" />
                      </div>
                      <div className="flex-col  -mt-2">
                        <p className="text-slate-700 font-bold text-md lg:text-xl">
                          &#8358;{Expense}
                        </p>
                        <p className="text-xs">Spent so far</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 w-36 shadow-md  mx-auto sm:w-1/2 border-2  h-20 mt-7 rounded-lg hover:opacity-80 ">
                    <div className="flex p-3 space-x-8  ">
                      <div className="w-6 h-6 bg-yellow-400 opacity-70 rounded-full p-1 text-center">
                        <BsFillEnvelopeExclamationFill className="text-white  text-xs mx-auto" />
                      </div>
                      <div className="flex-col  -mt-2">
                        <p className="text-slate-700 font-bold text-md lg:text-xl">
                         {RefundRequest}
                        </p>
                        <p className="text-xs "> Refund Requests</p>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
      )
}
export default  DataCard;