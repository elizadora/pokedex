const PokemonFilter = () => {
    return(
        <div className="flex justify-evenly items-center mb-10">
            <select className="px-10 py-1 border border-gray-300 rounded-md">
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
            <input
            type="text"
            placeholder="Search Pokemon"
            className="px-2 py-1 border border-gray-300 rounded-md"
            />
        </div>
    )
};

export default PokemonFilter;