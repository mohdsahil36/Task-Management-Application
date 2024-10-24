import React from "react";

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
          <p className="text-xs md:text-lg flex items-center justify-center mb-4 bg-black dark:bg-white text-black p-3 rounded-lg">
            {column.title}
          </p>
          <div className="space-y-2">
            {column.tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-black dark:text-white text-start"
              >
                <span className="text-sm uppercase">{task.priority}</span>
                <p className="font-semibold text-2xl normal-case">
                  {task.title}
                </p>
                <p className="text-base normal-case my-2">{task.description}</p>
                <p className="text-xs italic">{task.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
