import { useState } from "react";
import { getSkill } from "../lib/pokeapi";

const SkillDetails = ({ skillData }: any) => {
  const [oneSkillData, setOneSkillData] = useState<Array<{}>>([]);
  const [loading, setLoading] = useState(false);

  const handleDescription = async (url: string) => {
    if (oneSkillData.length > 0) return;
    setLoading(true);
    (async () => {
      const res = await getSkill(url);
      const ENGdata = res.effect_entries.filter(
        (el: any) => el.language.name === "en"
      );
      console.log(ENGdata);
      setOneSkillData(ENGdata);
    })();
    setLoading(false);
  };

  return (
    <div>
      {/* CONTENIDO */}
      <div className="flex flex-row sm:flex-col gap-4 sm:gap-1 w-full py-2">
        {/* LEFT - TOP  BLOCK */}
        <div className="self-center text-xl text-center text-green-500 font-medium">
          <p onClick={() => handleDescription(skillData.ability.url)}>
            {skillData.ability.name.charAt(0).toUpperCase() +
              skillData.ability.name.slice(1)}
          </p>
        </div>
        {/* RIGHT - DOWN BLOCK */}
        <div>
          {loading
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
              ))}

          {/* {oneSkillData.length > 0
            ? oneSkillData.map((el: any, index: number) => (
                <div key={index}>
                  <p className="font-medium text-yellow-500">
                    {el.short_effect}
                  </p>
                  <p>
                    <i>{el.effect}</i>
                  </p>
                </div>
              ))
            : loading
            ? "Loading..."
            : ""} */}
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
