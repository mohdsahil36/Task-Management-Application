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
        <div className='h-screen flex'>
            <Sidebar />
            <div className='bg-neutral-200 flex-1 h-full p-6 overflow-y-auto'>
                Data content
            </div>
        </div>
    );
}
