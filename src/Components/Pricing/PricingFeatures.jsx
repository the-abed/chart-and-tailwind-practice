import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <div className=''>
            <p className='flex gap-2 mb-2'><CircleCheck></CircleCheck> {feature}</p>
        </div>
    );
};

export default PricingFeatures;