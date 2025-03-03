import { useEffect, useState } from "react";
import PokemonFilter from "../components/PokemonFilter";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getPokemons();
  }, [page]);

  const getPokemons = async() =>{

    try{
      const offset = (page - 1) * 20;
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);

      const responses = await axios.all(data.results.map(({ url }) => axios.get(url)));

      setPokemonList(responses.map((res) => res.data));


    }catch(error){
      console.error("Erro ao buscar Pokémon:", error);
    }

  }

  const handleNextPage = () => {
      setPage(page + 1);
    
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };


    return (
      <div className="mt-10">
        {/*  Pokemon Filter */}
          <PokemonFilter />

        {/* Pokemon List */}
          <div className="flex flex-wrap">
              {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <button
              className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
              onClick={handlePrevPage}
              disabled={page <= 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 mt-4 mx-4">{page}</span>
            <button
              className="px-4 py-2 mt-4 ml-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
              onClick={handleNextPage}
            >
              Next
            </button>

          </div>
      </div>
    );
  };
  
  export default Pokemons;