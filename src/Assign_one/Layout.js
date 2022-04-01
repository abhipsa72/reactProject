import React from 'react';
import Login from './Login/Login';
import {  Routes, Route } from "react-router-dom";
import Registraion from "./Registraion/Registraion"
import Home from "./Home/Home"
//import Forgot_password from './forget_password/forgot_password';
function Layout() {
    return (
        <div>
           
      <Routes>
      <Route  path="/" element={<Login />}/>
      <Route path="/home" element={<Home/>} />
      
      <Route path="/register" element={<Registraion/>}/>
        
      </Routes>
    
        </div>
    );
}

export default Layout;