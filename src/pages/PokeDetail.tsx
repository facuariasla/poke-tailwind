import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BarValues from "../components/BarValues";
import { getOnePokemon } from "../lib/pokeapi";
import notfoundimg from "../assets/icon-poke.png";
import SkillDetails from "../components/SkillDetails";

import { HashLink } from "react-router-hash-link";

const PokeDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getOnePokemon(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonDetail(data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="px-4 pb-4 flex flex-col w-full justify-center items-center">
      <Link to="/">
        <p className="text-5xl pb-2 transition hover:text-green-400">←</p>
      </Link>
      {pokemonDetail ? (
        <div className="flex flex-col max-w-2xl w-full gap-4">
          <div className="gap-6 flex flex-col sm:flex-row max-w-2xl w-full justify-center items-center">
            {/* LEFT BLOCK - TOP BLOCK */}
            <div className="flex flex-col w-full">
              <div className="flex flex-col justify-center items-center">
                <p className="text-4xl font-medium">
                  {pokemonDetail?.name?.charAt(0).toUpperCase() +
                    pokemonDetail?.name?.slice(1)}
                </p>
                <div className="flex flex-row gap-2 p-1">
                  {pokemonDetail?.types.map((el: any, index: number) => (
                    // {el.type.name}
                    <div key={index} className={`${el.type.name}`}>

                      {/* <Link
                        to={{ pathname: "/types", hash: `#${el.type.name}` }}
                      >
                        <p className="font-bold text-lg transition hover:opacity-80">
                          {el.type.name.charAt(0).toUpperCase() +
                            el.type.name.slice(1)}{" "}
                          →
                        </p>
                      </Link> */}
                      <HashLink to={`/types#${el.type.name}`}>
                      <p className="font-bold text-lg transition hover:opacity-80">
                          {el.type.name.charAt(0).toUpperCase() +
                            el.type.name.slice(1)}{" "}
                          →
                        </p>
                      </HashLink>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="gap-6 flex flex-row justify-center items-center">
                <p className="text-center font-medium">
                  {/* Height: {Math.round((pokemonDetail?.height/7) * 10) / 10} m */}
                  Height: {pokemonDetail?.height / 10} m
                </p>
                <p className="text-center font-medium">
                  Weight: {pokemonDetail?.weight / 10} kg
                </p>
              </div>
              <hr />

              <div className="p-4 flex justify-center items-center">
                <img
                  src={
                    pokemonDetail.sprites.other["official-artwork"]
                      .front_default
                  }
                  // src={pokemonDetail?.sprites.other.dream_world.front_default}
                  className="max-h-48 w-auto"
                  alt={pokemonDetail?.name}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = notfoundimg;
                  }}
                />
              </div>
            </div>
            {/* RIGHT BLOCK - DOWN BLOCK*/}
            <div className="flex flex-col w-full self-start">
              <div>
                <p className="text-2xl font-medium text-center">Stats:</p>
              </div>
              <div>
                {pokemonDetail?.stats.map((el: any, index: number) => (
                  <div key={index} className="flex flex-col">
                    <p className="font-medium">
                      {el.stat.name.charAt(0).toUpperCase() +
                        el.stat.name.slice(1)}
                      : {el.base_stat}
                    </p>
                    <BarValues value={el.base_stat} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* SKILLS - CAMBIAR DE LUGAR LAS SKILLS*/}
          <div>
            <p className="text-2xl font-medium text-center pb-2">Skills:</p>
            <div className="flex flex-col gap-2">
              {pokemonDetail?.abilities.map((el: any, index: number) => (
                <SkillDetails key={index} skillData={el} />
                // <div key={index} className='flex flex-row gap-4'>
                //   <p>
                //     {el.ability.name.charAt(0).toUpperCase() +
                //       el.ability.name.slice(1)}
                //   </p>
                // </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default PokeDetail;
