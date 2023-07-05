import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";


export default function PokeList() {
  const [pokemon, setPokemon] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4090/pokemon")
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>
      {pokemon.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <h2>
              {pokemon.name.english}
            </h2>
            <button onClick={()=>{
                navigate(`/pokemon/${pokemon.id}`)
            }}>Detailed view</button>
          </div>
        );
      })}
    </>
  );
}
