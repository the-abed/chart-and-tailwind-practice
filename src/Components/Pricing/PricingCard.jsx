import React from 'react';
import PricingFeatures from './PricingFeatures';
import { BadgeInfo } from 'lucide-react';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {plan,price,features,info} = pricing;
    return (
        <div className='flex flex-col border-1 border-gray-300 rounded-xl space-y-3 p-4 bg-amber-100'>
            <h2 className='text-4xl'>{plan}</h2>
            <p className='text-2xl'>{price}</p>

            <div className='bg-amber-300 rounded-xl p-3 mt-5 flex-1'>
                {
                    features.map((feature,index) =>
                        <PricingFeatures 
                       key={index}
                    feature={feature}></PricingFeatures>
                    )
                }
            </div>
            <h2 className='bg-amber-500 rounded-xl p-3 text-xl fle'><BadgeInfo></BadgeInfo> {info}</h2>
            <button className='btn w-full bg-black text-white rounded-lg'>Subscribe</button>
        </div>
    );
};

export default PricingCard;