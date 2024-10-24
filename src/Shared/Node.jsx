import PropTypes from "prop-types";

const Node = ({ successFramework1 }) => {
  return (
    <div className="space-y-2">
      {successFramework1.map((item, index) => (
        <div key={index} className="flex flex-row items-center space-x-2">
          <span className="block h-1 w-1 bg-gray-800 rounded-full"></span>
          <span className="text-md text-start text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  );
};

Node.propTypes = {
  successFramework1: PropTypes.array.isRequired,
};

export default Node;
