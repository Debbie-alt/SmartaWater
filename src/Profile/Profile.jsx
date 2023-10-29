import Body from "../Shared/Body";
import Sidebar from "../Shared/Sidebar";
const Profile = () => {
  return (
    <div className="flex">
      <div className=" space-x-16 space-y-5">
        <Body className=" "/>
          

          <div  className=" flex flex-col  00 lg:flex-row space-x-10 space-y-16 w-screen h-screen  ">
            <p className="text-blue-800 text-xl font-bold ">MY PROFILE</p>

             <div className=" flex flex-col space-y-6 w-[30vw] bg-slate-100 h-screen border-2 border-blue-300 mx-20 shadow-lg mt-8 rounded-lg">

              <div className="container mt-4  h-1/2 w-full">
              <img
                src="./src/assets/user.jpg  "
                className="text-white text-2xl w-4/6 rounded-full h-full mx-auto   "
              />
            
                

              </div>
              <div className="container  h-1/2 w-full">
                <p className="text-sm font-bold mx-5">My Profile</p>
              </div>


             </div>
            
             <div className="w-[30vw] h-screen  mx-20  mt-8 rounded-md flex flex-col space-y-6">
               <div  className="bg-slate-100 shadow-lg w-full border-2   border-blue-300 rounded-lg h-1/2"></div>
               <div  className="bg-slate-100 border-2 shadow-lg w-full  border-blue-300 rounded-lg h-1/2"></div>



             </div>


          </div>
        
       


      </div>
    </div>
  );
};
export default Profile;
