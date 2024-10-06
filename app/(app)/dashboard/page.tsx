import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { Toaster } from 'sonner';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';
import Sidebar from '@/components/Sidebar';

export default async function Dashboard() {
    const userId = auth();
    const user = await currentUser();
    if (!userId || !user) {
        return <SignUpPage />;
    }

    return (
        <div className='h-screen relative'>
            <Sidebar />
            <div className='bg-neutral-200 w-full h-full'>
                Data content
            </div>
        </div>
    );
}
