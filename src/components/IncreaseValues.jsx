
export const IncreaseValues = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h6 className="text-sm font-medium text-blue-600">INCREASE VALUES</h6>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Flexible Pricing Options
        </h2>
        <p className="text-gray-600 mb-6">
          PathSoft has a full range of products for personal data analysis,
          business consultation, and strategic partnership.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Business-Plan Consulting</li>
          <li>First-Class Investments</li>
        </ul>
      </div>

      {/* Image with Play Button Section */}
      <div className="relative md:w-1/2 mt-8 md:mt-0">
        <img
          src="path_to_your_image" // Replace this with the image path or URL
          alt="Flexible Pricing Options"
          className="rounded-lg shadow-lg"
        />
        <button
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play Video"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.54-8.87l-5.34-3.2a.75.75 0 00-1.15.65v6.4a.75.75 0 001.15.65l5.34-3.2a.75.75 0 000-1.3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
