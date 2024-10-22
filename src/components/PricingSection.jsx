import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    plan: "SIMPLE PLAN",
    price: 19,
    features: [
      { name: "Unlimited file recovery", available: true },
      { name: "Professional reports", available: true },
      { name: "Sell on marketplaces", available: false },
      { name: "24/7 free support", available: false },
    ],
    isPopular: false,
  },
  {
    plan: "POPULAR PLAN",
    price: 56,
    features: [
      { name: "Unlimited file recovery", available: true },
      { name: "Professional reports", available: true },
      { name: "Sell on marketplaces", available: true },
      { name: "24/7 free support", available: false },
    ],
    isPopular: true,
  },
  {
    plan: "BUSINESS PLAN",
    price: 88,
    features: [
      { name: "Unlimited file recovery", available: true },
      { name: "Professional reports", available: true },
      { name: "Sell on marketplaces", available: true },
      { name: "24/7 free support", available: true },
    ],
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 p-8">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PricingSection;
