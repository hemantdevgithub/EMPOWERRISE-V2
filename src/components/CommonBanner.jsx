import { PropTypes } from 'prop-types'

const CommonBanner = ({ image, isGradient, text }) => {
  return (
    <div className="h-[700px] relative">
      <img
        className="h-full w-full object-center object-cover"
        src={image}
        alt="Banner Image"
      />
      {isGradient && (
        <div className="bg-gradient-to-r from-black to-gray-600 h-full w-full absolute top-0 opacity-50"></div>
      )}
      {text && (
        <div className="absolute top-10 p-10 text-center capitalize  w-full ">
          <h1 className="text-start text-2xl text-black font-semibold">{text}</h1>
        </div>
      )}
    </div>
  );
};
CommonBanner.propTypes = {
  image: PropTypes.string.isRequired,
  isGradient: PropTypes.bool,
  text: PropTypes.string,
  
}
export default CommonBanner;
