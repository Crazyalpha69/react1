import React from "react";
import './navigation.css';
import logo from './img/logo.svg';
function Navigaition(){
    return(
    <nav className="flex justify-between">
        <div  >
            <img className=" mr-10 my-9 w-40  md:w-60  lg:w-72 "    src={logo } alt="logo"/>
           </div> 
           <div className="hidden xl:text-xl lg:text-lg text-sm items-center  md:flex justify-between gap-6  mr-10 my-9 text">
            <a className="textcolor" href="#">About</a>
            <a className="textcolor" href="#">how it works</a>
            <a className="textcolor " href="#">Services</a>
            <a className="textcolor" href="#">Solutions</a>
            <a className="but rounded-full py-2 px-5 text-white" href="#">Contact</a>
           
           </div>
          
        
    </nav>
    )
}

export default Navigaition