import React from "react";
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

interface FormData {
    title: string;
    description: string;
    status: string;
    priority: string;
    deadline: string;
  }
  
  interface TaskFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  }
  
  export default function AddTaskForm({ formData, setFormData, date, setDate }: TaskFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      
      setFormData((prevData: FormData) => ({
        ...prevData,
        [id]: value,
      }));
    };
  
    const handleStatusChange = (value: string) => {
      setFormData((prevData: FormData) => ({
        ...prevData,
        status: value,
      }));
    };
  
    const handlePriorityChange = (value: string) => {
      setFormData((prevData: FormData) => ({
        ...prevData,
        priority: value,
      }));
    };

    const handleDateSelect = (selectedDate: Date | undefined) => {
      setDate(selectedDate);
      if (selectedDate) {
        setFormData((prevData: FormData) => ({
          ...prevData,
          deadline: format(selectedDate, "PPP"),
        }));
      }
    };
  
    return (
      <div className="grid gap-4">
        <div>
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            id="title"
            placeholder="Enter your task title"
            className="mt-2"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Enter your task details"
            className="mt-2"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="status" className="text-right">
            Status
          </Label>
          <div className="ms-2">
            <Select onValueChange={handleStatusChange}>
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
          <Label htmlFor="priority" className="text-right">
            Priority
          </Label>
          <div className="ms-2">
            <Select onValueChange={handlePriorityChange}>
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
          <Label htmlFor="deadline" className="text-right">
            Deadline
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={handleDateSelect} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }
  