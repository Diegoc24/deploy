const {Videogame} = require("../db")

const postVideoGame = async (body)=>{
    const {name, description, platforms, release_date, rating, background_image, genres} = body;

    let newGame = await Videogame.create({
        name, description, platforms, release_date, rating, background_image, genres
    })
    const arrGenres = genres.split(",")
    arrGenres.map((genre)=>{
        newGame.addGenres(genre)
    })
    

    return "VideoGame created successfully"
}

module.exports = postVideoGame