import PropTypes from "prop-types";

const TreeNodeComponent = ({ label, description, bgColor, textColor }) => (
  <div
    className={`p-5 border mx-auto rounded-lg shadow-lg ${bgColor} ${textColor} ${
      label === "Authentic Learning" ? " text-empower" : ""
    } text-center transform transition-transform duration-300 hover:scale-105`}
    style={{ width: "21rem" }}
  >
    <span
      className={`font-semibold  ${
        label === "Authentic Learning" ? "text-empower" : "text-black"
      }`}
    >
      {label}
    </span>
    <p className="text-sm mt-2">{description}</p>
  </div>
);

TreeNodeComponent.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default TreeNodeComponent;
