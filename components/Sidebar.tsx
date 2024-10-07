"use client"

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { IconMenu2 } from '@tabler/icons-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();

  if(isSignedIn && isLoaded){
    console.log("User data", user);
  }


  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-gray-800 text-white p-3.5 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-32 md:w-52' : 'w-14'
      }`}
    >
      <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'} transition-all duration-300 ease-in-out`}>
        <button onClick={toggleSidebar} className='transition-all duration-300 ease-in-out'>
          <IconMenu2 stroke={1.5} size={30} />
        </button>
      </div>
      <div>

      </div>
    </aside>
  );
}
