"use client";

import React, { useState, useContext, useEffect } from "react";
import TaskFilter from "./task-filter";
import TaskBoard from "./(kanban-board)/TaskBoard";
import { ModeToggle } from "@/app/components/ui/mode-toggle";
import UserItem from "./user-item";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { FormContext } from "./context";

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
      title: "Under-Review",
      tasks: [],
    },
    {
      id: 3,
      title: "In-Progress",
      tasks: [],
    },
    {
      id: 4,
      title: "Done",
      tasks: [],
    },
  ];

  const [columns, setColumns] = useState<Column[]>(() => {
  const storedData = localStorage.getItem("kanbanColumns");
  try {
    return storedData ? JSON.parse(storedData) : initialColumns;
  } catch (error) {
    console.error("Failed to parse columns from local storage:", error);
    return initialColumns;
  }
});

  const { formData } = useContext(FormContext)!;

  useEffect(() => {
    if (formData) {
      setColumns((prevColumns) =>
        prevColumns.map((column) => {
          if (column.title.toLowerCase() === formData.status.toLowerCase()) {
            return {
              ...column,
              tasks: [...column.tasks, formData],
            };
          }
          return column;
        })
      );
    }
  }, [formData]);

  // console.log(columns);
  
  useEffect(()=>{
    try{
      localStorage.setItem("kanbanColumns",JSON.stringify(columns));
    }
    catch(error){
      console.error("Failed to save columns", error);
    }
  },[columns])

  return (
    <>
      <div className="flex items-center justify-end max-w-fit ml-auto px-3.5 py-1 border-2 border-[#ddd8d8ee] rounded-full shadow-sm">
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="px-0">
                <Settings className="h-7 w-7" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader className="border-b pb-3">
                <h2>My Settings</h2>
              </DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <Label>Appearance</Label>
                  <span className="text-[0.8rem] text-muted-foreground">
                    Customize how PlanIt looks on your device
                  </span>
                </div>
                <ModeToggle />
              </div>
            </DialogContent>
          </Dialog>
          <UserItem />
        </div>
      </div>
      <div className="mt-4 md:mt-5.5 block md:flex items-center justify-between">
        <TaskFilter />
      </div>
      <div>
        <TaskBoard columns={columns}/>
      </div>
    </>
  );
}
