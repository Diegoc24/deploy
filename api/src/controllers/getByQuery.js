const { default: axios } = require("axios");
const { Videogame, Genres} = require("../db")
const getVideoGame = require("./getVideoGame")


const getByQuery = async (query)=>{
    const {name} = query;
    
    const games = (await axios.get("https://api.rawg.io/api/games?key=cc0fe3294aa4466b8e8ff052a431c732")).data
    
    const game = games.results.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()))
    
    const dbGames = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    
    const dbgame = dbGames.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()))
    
    const nameGame = [...dbgame, ...game]
    
   
   
   

    return nameGame; 

}

module.exports = getByQuery;