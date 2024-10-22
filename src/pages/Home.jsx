import { BusinessSolutions } from "../components/BusinessSolutions";
import ClientsSection from "../components/ClientSection";
import CommonBanner from "../components/CommonBanner";
import { Corporate } from "../components/Corporate";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

const Home = () => {
  const data = [
    {
      logo: "logo.png",
      title: "corporate solution",
      desscription:
        "First, we provide an MSMB marketplace for IT and digital services, tailored to customers with small and mid-size budgets.",
    },
    {
      logo: "logo.png",
      title: "call center solution",
      desscription:
        "Second, we enable MSMBs to grow and thrive on a global scale by offering access to capital, strategic and operational support, and regulatory assistance.",
    },
    {
      logo: "logo.png",
      title: "cloud Development",
      desscription:
        "Third, we empower the global workforce, age 14+, as entrepreneurs who act as catalysts for MSMB growth. Our focus is on the UNITY segment (Underprivileged, Needs, Inclusion, Transition, Yes), offering targeted education in life skills, leadership, and entrepreneurship, affordable earning opportunities with zero upfront costs or low subscription fees, and a full spectrum of growth support, including fundraising and investor connections.",
    },
  ];

  return (
    <div className="space-y-5  relative">
      <CommonBanner
        image={"homebanner.jpg"}
        text=""
      />
      <div className="w-[30rem] px-10 flex flex-col justify-center space-y-4 h-[21rem] rounded-md bg-white absolute left-[10%] top-[10%] lg:top-[7%]">
        <p className="text-sm">WE WORK TOGETHER</p>
        <h1 className="font-bold text-4xl">World of Opportunity for our clients</h1>
        <p className="text-sm">
          As a leading digital company in London, we look to engage with our
          clients beyond the conventional relationship.
        </p>
        <button className="p-3 rounded w-fit border border-black">Exlpore EmpowerRise</button>
      </div>
      {/* <div className="grid grid-cols-12  gap-3  mx-10 items-center">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              logo={item.logo}
              title={item.title}
              desscription={item.desscription}
            />
          );
        })}
      </div> */}
      {/* section 2 */}
  <div className="space-y-10">

      <BusinessSolutions/>
      {/* section 3 */}
      <ClientsSection/>

      {/* section 4 */}

      <Corporate/>

      {/* section 5 */}
      {/* <IncreaseValues/> */}
      {/* section 6 */}
      <PricingSection/>
  </div>
      <Footer/>
    </div>
  );
};

export default Home;
