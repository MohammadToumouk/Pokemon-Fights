import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function OnePokemon() {
  const [pokemon, setPokemon] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:4090/pokemon/${id}`)
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {pokemon && (
        <>
          <h1>{pokemon.name.english}</h1>
          <h3>Type: {pokemon.type}-Pokemon</h3>
          <h3>Base:</h3>
          
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
          <p>HP: {pokemon.base.HP}</p>
          <p>Sp. Attack: {pokemon.base.HP}</p>
          <p>Sp. Defense: {pokemon.base.HP}</p>
          <p>Speed: {pokemon.base.Speed}</p>
        </>
      )}
    </>
  );
}

