// "use client"

import React from "react";
// import { Plus } from 'lucide-react';
// import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import AddTaskForm from "../AddTaskForm";

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
          <div className="space-y-2 mb-2.5">
            {column.tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-3 border border-2 rounded-xl text-black dark:text-white text-start"
              >
                <div className="flex items-center gap-x-4">
                  <span
                    className={`text-sm capitalize py-2 px-4 rounded-md ${task.priority === 'high'
                      ? 'bg-[#FFEFEF] text-[#FF685D]'
                      : task.priority === 'medium'
                        ? 'bg-[#FFF4F0] text-[#FFCB65]'
                        : 'bg-[#EEFFF4] text-[#00cc00]'
                      }`}
                  >
                    {task.priority}
                  </span>
                  <p className="text-sm bg-[#F9F9F9] rounded-md py-2 px-2.5 text-[#3C3C3C]">{task.deadline}</p>
                </div>
                <p className="font-base text-lg normal-case mt-3.5 text-[#3C3C3C]">
                  {task.title}
                </p>
                <p className="text-sm normal-case my-2 text-[#B9BDC8]">{task.description}</p>
                <p className="text-red-500 mt-3 text-sm hover:underline cursor-pointer text-center">
                  Delete
                </p>
              </div>
            ))}
          </div>
          {/* <div>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="w-full p-2.5 rounded-lg bg-gray-100 text-gray-500 border-2 border-gray-200 flex justify-center hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Add Task"
                >
                  <Plus />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add new task</DialogTitle>
                  <DialogDescription>Add details of your task and you&apos;re good to go!</DialogDescription>
                </DialogHeader>
                <AddTaskForm           
                />
              </DialogContent>
            </Dialog>
          </div> */}
        </div>
      ))}
    </div>
  );
}
