import { Link } from "react-router-dom";

const HomeCard = ({ pokeData }: any) => {

  return (
    <Link to={`/${pokeData.name}`}>
      <div className="card">
        <div>
          {pokeData?.name ? (
            <h1 className="font-bold">
              {pokeData.name?.charAt(0).toUpperCase() + pokeData.name?.slice(1)}
            </h1>
          ) : (
            "EL MISTERIOSO"
          )}
        </div>
        <div>
          <img src={pokeData.imageurl} className="" />
        </div>
        <p className="text-xs">{pokeData.pokeid}</p>
      </div>
      </Link>
  );
};

export default HomeCard;
