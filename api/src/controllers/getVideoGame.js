const { default: axios } = require("axios");
const {Videogame, Genres } = require("../db")

const getVideoGames = async ()=>{
    let apiGames;
    let game = []
    for(let i = 2;i < 8; i++){
       
            apiGames = (await axios.get(`https://api.rawg.io/api/games?key=cc0fe3294aa4466b8e8ff052a431c732&page=${i}`)).data.results    
            game = [...game, ...apiGames]   
   
     }
     const fistPage = (await axios.get(`https://api.rawg.io/api/games?key=cc0fe3294aa4466b8e8ff052a431c732`)).data.results
    const apiGame = [...fistPage, ...game]
   
    
    const dbGames = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
            through:{
                attributes: []
            }
        }
    })
     const allGames = [...apiGame, ...dbGames]
    return allGames;
}

module.exports = getVideoGames;