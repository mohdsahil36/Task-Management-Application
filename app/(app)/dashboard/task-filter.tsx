"use client"

import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function TaskFilter() {
    const [date, setDate] = React.useState<Date>()
    return (
        <>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder='Search Task' type='text' />
                <Button type="submit">Search</Button>
            </div>
            <div className='text-start'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button> Add Task <Plus className='h-4 w-4 ml-2' /></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add new task</DialogTitle>
                            <DialogDescription>
                                Add details of you task and you&apos;re good to go!
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="">
                                <Label htmlFor="name" className="text-right">
                                    Title
                                </Label>
                                <Input
                                    id="name"
                                    placeholder='Enter your task title'
                                    className="mt-2"
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Textarea placeholder="Enter your task details" className='mt-2' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <Label htmlFor="status" className="text-right">
                                    Status
                                </Label>
                                <div className='ms-2'>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder='Select status' />
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
                            <div className='flex items-center justify-between'>
                                <Label htmlFor="status" className="text-right">
                                    Priority
                                </Label>
                                <div className='ms-2'>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder='Select priority' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="high">High</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="low">Low</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <Label htmlFor="status" className="text-right">
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
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Create</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}