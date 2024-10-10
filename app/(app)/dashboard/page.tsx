import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { Toaster } from 'sonner';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';
import UserItem from '@/app/(app)/dashboard/user-item';
import Sidebar from '@/components/Sidebar';

export default async function Dashboard() {
    const userId = auth();
    const user = await currentUser();
    // console.log(user);
    if (!userId || !user) {
        return <SignUpPage />;
    }

    let currentDate=new Date();
    let currentHours=currentDate.getHours();
    console.log("current hours:",currentHours);

    return (
        <div className='h-screen flex'>
            <Sidebar />
            <div className='bg-neutral-200 flex-1 h-full p-3 overflow-y-auto relative'>
                <div>
                    <h1>Hello , {user.firstName}{user.lastName}</h1>
                </div>
            </div>

        </div>
    );
}
