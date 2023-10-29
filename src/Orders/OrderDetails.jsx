import { useEffect, useState } from "react";

const OrderDetail=()=>{


     const orderid = Math.random()*10
        

      const [OrderDetails, setOrderDetails ]= useState([
            {
              id:"1",
             Quantity:"5",
             Status:"Pending",
       
            },
            {
              id:"2",
             Quantity:"4",
             Status:"Delivered",
       
            },
            {
              id:"3",
             Quantity:"5",
             Status:"Pending",
       
            }
       
           
       
       
          
          
       
         ])
         
   
         return(
      <div className="bg-white shadow-lg -ml-2 border-2  font-serif px-4 py-3 space-y-6 w-full h-60 mt-10 rounded-xl ">
      <p className="text-blue-700 font-bold text-lg font-serif">Latest  Orders</p>

        <div  className="flex flex-col space-y-6">
        <div className="flex w-full justify-between border-b-2  border-slate-300 font-semibold text-slate-700 text-sm font-serif px-4"> 
         <p>ORDERID</p>
         <p> QUANTITY</p>
         <p>STATUS</p>
        </div>
        {OrderDetails.map((Orders)=>(
         <div className="flex w-full justify-between border-b-2  border-slate-300 font-semibold text-slate-700 text-sm font-serif px-4" key={Orders.id}>
         <p className="text-cyan-500 font-semibold" id="ID">{orderid}</p>
         <p> {Orders.Quantity}</p>
         <p>{Orders.Status}</p>



         </div>
        )
        
        )}
       
       
       
      
        </div>


      
      </div>
     )       

}
export default OrderDetail;