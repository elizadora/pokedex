import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const params = useParams();
  const pokemonId = params.pokemonId;
  const [pokemon, setPokemon] = useState(null); // Inicialize como null
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

  useEffect(() => {
    getPokemonDetails();
  }, [pokemonId]);

  const getPokemonDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      setPokemon(data);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento, independentemente de sucesso ou erro
    }
  };

  const getTypeColor = (type) => {
    const typeColors = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      grass: "#78C850",
      electric: "#F8D030",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dark: "#705848",
      dragon: "#7038F8",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
    };

    return typeColors[type] || "#A8A878";
  };

  if (loading) {
    return <div className="flex justify-center items-center">Carregando...</div>;
  }

  return (
    <div className="flex justify-center mt-5 flex-row flex-wrap">
      <div className="w-full flex justify-start">
        <button className="cursor-pointer" onClick={() => window.history.back()}>
          <svg
            className="w-30 h-20 text-red-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
      </div>
      <div
        className="flex flex-col items-center bg-white p-10 rounded-lg shadow-2xl m-4 w-200"
        style={{
          background: `linear-gradient(90deg, ${
            pokemon.types && pokemon.types.length > 0
              ? getTypeColor(pokemon.types[0].type.name)
              : "#A8A878"
          } 50%, white 50%)`,
        }}
      >
        <div className="flex flex-row justify-between w-full">
          <p className="text-4xl font-bold text-gray-600/50">
            #{String(pokemon.id).padStart(3, "0")}
          </p>
          <p className="text-2xl font-bold text-gray-600">{pokemon.name}</p>
        </div>
        <div className="flex justify-between flex-row w-full mt-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800/70">Estatísticas</h3>
            <div className="space-y-2">
              {pokemon.stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <span className="flex-1 font-medium whitespace-break-spaces">
                    {stat.stat.name}:
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-1 mr-3">
                    <div
                      className="bg-blue-500 h-1 rounded-full"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-right">{stat.base_stat}</span>
                </div>
              ))}
            </div>

            <div className="w-full mt-4">
              <h3 className="text-2xl font-bold text-gray-800/70">Habilidades</h3>
              <div className="flex gap-2">
                {pokemon.abilities.map((ability, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-gray-300 rounded-full"
                  >
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-60 h-60"
            />
            <div className="flex gap-2 my-4">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-white"
                  style={{ backgroundColor: getTypeColor(type.type.name) }}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;