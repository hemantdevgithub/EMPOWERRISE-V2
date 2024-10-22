import propTypes from 'prop-types'
const TopBanner = ({ img, heading, subHeading }) => {
  return (
    <div
      className={`w-full  h-[400px] bg-center  bg-cover bg-no-repeat relative overflow-hidden`}
    >
      <img
        src={img}
        className="w-full animate-zoom absolute h-full  object-cover "
        alt=""
      />
      {
        <div
          className={`w-full h-full text-white absolute bg-gradient-to-b opacity-70 to-slate-900 from-gray-900 ${
            img === "/Home/service-bg.jpg" && "hidden"
          }`}
        ></div>
      }
      <div className="w-full h-full  z-10  flex absolute justify-start items-center">
        <div className=" space-y-5 flex flex-col px-5 lg:px-28">
          <h2 className="text-3xl lg:text-4xl text-white font-rubik uppercase font-semibold">
            {heading}
          </h2>
          <p className="text-rise w-full lg:w-[60%] font-poppins text-sm">
            {subHeading}
          </p>
          {/* <button className="flex font-rubik w-fit items-center gap-3 bg-[#FFFFFF1F] py-3 px-3 text-white">
            <span>Home</span> <FaArrowRight />{" "}
            <span>{pageName}</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

TopBanner.propTypes={
    img:propTypes.string.isRequired,
    heading:propTypes.string.isRequired,
    pageName:propTypes.string.isRequired,
    subHeading:propTypes.string.isRequired
}
export default TopBanner;
