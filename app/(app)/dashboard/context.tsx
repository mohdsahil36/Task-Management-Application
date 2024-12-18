"use client"
import React, { createContext, useState, ReactNode } from 'react';

interface Task {
    deadline: string;
    description: string;
    priority: string;
    status: string;
    title: string;
}

interface FormContextType {
    formData: Task | null;
    setTask: (submittedTask: Task) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<Task | null>(null);

    const setTask = (submittedTask: Task) => {
        setFormData({ ...submittedTask });
    };

    return (
        <FormContext.Provider value={{ formData, setTask }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
