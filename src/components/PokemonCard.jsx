const PokemonCard = ({ pokemon }) =>{
    const primaryType = pokemon.types[0].type.name;
    const cardColor = getTypeColor(primaryType).primary;

    return(
        <div className="p-6 rounded-lg shadow-md m-4 w-60"
            style={{
                backgroundColor: cardColor,
                color: "#ffffff",
            }}
        >
            <div className="text-sm text-gray-600"><h3>#{pokemon.id}</h3></div>
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
      electric: { primary: "#F7D02C", secondary: "#FFEA70" },
      psychic: { primary: "#F95587", secondary: "#FF85A6" },
      ice: { primary: "#96D9D6", secondary: "#C0F0EE" },
      dragon: { primary: "#6F35FC", secondary: "#9067FF" },
      dark: { primary: "#705746", secondary: "#8A6C5B" },
      fairy: { primary: "#D685AD", secondary: "#EFA6C7" },
      normal: { primary: "#C5C49B", secondary: "#A8A77A" },
      fighting: { primary: "#C22E28", secondary: "#E0584F" },
      flying: { primary: "#C5B6FF", secondary: " #A98FF3" },
      poison: { primary: "#A33EA1", secondary: "#C262C6" },
      ground: { primary: "#E2BF65", secondary: "#F2D187" },
      rock: { primary: "#B6A136", secondary: "#D3C45E" },
      bug: { primary: "#C3D34D", secondary: "#A6B91A" },
      ghost: { primary: "#735797", secondary: "#8F72B5" },
      steel: { primary: "#B7B7CE", secondary: "#D1D1E6" },
    };
  
    return typeColors[type] || { primary: "#999999", secondary: "#777777" }; // Cor padrão para tipos desconhecidos
  };
  

export default PokemonCard;