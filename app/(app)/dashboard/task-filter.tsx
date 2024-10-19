"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AddTaskForm from "./AddTaskForm";

export default function TaskFilter() {
  const [date, setDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    deadline: "",
  });

  const dataHandler = () => {
    console.log("Form data submitted: ", formData);
  };

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="Search Task" type="text" />
        <Button type="submit">Search</Button>
      </div>
      <div className="text-start">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Add Task <Plus className="h-4 w-4 ml-2" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new task</DialogTitle>
              <DialogDescription>Add details of your task and you&apos;re good to go!</DialogDescription>
            </DialogHeader>
            
            <AddTaskForm
              formData={formData}
              setFormData={setFormData}
              date={date}
              setDate={setDate}
            />

            <DialogFooter>
              <Button type="button" onClick={dataHandler}>
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
