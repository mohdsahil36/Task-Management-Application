import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { Toaster } from 'sonner';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';
import UserItem from '@/app/(app)/dashboard/user-item';
import Sidebar from '@/components/Sidebar';

export default async function Dashboard() {
    const userId = auth();
    const user = await currentUser();
    if (!userId || !user) {
        return <SignUpPage />;
    }

    return (
        <div className='h-screen flex'>
            <Sidebar />
            <div className='bg-neutral-200 flex-1 h-full overflow-y-auto relative'>
                <UserItem />
            </div>

        </div>
    );
}
