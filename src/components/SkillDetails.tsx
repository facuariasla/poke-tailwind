import { useState } from "react";
import { getSkill } from "../lib/pokeapi";

const SkillDetails = ({ skillData }: any) => {
  const [oneSkillData, setOneSkillData] = useState<Array<{}>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const handleDescription = async (url: string) => {
    setShow(!show);
    if (oneSkillData.length > 0) return;
    setLoading(true);
    (async () => {
      const res = await getSkill(url);
      const ENGdata = res.effect_entries.filter(
        (el: any) => el.language.name === "en"
      );
      console.log(ENGdata);
      setOneSkillData(ENGdata);
      setLoading(false);
    })();
  };

  return (
    <button
      className="flex justify-center items-center"
      onClick={() => handleDescription(skillData.ability.url)}
    >
      {/* CONTENIDO */}
      <div className="flex flex-col sm:gap-1 w-full py-2">
        {/* LEFT - TOP  BLOCK */}
        <div className="self-center text-xl text-center text-green-500 font-medium hover:text-green-300 transition">
          <p className="text-center">
            {skillData.ability.name.charAt(0).toUpperCase() +
              skillData.ability.name.slice(1)}
            {"  "}
            {show ? "↑" : "↓"}
          </p>
        </div>
        {/* RIGHT - DOWN BLOCK */}
        <div>
          {show
            ? loading
              ? "Loading..."
              : oneSkillData?.length > 0 &&
                oneSkillData?.map((el: any, index: number) => (
                  <div key={index}>
                    <p className="font-medium text-yellow-500">
                      {el.short_effect}
                    </p>
                    <p>
                      <i>{el.effect}</i>
                    </p>
                  </div>
                ))
            : ""}
        </div>
        <hr />
      </div>
    </button>
  );
};

export default SkillDetails;
