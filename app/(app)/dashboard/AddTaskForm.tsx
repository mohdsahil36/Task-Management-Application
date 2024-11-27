"use client"

import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FormContext } from "./context";

interface Task {
  deadline: string;
  description: string;
  priority: string;
  status: string;
  title: string;
}

interface selectedStatus{
  selectedStatus:string;
}

export default function AddTaskForm() {
  // Access the setTask function from FormContext to submit task data
  const { setTask } = useContext(FormContext)!;

  const [date, setDate] = useState<Date>();
  const [formvalues, setFormValues] = useState<Task>({
    title: "",
    description: "",
    status: "",
    priority: "",
    deadline: ""
  });

  // Handle input changes for text fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formvalues, [event.target.name]: event.target.value });
  };

  // Handle changes for select fields
  const handleSelectChange = (name: string, value: string) => {
    setFormValues({ ...formvalues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      ...formvalues,
      deadline: date ? format(date, "PPP") : ""
    };

    setTask(newTask);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title" className="text-right">Title</Label>
        <Input
          id="title"
          placeholder="Enter your task title"
          className="mt-2"
          name="title"
          value={formvalues.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description" className="text-right">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter your task details"
          className="mt-2"
          name="description"
          value={formvalues.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="status" className="text-right">Status</Label>
        <div className="ms-2">
          <Select onValueChange={(value) => handleSelectChange("status", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="to-do">To-Do</SelectItem>
              <SelectItem value="under-review">Under Review</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="priority" className="text-right">Priority</Label>
        <div className="ms-2">
          <Select onValueChange={(value) => handleSelectChange("priority", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="deadline" className="text-right">Deadline</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[180px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
      <div className="text-center mt-2">
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
