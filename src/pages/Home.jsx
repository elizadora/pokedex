import Pokedex from "../assets/pokedex.png";

const Home = () => {
    return (
      <div className="flex flex-row justify-between items-start mt-30">
        <div className="ml-30 mt-10 text-left">
            <h1 className="text-[45px] font-medium pb-2">Bem vindo à 
              <span className="pr-3 bg-gradient-to-b from-transparent from-50% to-red-300 to-50%"> Pokedex</span></h1>
            <p className="text-[30px]">Explore o mundo dos Pokémons.</p>
        </div>
        <div className="mr-10">
          <img className="w-130" src={Pokedex}/>
        </div>
      </div>
    );
  };
  
  export default Home;