import { Link, useNavigate } from "react-router-dom";
import TypeCard from "../components/TypeCard";
import TypesRelCard from "../components/TypesRelCard";
import { TypesRelations } from "../types";

const TypePage = () => {
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
        <div className="flex flex-col gap-10 max-w-screen-md w-full ">
          {TypesRelations.map((el: any, index: number) => (
            <TypeCard key={index} cardData={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypePage;
