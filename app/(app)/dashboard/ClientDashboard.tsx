"use client";

import React, { useState } from "react";
import TaskFilter from './task-filter';
import TaskBoard from './(kanban-board)/TaskBoard';

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

export default function ClientDashboard() {
  const initialColumns: Column[] = [
    {
      id: 1,
      title: "To-Do",
      tasks: [],
    },
    {
      id: 2,
      title: "Under Review",
      tasks: [],
    },
    {
      id: 3,
      title: "In Progress",
      tasks: [],
    },
    {
      id: 4,
      title: "Done",
      tasks: [],
    },
  ];

  const [columns, setColumns] = useState<Column[]>(initialColumns);

  // Handler to add a new task based on status
  const handleAddTask = (newTask: Task) => {
    const updatedColumns = columns.map((column) => {
      if (
        (column.title === "To-Do" && newTask.status === "to-do") ||
        (column.title === "Under Review" && newTask.status === "under-review") ||
        (column.title === "In Progress" && newTask.status === "in-progress") ||
        (column.title === "Done" && newTask.status === "completed")
      ) {
        return {
          ...column,
          tasks: [...column.tasks, newTask], // Add new task to the relevant column
        };
      }
      return column;
    });

    setColumns(updatedColumns); // Update columns state with new task
  };

  return (
    <>
      <div className="mt-4 md:mt-8 block md:flex items-center justify-between">
        <TaskFilter onAddTask={handleAddTask} />
      </div>
      <div>
        <TaskBoard columns={columns} />
      </div>
    </>
  );
}
