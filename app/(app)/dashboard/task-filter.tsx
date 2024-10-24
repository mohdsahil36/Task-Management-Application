import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AddTaskForm from "./AddTaskForm";

interface TaskFilterProps {
  onAddTask: (task: {
    title: string;
    description: string;
    status: string;
    priority: string;
    deadline: string;
  }) => void;
}

export default function TaskFilter({ onAddTask }: TaskFilterProps) {
  const [date, setDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    deadline: "",
  });

  const dataHandler = () => {
    onAddTask({
      ...formData,
      deadline: date ? date.toDateString() : "",
    });
  };

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="Search Task" type="text" />
        <Button type="submit">Search</Button>
      </div>
      <div className="text-center md:text-start mt-2 md:mt-none">
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
                Add Task
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
