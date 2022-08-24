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

const Searcher = ({ handleForm, setInputData, inputData, setPokeType, pokeType }: any) => {
  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center align-center gap-4 w-full"
      >
        <div className="flex flex-col m:flex-row gap-1 w-full ">
          <div className=" flex flex-col gap-1 w-full m:w-10/12">
            <label>Search by name</label>
            <input
              className="custom_input"
              placeholder="eg: squirtle"
              onChange={(e) => setInputData(e.target.value.toLowerCase())}
              autoFocus
              value={inputData}
            />
            <button
              className="h-8 w-full bg-green-700 text-white transition-all duration-300 opacity-80 hover:opacity-100"
              type="submit"
            >
              Search
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <label>Type:</label>
            <select
              name="type"
              // className="custom_input"
              className={`${pokeType} custom_input font-bold`}
              value={pokeType}
              onChange={(e) => setPokeType(e.target.value)}
            >
              <option value="all" className="text-white font-bold">
                All
              </option>
              {valueTypes.map((el: string) => (
                <option className={`${el} font-bold`} key={el} value={el}>
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searcher;
