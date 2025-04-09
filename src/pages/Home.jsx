import Pokedex from "../assets/pokedex.png";

const Home = () => {
    return (
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mt-14 pt-24 md:pt-0">
        <div className="md:ml-32 md:mt-10 text-left ml-10">
            <h1 className="text-[45px] font-medium pb-2">Welcome to the 
              <span className="pr-3 bg-gradient-to-b from-transparent from-50% to-red-300 to-50%"> Pokedex</span></h1>
            <p className="text-[30px]">Explore the world of Pokémon</p>
        </div>
        <div className="md:mr-10 mt-10">
          <img className="md:w-[520px] w-[400px]" src={Pokedex}/>
        </div>
      </div>
    );
  };
  
  export default Home;