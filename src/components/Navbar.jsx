import PokemonLogo from "../assets/logonav.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="text-neutral-100 md:flex md:justify-between md:items-center h-24 md:shadow-md bg-red-500">
            <div className="flex justify-between items-center w-full p-2">
                {/* Logo */}
                <img
                    className="md:pl-20 md:w-70 w-50 pl-7"
                    src={PokemonLogo}
                    alt="Pokemon Logo"
                />

                {/* Ícone do menu (mobile) */}
                <span
                    className="text-3xl cursor-pointer md:hidden mx-2 block"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="w-10 h-10 text-white" />
                    ) : (
                        <Bars4Icon className="w-10 h-10 text-white" />
                    )}
                </span>
            </div>

            {/* Menu de navegação */}
            <div className="w-full text-2xl">
                <ul
                    className={`md:flex md:items-center absolute md:static bg-red-500 w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-7 md:opacity-100 transition-all duration-500 ease-in ${
                        isMenuOpen ? "top-24 opacity-100 z-10" : "top-[-400px] opacity-0 z-[-1]"
                    }`}
                >
                    <li className="mx-4 my-6 md:my-0 hover:text-neutral-200 hover:underline hover:decoration-3 cursor-pointer">
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0 hover:text-neutral-200 hover:underline hover:decoration-3 cursor-pointer">
                        <Link to="/pokemons" onClick={closeMenu}>
                            Pokemons
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0 hover:text-neutral-200 hover:underline hover:decoration-3 cursor-pointer">
                        <Link to="/contact" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;