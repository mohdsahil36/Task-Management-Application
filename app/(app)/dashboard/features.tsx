import React from 'react';
import FeatureCard from '@/components/feature-card';

export default function Features(){
    return(
        <div className='grid md:grid-cols-4 gap-y-3 gap-x-3 '>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
    )
}