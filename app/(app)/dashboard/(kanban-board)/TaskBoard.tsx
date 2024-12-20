"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddTaskForm from "../AddTaskForm";
import { parse } from "path";

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
  const [parsedData, setParsedData] = useState<Column[]>([]);
  const [editData, seteditData] = useState<Task>({
    title: "",
    description: "",
    status: "",
    priority: "",
    deadline: ""
  });

  useEffect(() => {
    const data = localStorage.getItem("kanbanColumns");
    setParsedData(data ? JSON.parse(data) : columns);
  }, [columns]);

  // Function to delete a task from a specific column
  function deleteHandler(title: string, index: number) {
    setParsedData((prevData) => {
      const updatedData = prevData.map((category) => {
        if (category.title === title) {
          return {
            ...category,
            tasks: category.tasks.filter((_, taskIndex) => taskIndex !== index),
          };
        }
        return category;
      });

      localStorage.setItem("kanbanColumns", JSON.stringify(updatedData));
      return updatedData;
    });
    console.log(parsedData);
  }

  function editHandler(title: string, index: number) {
    parsedData.map((column) => {
      if (column.title === title) {
        console.log(column.tasks[index]);
      }
    })
  }

  return (
    <div className="grid grid-cols-4 gap-x-4 text-center mt-4 md:mt-7">
      {parsedData.map((column) => (
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
                    className={`text-sm capitalize py-2 px-4 rounded-md ${task.priority === "high"
                      ? "bg-[#FFEFEF] text-[#FF685D]"
                      : task.priority === "medium"
                        ? "bg-[#FFF4F0] text-[#FFCB65]"
                        : "bg-[#EEFFF4] text-[#00cc00]"
                      }`}
                  >
                    {task.priority}
                  </span>
                  <p className="text-sm bg-[#F9F9F9] rounded-md py-2 px-2.5 text-[#3C3C3C]">
                    <span className="text-lg font-semibold">Due: </span> {task.deadline}
                  </p>
                </div>
                <p className="font-base text-lg normal-case mt-3.5 text-[#3C3C3C]">
                  {task.title}
                </p>
                <p className="text-sm normal-case my-2 text-[#B9BDC8]">
                  {task.description}
                </p>
                <div className="text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="text-blue-500 mt-3 text-md hover:underline cursor-pointer text-center font-semibold" variant="ghost" onClick={() => {
                        editHandler(column.title, index);
                      }}>
                        Edit
                      </Button>
                    </DialogTrigger>
                    {/* <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Task</DialogTitle>
                        </DialogHeader>
                        <AddTaskForm/>
                      </DialogContent> */}
                  </Dialog>
                  <button
                    className="ms-3 text-red-500 mt-3 text-md hover:underline cursor-pointer text-center"
                    onClick={() => {
                      deleteHandler(column.title, index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
