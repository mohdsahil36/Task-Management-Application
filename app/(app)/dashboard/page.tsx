import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';
import Sidebar from '@/components/Sidebar';
import Greeting from './Greeting';

interface User {
    firstName: string;
    lastName: string;
}

const getServerGreeting = (): string => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return 'Good morning';
    } else if (currentHour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
};

export default async function Dashboard() {
    const { userId } = auth();
    const user = await currentUser() as User | null;

    if (!userId || !user) {
        return <SignUpPage />;
    }

    const initialGreeting = getServerGreeting(); // Generate greeting on the server

    return (
        <div className='h-screen flex'>
            <Sidebar />
            <div className='bg-neutral-200 flex-1 h-full p-2.5 overflow-y-auto relative'>
                <div>
                    <Greeting firstName={user.firstName} lastName={user.lastName} initialGreeting={initialGreeting} />
                </div>
            </div>
        </div>
    );
}
