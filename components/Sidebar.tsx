"use client"

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ModeToggle } from '@/app/components/ui/mode-toggle';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-black text-white p-3.5 transition-all duration-300 ease-in-out ${
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
      <div className='page-theme-toggler items-center'>
        <ModeToggle/>
      </div>
    </aside>
  );
}
