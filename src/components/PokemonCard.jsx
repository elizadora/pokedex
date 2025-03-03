import { useNavigate } from "react-router-dom";


const PokemonCard = ({ pokemon }) =>{
    const navigate = useNavigate();
    const primaryType = pokemon.types[0].type.name;
    const cardColor = getTypeColor(primaryType).primary;


    const navigateToPokemon = () => {
        navigate(`/pokemon/${pokemon.id}`, { state: pokemon });
    };


    return(
        <div className="p-6 rounded-lg shadow-md m-4 w-60 cursor-pointer transition-transform transform hover:scale-105"
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

const getTypeColor = (type) => {
    const typeColors = {
      fire: { primary: "#F5A35C", secondary: "#EE8130" },
      water: { primary: "#8AB6FF", secondary: "#6390F0" },
      grass: { primary: "#A3E075", secondary: "#7AC74C" },
      electric: { primary: "#FFEA70", secondary: "#F7D02C" },
      psychic: { primary: "#FF85A6", secondary: "#F95587" },
      ice: { primary: "#C0F0EE", secondary: "#74B3B0" },
      dragon: { primary: "#9067FF", secondary: "#6F35FC" },
      dark: { primary: "#8A6C5B", secondary: "#705746" },
      fairy: { primary: "#EFA6C7", secondary: "#D685AD" },
      normal: { primary: "#C5C49B", secondary: "#A8A77A" },
      fighting: { primary: "#E0584F", secondary: "#C22E28" },
      flying: { primary: " #A98FF3", secondary: "#C5B6FF" },
      poison: { primary: "#C262C6", secondary: "#A33EA1" },
      ground: { primary: "#F2D187", secondary: "#C9A750" },
      rock: { primary: "#D3C45E", secondary: "#B6A136" },
      bug: { primary: "#C3D34D", secondary: "#A6B91A" },
      ghost: { primary: "#8F72B5", secondary: "#735797" },
      steel: { primary: "#D1D1E6", secondary: "#B7B7CE" },      
    };
  
    return typeColors[type] || { primary: "#999999", secondary: "#777777" }; // Cor padrão para tipos desconhecidos
  };
  

export default PokemonCard;