import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile/Profile';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Welcome from './Welcome/Welcome';
import Order from './Orders/Order';
import Box from './Profile/ProfileBox';


 export default function App() {
  const [count, setCount] = useState(0);
  const neworder=()=>{
    alert("yup!")
 }
//  const location =useLocation();
 const [displayLocation, setDisplayLocation] = useState(location);



  return (
    <>
   
      <Router>         


        <div>
          
          <Routes location={displayLocation}>
            <Route path="/" element={<Welcome  />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Dashboard" element={<Dashboard  neworder={neworder}  />}/>
            <Route path="/Profile/Dashboard" element={<Dashboard  />} />
            <Route path='/Order' element={<Order/>}/>
            <Route path='/ProfileBox' element={<Box/>}/>




          </Routes>
        </div>

      </Router>
    
    </>
  );
}


function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Welcome/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path="/Order" element={<Order/>} />
      </Routes>
    </div>
  );
}
