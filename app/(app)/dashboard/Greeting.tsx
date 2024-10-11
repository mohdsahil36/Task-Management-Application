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
        } else if (currentHour < 18) {
            updatedGreeting = 'Good afternoon';
        } else {
            updatedGreeting = 'Good evening';
        }

        setGreeting(updatedGreeting);
    }, [initialGreeting]); // Update only if the initial greeting changes

    return (
        <div>
            <h1>{greeting}, {firstName} {lastName}</h1>
        </div>
    );
};

export default Greeting;
