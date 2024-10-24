import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Corporate = () => {
  const responsive = {
    superLargeDesktop: {
      // screens larger than 1920px
      breakpoint: { max: 4000, min: 1920 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white py-12 mx-40">
      {/* Header Section */}
      {/* <div className="text-center mb-12">
        <h4 className="text-sm font-medium text-blue-600">OF CORPORATE</h4>
        <h2 className="text-4xl font-bold text-gray-900 capitalize">
          Offering a deep understanding
        </h2>
        <p className="text-gray-600">
          Working with trusted global experts who know your operating model.
        </p>
      </div> */}

      {/* Carousel Section */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
      >
        {/* Slide 1 */}
        <div className="rounded-lg overflow-hidden shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <img
            src="homebanner.jpg" // Replace with your actual image URL
            alt="Corporate Slide 1"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div className="rounded-lg overflow-hidden shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <img
            src="homebanner.jpg" // Replace with your actual image URL
            alt="Corporate Slide 2"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Slide 3 */}
        <div className="rounded-lg overflow-hidden shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <img
            src="homebanner.jpg" // Replace with your actual image URL
            alt="Corporate Slide 3"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Slide 4 */}
        <div className="rounded-lg overflow-hidden shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <img
            src="homebanner.jpg" // Replace with your actual image URL
            alt="Corporate Slide 4"
            className="w-full h-64 object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};
