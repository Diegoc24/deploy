import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetailgame }  from "../../actions/actions";
import "./StyleDetail.css"
const Detail = ()=>{
   
 
    const {id} = useParams();
 

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDetailgame(id))
    },[])
const game = useSelector((state) => state.game)

const GetPlat = ()=>{
    console.log(game);
    let plata = [];
        if(game.DataBase === true){
            game.platforms.map(plat =>{
                plata.push(plat)
                })
        }else{
            game.platforms.map((plat) =>{
                plata.push(plat.platform.name)
            })
        }
        plata = plata.toString().replace(/,/g, " - ")
        return(
    <div className="plat">{plata}</div>
    )
    }
    return(
        
        
        <div className="containerDetail">
            
           <NavLink className={"backHome"} to={"/home"}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></NavLink>
            {
               Object.keys(game).length !== 0 ? 
                <div className="containerDetailInter">
                
             <h1>{game.name}</h1>
            <img className="imageDetail" src={game.background_image} alt={game.name}/>
            <div className="platformDetail">
            <h2>Plataformas: </h2>
            
            <h3><GetPlat/></h3>
            </div>
            <div className="genresDetail">
            <h3>Generos:  </h3>
            <h3>{
                game.genres.map((genre) =>{
                    return <div key={genre.id} style={{display: "inline"}}> {genre.name} </div>
                })
                }</h3> 
            </div>
                
            <div className="containerDescription">
            <h2>Descripcion:</h2>
            <h4>
               <div dangerouslySetInnerHTML={ {__html: game.description}}/>
            </h4>
            </div>
            <div className="releaseDetail">
            <h3>Fecha de lanzamiento: </h3>
           <h4>  {game.release_date === undefined ? game.released : game.release_date}</h4>
            </div>
            <div className="ratingDetail">
           <h3> Rating: </h3>
            <h4>{game.rating}</h4>
            </div>
            
            </div>
            : 
            <div className="loadingDetail">
                <img src="https://i.gifer.com/3F3F.gif" alt="sonic"/>
                <h1>Loading...</h1>
                <img src="https://i.gifer.com/3F3F.gif" alt="sonic"/>
                </div>
            }
            
        </div>
    )
}

export default Detail;