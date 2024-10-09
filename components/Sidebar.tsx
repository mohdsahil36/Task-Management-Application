"use client"

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-black dark:bg-white text-white dark:text-black p-3.5 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-32 md:w-52' : 'w-14'
      }`}
    >
      <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'} transition-all duration-300 ease-in-out`}>
        <button
          onClick={toggleSidebar}
          className='transition-transform duration-300 ease-in-out'
        >
          <ArrowLeft
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </button>
      </div>
    </aside>
  );
}
