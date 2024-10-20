import React from 'react';

interface Task {
    deadline: string;
    description: string;
    priority: string;
    status: string;
    title: string;
}

interface Columns {
    id: number;
    title: string;
    tasks: Task[];
}

const ColumnData: Columns[] = [
    {
        id: 1,
        title: "To-Do",
        tasks: [{
            deadline: "October 23rd, 2024",
            description: "This is a sample task.",
            priority: "medium",
            status: "in-progress",
            title: "Sample Task"
        }]
    },
    {
        id: 2,
        title: "Under Review",
        tasks: [{
            deadline: "October 23rd, 2024",
            description: "This is a sample task.",
            priority: "medium",
            status: "in-progress",
            title: "Sample Task"
        }]
    },
    {
        id: 3,
        title: "In Progress",
        tasks: [{
            deadline: "October 23rd, 2024",
            description: "This is a sample task.",
            priority: "medium",
            status: "in-progress",
            title: "Sample Task"
        }]
    },
    {
        id: 4,
        title: "Done",
        tasks: [{
            deadline: "October 23rd, 2024",
            description: "This is a sample task.",
            priority: "medium",
            status: "completed",
            title: "Completed Task"
        }]
    }
];

export default function TaskBoard() {
    return (
        <div className="grid grid-cols-4 gap-x-4 text-center mt-4 md:mt-7">
            {ColumnData.map((column) => (
                <div key={column.id}>
                    <p className="text-xs md:text-lg flex items-center justify-center mb-4 bg-black text-white dark:bg-white text-black p-3 rounded-lg">{column.title}</p>
                    <div className="space-y-2">
                        {column.tasks.map((task, index) => (
                            <div key={index} className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md text-black dark:text-white text-start">
                                <p className="font-semibold text-2xl normal-case">{task.title}</p>
                                <p className="text-base normal-case my-2">{task.description}</p>
                                <p className="text-sm uppercase">{task.priority}</p>
                                <p className="text-sm uppercase mt-2">{task.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
