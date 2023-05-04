const {Router} = require("express");
const { handlerGetGames, handlerGetById, handlerPostGame } = require("../handlers/handlerVideoGames");

const videogamesRouter = Router();

videogamesRouter.get("/", handlerGetGames)

videogamesRouter.get("/:idVideogame", handlerGetById)



videogamesRouter.post("/", handlerPostGame)

module.exports = videogamesRouter