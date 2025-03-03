import { useEffect, useState } from "react";
import PokemonFilter from "../components/PokemonFilter";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if(selectedType !== "all"){
      getPokemonsByType();
    
    }else if(search !== ""){
      getPokemonsBySearch();  

    }else{
      getPokemons();
    }


  }, [page, selectedType, search]);

  // Get pokemons 
  const getPokemons = async() =>{

    try{
      const offset = (page - 1) * 20;
      
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        
   
      const totalPokemons = data.count;
      setTotalPages(Math.ceil(totalPokemons / 20));

      const pokemonUrls = data.results.map((entry) => entry.url);

      const response = await axios.all(pokemonUrls.map((url) => axios.get(url)));

      setPokemonList(response.map((res) => res.data));

    }catch(error){
      console.error("Erro ao buscar Pokémon:", error);
    }

  }

  // Get pokemons by type
  const getPokemonsByType = async() =>{
    try{
      const offset = (page - 1) * 20;
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);

      const totalPokemons = data.pokemon.length;
      setTotalPages(Math.ceil(totalPokemons / 20));
        
      const pokemonUrls = data.pokemon.map((entry) => entry.pokemon.url);
      const paginatedUrls = pokemonUrls.slice(offset, offset + 20);

      const response = await axios.all(paginatedUrls.map((url) => axios.get(url)));

      setPokemonList(response.map((res) => res.data));

    }catch(error){
      console.error("Erro ao buscar Pokémon:", error);
    }
  }

  // Get pokemons by search
const getPokemonsBySearch = async() =>{
  try{
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    setPokemonList([data]);

    setTotalPages(1);


  }catch(error){
    if(error.response.status === 404){
      setPokemonList([]);
      setTotalPages(0);
      console.log("Pokemon não encontrado");

    }else{
      console.error("Erro ao buscar Pokémon:", error);
    }
  }
}


  const handleTypeChange = (type) => {
    setSelectedType(type);
    setPage(1);
  };

  const handleSearchChange = (search) => {
    setSearch(search);
    setPage(1);
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
      <div className="mt-10 flex flex-col justify-center">
        <div className="text-center mb-10">
          <h1 className="text-4xl">Desvende todos os Pokémons</h1>
        </div>

        {/*  Pokemon Filter */}
          <PokemonFilter onTypeChange={handleTypeChange}  onSearchChange={handleSearchChange}/>

        {/* Pokemon List */}
          <div className="flex flex-wrap items-center justify-center gap-4 ">
              {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
          <div className="flex justify-around mb-10 items-center mt-5">
            <button
              className={`px-4 py-2 rounded-md w-50 text-white
              ${page <= 1 ? "bg-gray-500 cursor-not-allowed" 
              : "bg-red-500 hover:bg-red-600 cursor-pointer"}
              `}
              onClick={handlePrevPage}
              disabled={page <= 1}
            >
              Prev
            </button>
            <span>{page} de {totalPages} </span>
            <button
              className={`px-4 py-2 rounded-md w-50 text-white
                ${page >= totalPages ? "bg-gray-500 cursor-not-allowed" 
                : "bg-red-500 hover:bg-red-600 cursor-pointer"}
                `}
              onClick={handleNextPage}
              disabled = {page >= totalPages}
            >
              Next
            </button>

          </div>
      </div>
    );
  };
  
  export default Pokemons;