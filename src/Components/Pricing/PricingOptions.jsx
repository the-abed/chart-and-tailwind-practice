import React, { use } from "react";
import PricingCard from "./PricingCard";
import { Container } from "lucide-react";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
//   console.log(pricingData);
  return (
    <div>
      <h2 className="text-5xl">Get Our Membership</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 justify-center space-y-5">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
        
      </div>
      
    </div>
  );
};

export default PricingOptions;
