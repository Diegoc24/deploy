const getGenres = require("../controllers/getGenres")

const handlerGenres = async (req, res) =>{
    const genres = await getGenres();
    res.status(200).json(genres)
}

module.exports = handlerGenres;