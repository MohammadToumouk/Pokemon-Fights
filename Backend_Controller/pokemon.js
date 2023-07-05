const allPokemon = require("../ViteApp/src/components/pokemon.json");


const getAllPoke = async (req, res, next) => {
  res.status(200).json(allPokemon);
};


const getOnePoke = async (req, res, next) => {
  const result = allPokemon.filter((pokemon) => {
    return pokemon.id == req.params.id;
  });
  if (result.length != 0) {
    res.status(201).json(result[0]);
  } else {
    res.status(500).send("Something went wrong");
  }
};


const getDetailedPoke = async (req, res, next) => {
  const result = allPokemon.filter((pokemon) => {
    return pokemon.id == req.params.id;
  });
  if (req.params.info in result[0]) {
    res.status(201).json(result[0][(req.params.info)]);
  } else {
    res.status(500).send("Something went wrong");
  }
};


module.exports = { getOnePoke, getAllPoke, getDetailedPoke };
