import React from 'react';

interface Columns {
    title: string;
}

const ColumnData: Columns[] = [
    {
        title: "To-Do",
    },
    {
        title: "Under Review",
    },
    {
        title: "In Progress",
    },
    {
        title: "Done",
    }
];

export default function TaskBoard(){ 
    
    return(
        ColumnData.map((item)=>(
            <div className='bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg'>
                <p className='text-xs md:text-lg flex items-center justify-center'>{item.title}</p>
            </div>
        ))
    )
}