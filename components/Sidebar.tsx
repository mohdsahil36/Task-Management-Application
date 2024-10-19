"use client"

import React, { useState } from 'react';
import { Menu  } from 'lucide-react';
import UserItem from '@/app/(app)/dashboard/user-item';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-white dark:bg-[#262626] text-black dark: text-white p-3.5 transition-all duration-300 ease-in-out relative ${
        isOpen ? 'w-32 md:w-60' : 'w-14'
      }`}
    >
      <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'} transition-all duration-300 ease-in-out`}>
        <button
          onClick={toggleSidebar}
          className='transition-transform duration-300 ease-in-out'
        >
          <Menu
            className={`mt-2 md:mt-4 transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </button>
      </div>
      <div className="absolute bottom-6">
        <UserItem/>
      </div>
    </aside>
  );
}
