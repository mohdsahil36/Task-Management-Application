import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { Toaster } from 'sonner';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';


export default async function Dashboard(){
    const userId=auth();
    const user=await currentUser();
    if(!userId || !user){
        return <SignUpPage/>
    }
    console.log(user);
    return(
        <div className='h-full'>
            <h1 className='text-xl font-bold text-slate-200'>This is the dashboard</h1>
        </div>
    )
}