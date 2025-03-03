import React, {useState} from 'react';

const PokemonFilter = ({onTypeChange, onSearchChange}) => {
    const [selectedType, setSelectedType] = useState("all");
    const [search, setSearch] = useState("");

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        // notify parent component
        onTypeChange(e.target.value);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);     
    }

    const setChangeSearch = () =>{
        onSearchChange(search);
    }



    return(
        <div className="flex justify-evenly items-center mb-20 flex-wrap">
            <div className="flex bg-white border border-black-300 rounded-4xl">
                <input
                type="search"
                placeholder="Search Pokemon"
                className="px-2 py-1 rounded-4xl border-none outline-none"
                value={search}
                onChange={handleSearchChange}
                />
                <button className='cursor-pointer py-1 px-2 rounded-4xl' onClick={setChangeSearch}>
                    <svg className="w-6 h-6 text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
            </div>
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