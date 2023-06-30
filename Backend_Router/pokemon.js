const express = require("express");
const { getOnePoke, getAllPoke, getDetailedPoke } = require("../Backend_Controller/pokemon");

const pokeRouter = express.Router();


pokeRouter.get("/", getAllPoke);
pokeRouter.get("/:id", getOnePoke);
pokeRouter.get("/:id/:info", getDetailedPoke);









module.exports = pokeRouter;




