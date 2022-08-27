const TypesRelCard = ({ data, title }: any) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-4 pb-2 border-b border-gray-700">
      <p className="font-medium">{title}</p>
      {/* <div className="flex flex-row gap-2"> */}
      <div className="flex flex-wrap gap-2 justify-center">

        {data.map((x: any) => (
          <div key={x.url} className={`${x.name} border p-1 rounded-md`}>
            <p className="font-medium">
              {x.name.charAt(0).toUpperCase() + x.name.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypesRelCard;
