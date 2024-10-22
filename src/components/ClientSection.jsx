
const ClientsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-8 space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Left Images */}
      <div className="flex flex-col space-y-4 relative inset-0">
        <div className="w-64 h-64 rounded-lg overflow-hidden ">
          <img
            src="homebanner.jpg"
            alt="Handshake"
            className="w-full h-full object-cover absolute right-24"
          />
        </div>
        <div className="w-24 h-24 rounded-lg overflow-hidden  ">
          <img
            src="homebanner.jpg"
            alt="Team Collaboration"
            className="w-full h-full object-cover absolute top-24"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1 max-w-xl">
        <h3 className="text-sm text-gray-500 uppercase">With Our Clients</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Forming strong and trusted connections
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          PathSoft has a full range of products for personal data analysis,
          business consultation, and strategic partnership. PathSoft allows your
          business and technology computers to store, transmit, analyze, and
          manipulate big data.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-2xl">🔗</span>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Request API Integration
              </h4>
              <p className="text-gray-600">
                PathSoft allows your business and technology.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-2xl">🔗</span>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Simple Registration System
              </h4>
              <p className="text-gray-600">
                PathSoft allows your business and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
