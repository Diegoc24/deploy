import React from "react";
import { NavLink } from "react-router-dom";
import "./StyleCardGames.css"

const CardGames = ({background_image, name, genres,id}) =>{
   let gen= genres.toString()
   
   gen = gen.replace(/,/g, " - ")
   
    return(
        <div className="card-container">
            <div>
            <NavLink to={`/detail/${id}`} className={"navCardContainer"}>
            
            <img src={background_image} alt={name} />
            <h1>{name}</h1>
            <h3>{gen}</h3>
            </NavLink>
            </div>
        </div>
    )
}

export default CardGames;