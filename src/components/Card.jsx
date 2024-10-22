import PropTypes from "prop-types";
const Card = ({   desscription }) => {
  return (
    <div className="flex flex-col col-span-12 lg:col-span-4 items-center h-[400px] border border-gray-300  justify-center rounded-md">
      {/* <img src={logo} alt="Image" className="w-20 h-20" /> */}
      {/* <h1 className="text-3xl font-bold capitalize">{title}</h1> */}
      <p className="text-center">{desscription}</p>
    </div>
  );
};

Card.propTypes = {
  // logo: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  desscription: PropTypes.string.isRequired,
};

export default Card;
