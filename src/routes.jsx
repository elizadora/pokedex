    import {Router, Routes, Route } from "react-router-dom";
    import Home from "./pages/Home";
    import Pokemons from "./pages/Pokemons";
    import Contact from "./pages/Contact";

    const RoutesController = () =>{
        return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pokemons" element={<Pokemons/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            
        )
    }

    export default RoutesController;