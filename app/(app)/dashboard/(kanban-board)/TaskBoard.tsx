// "use client"

import React from "react";


// Task interface to match incoming task data structure
interface Task {
  deadline: string;
  description: string;
  priority: string;
  status: string;
  title: string;
}

interface Column {
  id: number;
  title: string;
  tasks: Task[];
}

interface TaskBoardProps {
  columns: Column[];
}

export default function TaskBoard({ columns }: TaskBoardProps) {

  return (
    <div className="grid grid-cols-4 gap-x-4 text-center mt-4 md:mt-7">
      {columns.map((column) => (
        <div key={column.id}>
          <p className="text-xs md:text-base flex items-center justify-start mb-4 rounded-md p-3 bg-white text-[#3F3F3F] border-2 border-[#ddd8d8ee]">
            {column.title}
          </p>
          <div className="space-y-2">
            {column.tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-black dark:text-white text-start"
              >
                <div>
                  <span className="text-sm uppercase">{task.priority}</span>
                  <p className="text-xs italic">{task.deadline}</p>
                </div>
                <p className="font-semibold text-2xl normal-case">
                  {task.title}
                </p>
                <p className="text-base normal-case my-2">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
