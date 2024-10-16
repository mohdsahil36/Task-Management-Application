import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function TaskFilter() {
    return (
        <>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder='Search Task' type='text'/>
                <Button type="submit">Search</Button>
            </div>
            <div className='text-start'>
                <Button className='mt-3 md:mt-0'>Add Task <Plus className="h-4 w-4 ml-2"/></Button>
            </div>
        </>
    )
}