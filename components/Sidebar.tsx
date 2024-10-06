import React from 'react';
import { IconMenu2 } from '@tabler/icons-react';

export default function Sidebar() {
  return (
    <aside className='fixed top-0 left-0 h-screen w-28 md:w-52 bg-gray-800 text-white z-50 p-2.5'>
      <div className='flex justify-end'>
        <IconMenu2 stroke={1} size={20} className='md:size-25' />
      </div>
    </aside>
  );
}
