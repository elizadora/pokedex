    import {Router, Routes, Route } from "react-router-dom";
    import Home from "./pages/Home";
    import Pokemons from "./pages/Pokemons";
    import Contact from "./pages/Contact";
    import PokemonDetails from "./pages/PokemonDetails";

    const RoutesController = () =>{
        return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pokemons" element={<Pokemons/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetails/>} />
            </Routes>
            
        )
    }

    export default RoutesController;