'use client';

import React, { useState, useEffect } from 'react';

interface GreetingProps {
    firstName: string;
    lastName: string;
    initialGreeting: string;
}

const Greeting: React.FC<GreetingProps> = ({ firstName, lastName, initialGreeting }) => {
    const [greeting, setGreeting] = useState<string>(initialGreeting);

    useEffect(() => {
        const currentHour = new Date().getHours();
        let updatedGreeting = initialGreeting;

        if (currentHour < 12) {
            updatedGreeting = 'Good morning';
        } else if (currentHour > 12 && currentHour < 17 ) {
            updatedGreeting = 'Good afternoon';
        } else if(currentHour > 17 && currentHour < 20 ){
            updatedGreeting="Good evening";
        } else {
            updatedGreeting="Good Night"
        }

        setGreeting(updatedGreeting);
    }, [initialGreeting]);

    return (
        <div>
            <p className='text-xl md:text-4xl ms-3 mt-3 font-bold   '>{greeting}, {firstName} {lastName}!</p>
        </div>
    );
};

export default Greeting;
