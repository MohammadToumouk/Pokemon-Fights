import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import PokeList from './components/PokeList';
import OnePokemon from './components/OnePokemon';
import DetailedPokemon from './components/DetailedPokemon';

function App() {

  return (
    <>
      <nav>
        <NavLink to={"/pokemon"}> All Pokemon </NavLink>
      </nav>
      <Routes>
        <Route path="/pokemon" element={<PokeList />} />
        <Route path="/pokemon/:id" element={<OnePokemon />} />
        <Route path="/pokemon/:id/:info" element={<DetailedPokemon />} />
      </Routes>
    </>
  )
}

export default App;
