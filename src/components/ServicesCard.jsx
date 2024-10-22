
export const ServicesCard = ({heading,image,subtext}) => {
  return (
    <div className="w-full col-span-12 lg:col-span-6  rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img
        className="w-full object-cover h-64"
        src={image} // Replace with the actual image path
        alt="ID pass security"
      />

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">{heading}</h2>
        <p className="text-gray-600 mt-2">
         {subtext}
        </p>
      </div>
    </div>
  );
}
