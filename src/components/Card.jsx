const Card = ({ title, value, change }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <span
        className={`text-sm mt-1 ${
          change >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {change >= 0 ? `+${change}%` : `${change}%`}
      </span>
    </div>
  );
};

export default Card;
