import React from 'react';
import { LucideProps } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    Icon: React.ComponentType<LucideProps>;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
    return (
        <div className='block p-4 md:p-7 bg-white dark:bg-[#262626] rounded-lg md:flex justify-center items-center gap-x-4 '>
            <div className='hidden md:block'>
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
                <p className='mb-1.5 font-bold text-base md:text-2xl'>{title}</p>
                <p className='text-xs md:text-base'>{description}</p>
            </div>
        </div>
    );
}
