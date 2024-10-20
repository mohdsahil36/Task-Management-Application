import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';
import Sidebar from '@/components/Sidebar';
import Features from './features';
import TaskFilter from './task-filter';
import TaskBoard from './(kanban-board)/page';

interface User {
    firstName: string;
    lastName: string;
}

export default async function Dashboard() {
    const { userId } = auth();
    const user = await currentUser() as User | null;

    if (!userId || !user) {
        return <SignUpPage />;
    }

    return (
        <div className='h-screen flex'>
            <Sidebar />
            <div className='bg-[#f5f5f5] dark:bg-[#1F1F1F] flex-1 h-full p-2.5 overflow-y-auto relative'>
                <div className='mt-3 md:mt-5.5'>
                   <Features/>
                </div>
                <div className='mt-4 md:mt-8 block md:flex items-center justify-between'>
                    <TaskFilter/>
                </div>
                <div className='mt-4 md:mt-7 grid grid-cols-4 gap-x-4 text-center '>
                    <TaskBoard/>
                </div>
            </div>
        </div>
    );
}
