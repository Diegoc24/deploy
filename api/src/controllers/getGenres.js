const axios = require("axios")
const {Genres} = require("../db")
const {API_KEY} = process.env
const getGenres = async () =>{
    const genres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data
    
    

    genres.results.map((gen) => {
        Genres.findOrCreate({where: {name: gen.name}})
    })

    const allGenres = await Genres.findAll()
    return allGenres

}

module.exports = getGenres;

