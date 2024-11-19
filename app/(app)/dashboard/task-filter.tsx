import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AddTaskForm from "./AddTaskForm";

export default function TaskFilter() {

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
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
