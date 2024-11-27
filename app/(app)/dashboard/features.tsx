"use client"

import React, { useEffect, useState } from 'react';
import FeatureCard from '@/components/feature-card';
import { CircleCheck, BarChart, Calendar } from 'lucide-react';
interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType;
}

const featuresData: Feature[] = [
    {
        title: "Task Categories",
        description: "Organize tasks into To-Do, In Progress, Under Review, and Completed categories",
        icon: CircleCheck,
    },
    {
        title: "Deadlines",
        description: "Set and manage deadlines to keep your projects on track",
        icon: Calendar,
    }
];

export default function Features() {
    const [cardData, setCardData] = useState<Feature[]>([]);

    useEffect(() => {
        setCardData(featuresData);
    }, []);

    return (
        <div className='md:flex flex-col xl:grid grid-cols-2 gap-y-3 gap-x-4'>
            {cardData.map((feature, index) => (
                <FeatureCard 
                    key={index} 
                    title={feature.title} 
                    description={feature.description} 
                    Icon={feature.icon}
                />
            ))}
        </div>
    );
}
