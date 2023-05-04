import { GET_RELEASED, GET_GAMES, GET_BY_NAME, GET_GENRES, FILTER_GENRES, ALFA_ORDER, FILTER_CREATED, FILTER_RATING, DETAIL_GAME, POST_GAME, CLEAR_POST} from "./actionsTypes"
import axios from "axios"
export const getReleasedDate = (released)=>{
    
        return {
            type: GET_RELEASED,
            payload: released
        }
}
export function getGames () {
    return async function (dispatch){
       
        const games = await axios.get("http://localhost:3001/videogames")
        
        
        return dispatch({
        type: GET_GAMES,
        payload: games.data
    })
    }
    
}

export function getGameByName(name){
    return async function(dispatch){
        try {
            const game = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        return dispatch({
            type: GET_BY_NAME,
            payload: game.data
        })
        } catch (error) {
            console.log({error: error.message});
        }
        
    }
}


export function getGenres (){
    return async function(dispatch){
        const allGenres = await axios.get("http://localhost:3001/genres")
        return dispatch({
            type: GET_GENRES,
            payload: allGenres.data
        })
    }
}

export const getFilterByGenres = (genre) =>{
   
    return{
        type: FILTER_GENRES,
        payload: genre
    }
}

export const alfabOrder = (order)=>{
    return{
        type: ALFA_ORDER,
        payload: order
    }
}

export const createdFilterGame = (value) =>{
    return{
        type: FILTER_CREATED,
        payload: value
    }
}

export const filterByRating = (value) =>{
    
    return {
        type: FILTER_RATING,
        payload: value
    }
}

export function getDetailgame(value){
    return async function(dispatch){
        
        const gameById = await axios.get(`http://localhost:3001/videogames/${value}`)
        
        return dispatch({
        type: DETAIL_GAME,
        payload: gameById.data
    })
}
}

export function postVideogame(res){
    return async function (dispatch){
        const resp = await axios.post("http://localhost:3001/videogames",res)
        
        return dispatch({
            type: POST_GAME,
            payload: resp.data
        })
    }
}

export const clearCreatedPost = () =>{
    return{
        type: CLEAR_POST,
        payload: ""
    }
}



