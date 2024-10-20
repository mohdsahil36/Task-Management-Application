"use client"

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import UserItem from '@/app/(app)/dashboard/user-item';
import { ModeToggle } from '@/app/components/ui/mode-toggle';
import { Dialog, DialogContent, DialogHeader,DialogTrigger} from "@/components/ui/dialog"
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Settings } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={`h-screen bg-white dark:bg-[#262626] text-black dark:text-white p-3.5 transition-all duration-300 ease-in-out relative ${isOpen ? 'w-32 md:w-60' : 'w-14'
        }`}
    >
      <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'} transition-all duration-300 ease-in-out`}>
        <button
          onClick={toggleSidebar}
          className='transition-transform duration-300 ease-in-out'
        >
          <Menu
            className={`mt-2 md:mt-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0' : 'rotate-180'
              }`}
          />
        </button>
      </div>
      <div className="absolute bottom-6 flex flex-col">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='ghost' className='px-0 mb-2'>
              <Settings className='h-7 w-7' />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className='border-b pb-3'>
              <h2>My Settings</h2>
            </DialogHeader>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-y-1'>
                <Label>Appearence</Label>
                <span className='text-[0.8rem] text-muted-foreground'>Customize how PlanIt looks on your device</span>
              </div>
              <ModeToggle />
            </div>
          </DialogContent>
        </Dialog>
        <UserItem />
      </div>
    </aside>
  );
}
