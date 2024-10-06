"use client"

import React, { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-gray-800 text-white p-3.5 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-24 md:w-48' : 'w-16'
      }`}
    >
      <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'} transition-all duration-300 ease-in-out`}>
        <button onClick={toggleSidebar} className='transition-all duration-300 ease-in-out'>
          <IconMenu2 stroke={1.5} size={25} />
        </button>
      </div>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </div>
    </aside>
  );
}
