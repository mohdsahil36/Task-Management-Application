"use client"

import React, { useState } from 'react';
import { Menu  } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-white text-black p-3.5 transition-all duration-300 ease-in-out ${
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
    </aside>
  );
}
