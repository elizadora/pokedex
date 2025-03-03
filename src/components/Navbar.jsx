import React from "react";
import PokemonLogo from "../assets/logonav.png";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="text-gray-600 flex justify-between items-center h-24 shadow-md">
            <div className="w-full">
                <img className="pl-20 w-70" src={PokemonLogo} />
            </div>
            <div className="w-full text-2xl">
                <ul className="flex">
                    <li className="p-12 hover:text-gray-900 hover:underline hover:decoration-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-12 hover:text-gray-900 hover:underline hover:decoration-3">
                        <Link to="/pokemons">Pokemons</Link>
                    </li>
                    <li className="p-12 hover:text-gray-900 hover:underline hover:decoration-3">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;