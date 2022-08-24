export const getAllPokemons = async () => {
  // All pokemons = 1154
  try {
    const res = await fetch("http://pokeapi.co/api/v2/pokemon/?limit=1154");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOnePokemon = async (url:string) => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}