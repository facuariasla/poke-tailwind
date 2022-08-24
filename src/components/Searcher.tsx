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

const Searcher = ({ handleForm, setInputData, setPokeType }: any) => {
  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center align-center gap-4"
      >
        <div className="flex flex-col gap-1">
          <label>Search by name</label>
          <input
            className="custom_input"
            placeholder="Squirtle"
            onChange={(e) => setInputData(e.target.value.toLowerCase())}
            autoFocus
          />
          <button
            className="h-8 w-full bg-green-700 text-white transition-all duration-300 opacity-80 hover:opacity-100"
            type="submit"
          >
            Search
          </button>
        </div>
        <div>
          <label>Type:</label>
          <select
            defaultValue="all"
            name="type"
            className="custom_input"
            onChange={(e) => setPokeType(e.target.value)}
          >
            <option value="all" className="font-bold">
              All
            </option>
            {valueTypes.map((el: string) => (
              <option className={`${el} font-bold`} key={el} value={el}>
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Searcher;
