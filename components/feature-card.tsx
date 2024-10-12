import React from 'react';
import { CircleCheck } from 'lucide-react';

export default function FeatureCard(){
    return(
        <div className='p-8 bg-white rounded-lg'>
            <div>
                <CircleCheck/>
            </div>
            <div>
                <h1>Feature Card</h1>
                <p>Organize tasks into To-Do, In Progress, Under Review, and Completed categories.</p>
            </div>
        </div>
    )
}