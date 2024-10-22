import TopBanner from "../components/TopBanner";
import { ServicesCard } from "../components/ServicesCard";
export const Services = () => {
  const services = [
    {
      id: 1,
      title: "ID pass security",
      image: "homebanner.jpg",
      subtext:
        "We embrace holistic development and support for employees with the aim.",
    },
    {
      id: 2,
      title: "Face ID protection",
      image: "homebanner.jpg",
      subtext:
        "Take advantage of the experiential-learning opportunities built into many programs.",
    },
    {
      id: 3,
      title: "Face ID protection",
      image: "homebanner.jpg",
      subtext:
        "Take advantage of the experiential-learning opportunities built into many programs.",
    },
    {
      id: 4,
      title: "Face ID protection",
      image: "homebanner.jpg",
      subtext:
        "Take advantage of the experiential-learning opportunities built into many programs.",
    },
  ];
  return (
    <div className="space-y-10 mb-10">
      <TopBanner
        img={"about.jpg"}
        heading={"Services"}
        pageName={"Services"}
        subHeading={"IT Solution for Your Business"}
      />
      <div className="grid grid-cols-12 lg:mx-20 mx-10 gap-5">
        {services.map((item) => {
          return (
            <ServicesCard
              key={item.id}
              heading={item.title}
              image={item.image}
              subtext={item.subtext}
            />
          );
        })}
      </div>
    </div>
  );
};
