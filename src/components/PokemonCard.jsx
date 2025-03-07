import { useNavigate } from "react-router-dom";
import { getTypeColor } from "../utils/colorsUtils";


const PokemonCard = ({ pokemon }) =>{
    const navigate = useNavigate();
    const primaryType = pokemon.types[0].type.name;
    const cardColor = getTypeColor(primaryType).primary;


    const navigateToPokemon = () => {
        navigate(`/pokemon/${pokemon.id}`, { state: pokemon });
    };


    return(
        <div className="p-6 rounded-lg shadow-md m-4 md:w-60 w-80 cursor-pointer transition-transform transform hover:scale-105"
            style={{
                backgroundColor: cardColor,
                color: "#ffffff",
            }}

            onClick={navigateToPokemon}

        >
            <div className="text-2xl text-gray-600/50 font-medium"><h3>#{String(pokemon.id).padStart(3, "0")}</h3></div>
            <div className="flex justify-center">
                <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-32 h-32"
                />
            </div>
            <h2 className="text-xl font-bold text-center capitalize mt-4">
                {pokemon.name}
            </h2>

            {/* Types of pokemons */}
            <div className="flex justify-center gap-2 mt-4">
                {pokemon.types.map((type, index) => (
                <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                        backgroundColor: getTypeColor(type.type.name).secondary,
                        color: "#ffffff",
                    }}
                >
                    {type.type.name}
                </span>
                ))}
            </div>  
        </div>
    )
}
export default PokemonCard;