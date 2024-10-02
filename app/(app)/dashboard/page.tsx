import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import SignUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page';


export default async function Dashboard(){
    const userId=auth();
    if(!userId){
        return <SignUpPage/>
    }
    const user=await currentUser();
    console.log(user);
    return(
        <div className='h-full bg-slate-800'>
            <h1 className='text-xl font-bold text-slate-200'>This is the dashboard</h1>
        </div>
    )
}