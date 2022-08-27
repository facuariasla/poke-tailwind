import TypesRelCard from "./TypesRelCard";

const TypeCard = ({ cardData }: any) => {
  return (
    <div id={cardData.type} className="bg-gray-900 flex flex-col gap-2  px-4 py-2 rounded-lg">
      <div>
        <p className={`${cardData.type} text-2xl font-bold text-center`}>
          {cardData.type.charAt(0).toUpperCase() + cardData.type.slice(1)}
        </p>
      </div>
      {/* Relations container */}
      <div className="flex flex-col gap-2">
        {cardData.damage_relations.double_damage_from.length > 0 && (
          <TypesRelCard
            data={cardData.damage_relations.double_damage_from}
            title="x2 Damage From:"
          />
        )}
        {/* Double dmg to */}
        {cardData.damage_relations.double_damage_to.length > 0 && (
          <TypesRelCard
            data={cardData.damage_relations.double_damage_to}
            title="x2 Damage to:"
          />
        )}
        {/* half_damage_from */}
        {cardData.damage_relations.half_damage_from.length > 0 && (
          <TypesRelCard
            data={cardData.damage_relations.half_damage_from}
            title="Half Damage From: "
          />
        )}
        {/* no_damage_from */}
        {cardData.damage_relations.no_damage_from.length > 0 && (
          <TypesRelCard
            data={cardData.damage_relations.no_damage_from}
            title="No Damage From:"
          />
        )}
        {/* no_damage_to */}
        {cardData.damage_relations.no_damage_to.length > 0 && (
          <TypesRelCard
            data={cardData.damage_relations.no_damage_to}
            title="No Damage To:"
          />
        )}
      </div>
    </div>
  );
};

export default TypeCard;
