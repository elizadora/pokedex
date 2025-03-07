// This file contains a function that returns the primary and secondary colors of a type of pokemon.
const getTypeColor = (type) => {
    const typeColors = {
      fire: { primary: "#F5A35C", secondary: "#EE8130" },
      water: { primary: "#8AB6FF", secondary: "#6390F0" },
      grass: { primary: "#A3E075", secondary: "#7AC74C" },
      electric: { primary: "#FFEA70", secondary: "#F7D02C" },
      psychic: { primary: "#FF85A6", secondary: "#F95587" },
      ice: { primary: "#C0F0EE", secondary: "#74B3B0" },
      dragon: { primary: "#9067FF", secondary: "#6F35FC" },
      dark: { primary: "#8A6C5B", secondary: "#705746" },
      fairy: { primary: "#EFA6C7", secondary: "#D685AD" },
      normal: { primary: "#C5C49B", secondary: "#A8A77A" },
      fighting: { primary: "#E0584F", secondary: "#C22E28" },
      flying: { primary: " #A98FF3", secondary: "#C5B6FF" },
      poison: { primary: "#C262C6", secondary: "#A33EA1" },
      ground: { primary: "#F2D187", secondary: "#C9A750" },
      rock: { primary: "#D3C45E", secondary: "#B6A136" },
      bug: { primary: "#C3D34D", secondary: "#A6B91A" },
      ghost: { primary: "#8F72B5", secondary: "#735797" },
      steel: { primary: "#D1D1E6", secondary: "#B7B7CE" },      
    };
  
    return typeColors[type] || { primary: "#999999", secondary: "#777777" };
};


export {getTypeColor};