
const getById = require("../controllers/getById")
const postVideoGame = require("../controllers/postVideoGame")
const getVideoGames = require("../controllers/getVideoGame");
const getByQuery = require("../controllers/getByQuery");



const handlerGetGames = async (req,res) =>{
    try {
    if(Object.keys(req.query).length === 0){
        const allGames = await getVideoGames()
        res.status(200).json(allGames)
    }else{
        const resQuery = await getByQuery(req.query)
        res.status(200).json(resQuery)
    }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
   
    
   
    
   
}

const handlerGetById = async (req, res) =>{
    try {
        const {idVideogame} = req.params
        const result = await getById(idVideogame)
       
        
  
    res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
}


const handlerPostGame = async (req,res) =>{
    try {
        const postGame = await postVideoGame(req.body)
        res.status(200).send(postGame)
    } catch (error) {
        res.status(404).send("Error")
        console.log(error);
    }
    
}



module.exports = {handlerGetGames, handlerGetById, handlerPostGame}