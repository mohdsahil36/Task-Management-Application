import React from 'react';

interface Columns {
    id: number; 
    title: string;
}

const ColumnData: Columns[] = [
    {
        id: 1,
        title: "To-Do",
    },
    {
        id: 2, 
        title: "Under Review",
    },
    {
        id: 3, 
        title: "In Progress",
    },
    {
        id: 4, 
        title: "Done",
    }
];

export default function TaskBoard() {
    return (
        <>
            {ColumnData.map((item) => (
                <div key={item.id} className='bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg'>
                    <p className='text-xs md:text-lg flex items-center justify-center'>{item.title}</p>
                </div>
            ))}
        </>
    );
}
