import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import Pagination from "../components/Pagination";
import Searcher from "../components/Searcher";
import { getAllPokemons, getByType } from "../lib/pokeapi";

const Home: React.FC = () => {
  const [inputData, setInputData] = useState<string>("");
  const [pokeType, setPokeType] = useState<string>("all");
  const [allPokemons, setAllPokemons] = useState<Array<{}>>([]);
  // Cuando tenga paginado borrar este array:
  const [fiftyPokes, setFiftyPokes] = useState<Array<{}>>([]);
  const [pokeSearch, setPokeSearch] = useState<Array<{}>>([]);
  const [searched, setSearched] = useState<boolean>(false);

  // Paginado:
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokesPerPage, setPokesPerPage] = useState<number>(100);

  // Limpiar busqueda
  const cleanSearch = () => {
    setSearched(false);
    setInputData("");
    setPokeType("all");
    setPokeSearch([]);
  };

  // Al clickear BUSCAR
  const handleForm = async (e: any) => {
    e.preventDefault();
    if (inputData.length === 0) return;

    setSearched(true);
    // Si no hay un type (filtro) seleccionado
    // que busque entre todos
    if (pokeType === "all") {
      const newArray = allPokemons?.filter((el: any) =>
        el.name.includes(inputData)
      );
      setPokeSearch(newArray);
      return;
    }
    // Si HAY un type (filtro) seleccionado
    (async () => {
      const resByType = await getByType(pokeType);
      const pokemonsType = await resByType.pokemon.map((el: any) => {
        return {
          ...el.pokemon,
          // imageurl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          //   el.pokemon.url.split("/")[6]
          // }.png`,
          imageurl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            el.pokemon.url.split("/")[6]
          }.png`,
          pokeid: el.pokemon.url.split("/")[6],
          //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png
        };
      });
      const arrayType = pokemonsType?.filter((el: any) =>
        el.name.includes(inputData)
      );
      setPokeSearch(arrayType);
    })();
  };

  // Setea los primeros 100 pokemons
  useEffect(() => {
    (async () => {
      const pokequery = await getAllPokemons();
      const pokequeryWImg = await pokequery.results.map((el: any) => {
        return {
          ...el,
          // imageurl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          //   el.url.split("/")[6]
          // }.png`,
          imageurl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            el.url.split("/")[6]
          }.png`,
          pokeid: el.url.split("/")[6],
        };
      });

      setAllPokemons(pokequeryWImg);

      setFiftyPokes(pokequeryWImg.slice(0, pokesPerPage));
    })();
  }, []);

  // Get current pokes
  const indexOfLastPoke = currentPage * pokesPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  const currentPokes = allPokemons.slice(indexOfFirstPoke, indexOfLastPoke);

  // change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <header className="flex justify-center ">
        <p className="text-5xl font-bold text-center text-yellow-400">Poke-</p>
        <p className="text-5xl font-bold text-center text-green-500">buscador</p>
      </header>

      <Searcher
        handleForm={handleForm}
        setInputData={setInputData}
        setPokeType={setPokeType}
        pokeType={pokeType}
        inputData={inputData}
      />
      {searched ? (
        <div>
          <button
            className="px-2 rounded cursor-pointer bg-red-500 transition-all hover:bg-red-400  "
            onClick={() => cleanSearch()}
          >
            Clean Search 🧹
          </button>
        </div>
      ) : (
        ""
      )}

      {/* pokemons container */}
      <div>
        <div className="gap-4 grid s:grid-cols-2 m:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 justify-items-center w-full">
          {/* {fiftyPokes.length > 0
            ? fiftyPokes.map((poke: any) => (
                <HomeCard key={poke.url} pokeData={poke} />
              ))
            : ""} */}

          {searched
            ? pokeSearch.length > 0
              ? pokeSearch.map((el: any) => (
                  <HomeCard key={el.url} pokeData={el} />
                ))
              : "Not finded"
            : currentPokes.map((poke: any) => (
                <HomeCard key={poke.url} pokeData={poke} />
              ))}
        </div>
      </div>
      {!searched && (
        <Pagination
          pokesPerPage={pokesPerPage}
          totalPokes={allPokemons.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default Home;
