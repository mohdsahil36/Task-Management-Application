import React from 'react';
import Image from 'next/image';
import { ModeToggle } from './ui/mode-toggle';

export default function Header() {
    return (
        <div className='flex items-center justify-between p-4'>
            <div>
                {/* <Image src='/Logo.PNG' alt='logo' width={16} height={25} className='h-10 w-auto'/> */}LOGO
            </div>
            <div>
                <ModeToggle/>
            </div>
        </div>
    );
}
