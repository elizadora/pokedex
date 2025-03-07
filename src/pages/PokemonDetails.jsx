import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTypeColor } from "../utils/colorsUtils";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const PokemonDetails = () => {
  const params = useParams();
  const pokemonId = params.pokemonId;
  const [pokemon, setPokemon] = useState(null); 
  const [loading, setLoading] = useState(true);

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
      setLoading(false); 
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center">Carregando...</div>;
  }

  return (
    <div className="flex justify-center mt-24 md:mt-5 flex-row flex-wrap">

      {/* Button to go back */}
      <div className="w-full flex justify-start">
        <button className="cursor-pointer" onClick={() => window.history.back()}>
          <ArrowLeftIcon className="md:h-15 h-15 w-20 text-red-500  hover:text-red-400" />
        </button>
      </div>

      {/* Card with Pokemon details */}
      <div
        className="flex flex-col items-center bg-white p-10 rounded-lg shadow-2xl m-4 md:w-200 w-[90%]"
        style={{
          background: `linear-gradient(${window.innerWidth <= 768 ? "180deg" : "90deg"
            }, ${pokemon.types && pokemon.types.length > 0
              ? getTypeColor(pokemon.types[0].type.name).primary
              : "#A8A878"
            } 50%, white 50%)`,

        }}
      >

        {/* Pokemon ID and Name */}
        <div className="flex md:flex-row md:justify-between w-full flex-col items-center">
          <p className="text-4xl font-bold text-gray-600/50">
            #{String(pokemon.id).padStart(3, "0")}
          </p>
          <p className="text-2xl font-bold text-gray-600 capitalize">{pokemon.name}</p>
        </div>
        
        {/* Pokemon Stats and Skills */}
        <div className="flex justify-between md:flex-row w-full mt-4 flex-col-reverse">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-gray-800/70 text-center md:text-left">Statistics</h3>
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

            <div className="w-full mt-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800/70">Skills</h3>
              <div className="flex gap-2 justify-center">
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

          {/* Pokemon Image and Types */}
          <div className="flex flex-col items-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-60 h-60"
            />
            <div className="flex gap-2 my-4 mt-10">
              {pokemon.types.map((type, index) => (
                <span key={index} className="px-4 py-2 rounded-full text-white" 
                style={{ backgroundColor: getTypeColor(type.type.name).secondary }}
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