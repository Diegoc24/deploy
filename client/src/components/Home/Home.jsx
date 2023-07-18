import React from "react";
import { alfabOrder, createdFilterGame, filterByRating, getFilterByGenres, getGames, getGenres } from "../../actions/actions";

import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import CardGames from "../CardGames/CardGames";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./StyleHome.css"

const Home = (props) =>{
    
    

    const allGenres = useSelector((state) => state.genres)
    const allVideoGames = useSelector((state) => state.videogames)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesperPage, setGamesPerPage] = useState(15)
    const [render, setRender] = useState("")
    const lastPageGame = currentPage * gamesperPage;

    const firstGamePage = lastPageGame - gamesperPage
    
    const currentGame = allVideoGames.slice(firstGamePage,lastPageGame)
   const numPage = allVideoGames.length / gamesperPage;
    
    

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGames());
        dispatch(getGenres())
    },[dispatch])
    
   
    
const handlerFilter = (val)=>{
    val.preventDefault()
   dispatch(getFilterByGenres(val.target.value))
   setCurrentPage(1)
   
}

const handlerAlphabet = (e) =>{
    e.preventDefault()
    dispatch(alfabOrder(e.target.value))
    setCurrentPage(1)
    setRender(`Ordenado ${e.target.value}`)
    if(e.target.value === "default") dispatch(getGames())
}
const handlerCreated = (e)=>{
    e.preventDefault()
    dispatch(createdFilterGame(e.target.value))
    setCurrentPage(1)
}

const handlerRating = (e) =>{
    e.preventDefault()
    dispatch(filterByRating(e.target.value))
    setRender(`renderizado rating ${e.target.value}`)
}

const handlerDefault = (e)=>{
    e.preventDefault()
    dispatch(getGames())
    setCurrentPage(1)
}

return (
    <div className="container-home">
        <img className="container_port" src="https://www.algoritmolegal.com/wp-content/uploads/2022/01/Guia-legal-de-los-videojuegos.jpg" alt="portada" key={"portada"}/>
        <div className="navBar">
        <SearchBar/>
        
        
        <select onChange={(e)=>handlerAlphabet(e)}>
            <option value={"default"}>Orden Alfabetico</option>
            <option value={"asd"}>Orden Ascendente</option>
            <option value={"des"}>Orden Descendente</option>
        </select>
     
        <select onChange={(e)=>handlerRating(e)}>
            <option value={"all"}>Rating</option>
            <option value={"Mayor-menor"}>Mayor a menor</option>
            <option value={"Menor-mayor"}>Menor a mayor</option>
        </select>
        <select onChange={(e)=>handlerFilter(e)} >
            <option value={"all"}>Generos</option>
            {
                allGenres.map((genre)=>{
                    return(
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    )
                })
            }
        </select>
        <select onChange={(e)=>handlerCreated(e)}>
            <option value={"all"}>Creados y existentes</option>
            <option value={"created"}>Creados por mi</option>
            <option value={"not_created"}>Existentes</option>
        </select>
        </div>
        
        <div className="buttonReset">
            <button onClick={(e)=>handlerDefault(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>
            </button>
            
            </div>
            
        <div className="navButtonCreated">
        <button>
        <NavLink  className={"navLinkCreated"} to={"/formcreated"}>Crear un video juego</NavLink>
        </button>
        </div>
        
        <div>
        <Paginado numPage= {numPage} setCurrentPage={setCurrentPage}/>
        </div>
        <div>
            {
                Object.keys(allVideoGames).length !== 0 ? currentGame.map((game) =>{
                    let gen = []
                    game.genres.map((genre) => {
                        gen = [...gen, genre.name]
                    })
                
                    return(
                        <CardGames key={game.id} name={game.name} background_image={game.background_image} genres={gen} id={game.id}/>
                    )
                    
                }): <div className="loadingHome">
                <img src="https://i.gifer.com/3F3F.gif" alt="sonic"/>
                <h1>Loading...</h1>
                <img src="https://i.gifer.com/3F3F.gif" alt="sonic"/>
                </div>
            }
        </div>
        

    </div>
)
}

export default Home;