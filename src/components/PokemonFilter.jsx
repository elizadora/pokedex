import {useState} from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


const PokemonFilter = ({onTypeChange, onSearchChange}) => {
    const [selectedType, setSelectedType] = useState("all");
    const [search, setSearch] = useState("");

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        onTypeChange(e.target.value);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);     
    }

    const setChangeSearch = () =>{
        onSearchChange(search);
    }



    return(
        <div className="flex md:justify-evenly flex-col md:flex-row items-center mb-20 flex-wrap gap-4 md:gap-0">
            <div className="flex bg-white border border-black-300 rounded-4xl">

                {/*  Search Input */}
                <input
                type="search"
                placeholder="Search Pokemon"
                className="md:px-2 md:py-1 rounded-4xl border-none outline-none w-full"
                value={search}
                onChange={handleSearchChange}
                />
                <button className='cursor-pointer py-1 px-2 rounded-4xl flex items-center' onClick={setChangeSearch}>
                    <MagnifyingGlassIcon className="w-6 h-6 text-red-800" />
                </button>
            </div>

            {/* Filter by type */}
            <select className="px-10 py-1 border border-black-300 rounded-4xl bg-white" value={selectedType} onChange={handleTypeChange}>
                <option value="all">All</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="psychic">Psychic</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </select>
        </div>
    )
};

export default PokemonFilter;