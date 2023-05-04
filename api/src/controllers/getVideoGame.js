const { default: axios } = require("axios");
const {Videogame, Genres } = require("../db")

const getVideoGames = async ()=>{
    const apiGames = (await axios.get(`https://api.rawg.io/api/games?key=cc0fe3294aa4466b8e8ff052a431c732`)).data
    const dbGames = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
            through:{
                attributes: []
            }
        }
    })
    const allGames = [...apiGames.results, ...dbGames]
    return allGames;
}

module.exports = getVideoGames;