import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import Searcher from "../components/Searcher";
import { getAllPokemons } from "../lib/pokeapi";

const valueTypes = [
  "normal",
  "fire",
  "water",
  "grass",
  "flying",
  "fighting",
  "poison",
  "electric",
  "ground",
  "rock",
  "psychic",
  "ice",
  "bug",
  "ghost",
  "steel",
  "dragon",
  "dark",
  "fairy",
];

const Home: React.FC = () => {
  const [inputData, setInputData] = useState<string>("");
  const [pokeType, setPokeType] = useState<string>("all");
  const [allPokemons, setAllPokemons] = useState();
  // Despues borrar este array:
  const [fiftyPokes, setFiftyPokes] = useState<Array<{}>>([]);

  const handleForm = (e: any) => {
    e.preventDefault();
    console.log({ name: inputData, type: pokeType });
  };

  useEffect(() => {
    (async () => {
      const pokequery = await getAllPokemons();
      const pokequeryWImg = await pokequery.results.map((el: any) => {
        return {
          ...el,
          imageurl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            el.url.split("/")[6]
          }.png`,
        };
      });

      setAllPokemons(pokequeryWImg);

      setFiftyPokes(pokequeryWImg.slice(0, 50));
    })();

    console.log("Agregar paginado");
  }, []);

  useEffect(() => {
    // Se cambia el array de pokemons dependiendo el type seleccionado (filtro)
    console.log(pokeType);
  }, [pokeType]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <header className="flex justify-center ">
        <h1 className="text-3xl font-bold text-center">POKEMON SEARCHER</h1>
      </header>

      <Searcher handleForm={handleForm} setInputData={setInputData} setPokeType={setPokeType}/>

      {/* pokemons container */}
      <div>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 justify-items-center w-full">
          {fiftyPokes.length > 0
            ? fiftyPokes.map((poke: any) => (
                <HomeCard key={poke.url} pokeData={poke}/>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
