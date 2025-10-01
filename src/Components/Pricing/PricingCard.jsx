import React from "react";
import PricingFeatures from "./PricingFeatures"; // Component to render individual features
import { BadgeInfo } from "lucide-react"; // Info icon for additional plan info

// PricingCard receives a 'pricing' object as prop
const PricingCard = ({ pricing }) => {
  // Destructure properties from the pricing object
  const { plan, price, features, info } = pricing;

  return (
    <div className="flex flex-col border-1 border-gray-300 rounded-xl space-y-3 p-4 bg-amber-100">
      {/* Plan Name */}
      <h2 className="text-4xl">{plan}</h2>

      {/* Plan Price */}
      <p className="text-2xl">{price}</p>

      {/* Features List */}
      <div className="bg-amber-300 rounded-xl p-3 mt-5 flex-1">
        {features.map((feature, index) => (
          // Render each feature using PricingFeatures component
          <PricingFeatures key={index} feature={feature} />
        ))}
      </div>

      {/* Additional Info Section with Info Icon */}
      <h2 className="bg-amber-500 rounded-xl p-3 text-xl flex items-center gap-2">
        <BadgeInfo /> {/* Info icon */}
        {info} {/* Info text */}
      </h2>

      {/* Subscribe Button */}
      <button className="btn w-full bg-black text-white rounded-lg">
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
