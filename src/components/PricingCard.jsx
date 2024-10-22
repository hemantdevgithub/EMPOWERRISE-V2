
const PricingCard = ({ plan, price, features, isPopular }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-8 w-80">
      <div className="flex justify-center">
        <div
          className={`rounded-full p-4 ${
            isPopular ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7H7m0 0H5a2 2 0 01-2-2V5a2 2 0 012-2h2m6 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2M13 7v10m-6 6h8a2 2 0 002-2v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-center text-gray-700 text-lg font-semibold mt-4">
        {plan}
      </h3>
      <div className="text-center my-4">
        <span className="text-4xl font-bold text-blue-600">£ {price}</span>
        <span className="text-lg text-gray-500">/monthly</span>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 ${
              !feature.available ? "line-through text-gray-400" : ""
            }`}
          >
            <span>{feature.available ? "✔️" : "❌"}</span>
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Join this plan →
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
