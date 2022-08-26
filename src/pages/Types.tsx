import { Link, useNavigate } from "react-router-dom";
import { TypesRelations } from "../types";
const Types = () => {
  const navigate = useNavigate();

  console.log(TypesRelations);
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className=" w-full flex flex-col justify-center items-center p-4 gap-4">
        {/* Title */}
        <div className="flex flex-col justify-center items-center">
          <p
            onClick={() => navigate(-1)}
            className="text-5xl pb-2 transition hover:text-green-400 cursor-pointer"
          >
            ←
          </p>
          <h1 className="text-center text-3xl font-bold">Types Associations</h1>
        </div>
        {/* Schema */}
        <div className="flex flex-col gap-2 max-w-screen-md w-full ">
          {TypesRelations.map((el: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-2 border border-white m:p-2"
            >
              <div>
                <p className={`${el.type} text-2xl font-bold text-center`}>
                  {el.type.charAt(0).toUpperCase() + el.type.slice(1)}
                </p>
              </div>
              {/* Relations container */}
              <div className="flex flex-col gap-2">
                {/* Double dmg from */}
                {el.damage_relations.double_damage_from.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center  sm:gap-4 pb-1 border-b border-white">
                    <p className="font-medium">Double Damage From:</p>
                    <div className="flex flex-row gap-2">
                      {el.damage_relations.double_damage_from.map((x: any) => (
                        <div
                          key={x.url}
                          className={`${x.name} border p-1 rounded-md`}
                        >
                          <p className="font-medium">
                            {x.name.charAt(0).toUpperCase() + x.name.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Double dmg to */}
                {el.damage_relations.double_damage_to.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center  sm:gap-4 pb-1 border-b border-white">
                    <p className="font-medium">Double Damage To:</p>
                    <div className="flex flex-row gap-2 ">
                      {el.damage_relations.double_damage_to.map((x: any) => (
                        <div
                          key={x.url}
                          className={`${x.name} border p-1 rounded-md`}
                        >
                          <p className="font-medium">
                            {x.name.charAt(0).toUpperCase() + x.name.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                )}         
                {/* half_damage_from */}
                {el.damage_relations.half_damage_from.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center  sm:gap-4 pb-1 border-b border-white">
                    <p className="font-medium">Half Damage From:</p>
                    <div className="grid grid-cols-3 md:auto-cols-auto gap-2">
                      {el.damage_relations.half_damage_from.map((x: any) => (
                        <div
                          key={x.url}
                          className={`${x.name} border p-1 rounded-md`}
                        >
                          <p className="font-medium">
                            {x.name.charAt(0).toUpperCase() + x.name.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* no_damage_from */}
                {el.damage_relations.no_damage_from.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center  sm:gap-4 pb-1 border-b border-white">
                    <p className="font-medium">No Damage From:</p>
                    <div className="flex flex-row gap-2">
                      {el.damage_relations.no_damage_from.map((x: any) => (
                        <div
                          key={x.url}
                          className={`${x.name} border p-1 rounded-md`}
                        >
                          <p className="font-medium">
                            {x.name.charAt(0).toUpperCase() + x.name.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* no_damage_to */}
                {el.damage_relations.no_damage_to.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center  sm:gap-4">
                    <p className="font-medium">No Damage To:</p>
                    <div className="flex flex-row gap-2">
                      {el.damage_relations.no_damage_to.map((x: any) => (
                        <div
                          key={x.url}
                          className={`${x.name} border p-1 rounded-md`}
                        >
                          <p className="font-medium">
                            {x.name.charAt(0).toUpperCase() + x.name.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Types;
