import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar";
import Box from "../Profile/ProfileBox";
const Body = ({moveside, expandsearch}) => {
      
          const handleSearch =()=>{
            alert('done!')
          }
        
          
      return(
            <div className="flex ">
                  <Sidebar moveside={moveside}></Sidebar>
                  <Navbar expandSearch={expandsearch} handleSearch={handleSearch}></Navbar>
                  {/* <Box/> */}

                  </div>



      )
  
  
};
export default Body;
