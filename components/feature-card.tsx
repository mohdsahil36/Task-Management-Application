import React from 'react';
import { CircleCheck } from 'lucide-react';

export default function FeatureCard(){
    return(
        <div className='p-4 md:p-7 bg-white rounded-lg'>
            <div className='hidden md:block'>
                <CircleCheck/>
            </div>
            <div>
                <p className='mb-1.5 font-bold'>Feature Card</p>
                <p className='text-xs'>Organize tasks into To-Do, In Progress, Under Review, and Completed categories.</p>
            </div>
        </div>
    )
}