import React from 'react';
import FeatureCard from '@/components/feature-card';

export default function Features(){
    return(
        <div className='grid grid-cols-4 gap-8'>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
    )
}