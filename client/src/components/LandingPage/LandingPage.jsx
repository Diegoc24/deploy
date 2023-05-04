import React from "react";

import { Link } from "react-router-dom";

import "./StyleLandingPage.css"



const LandingPage = () =>{
    
    
    return(
        
        <div className="landingPage">
            <div >
            <div > <h1 className="welcomeLanding">BIENVENIDO A LA APP DE VIDEOJUEGOS</h1></div>
            
            
           <Link to={"/home"} className={"LinkIngreso"}> 
           START
           
           </Link>
           </div>
          
           


         
           
        </div>
        
    )
}

export default LandingPage;