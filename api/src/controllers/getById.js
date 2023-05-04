const axios = require("axios")
const {Videogame, Genres} = require("../db")
require("dotenv").config()
const {API_KEY} = process.env
const getById = async (idGame) =>{

   
    
    
    
    if(idGame.includes("-")){
        
            const dbGames = await Videogame.findAll({
                include: {
                    model: Genres,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            const dbGame = dbGames.find((elem) => elem.id === idGame) !== undefined ? dbGames.find((elem) => elem.id === idGame) : "no se encontraron coincidencias"
            return dbGame;
       
        }else{
            try {
                const apiGame = (await axios.get(`https://api.rawg.io/api/games/${idGame}?key=${API_KEY}`)).data
            return apiGame
            } catch (error) {
                console.log("no se pudo realizar su solicitud");
            }
            
        }
        
}
module.exports = getById
