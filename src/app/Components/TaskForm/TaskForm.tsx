"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { useTasks } from "@/app/hooks/useTask";
import { useSearchParams } from "next/navigation";


export default function TaskForm() {

    const [task, setTask] = useState("");
    const [error, setError] = useState({ msg: "", status: false });
    const { addTask } = useTasks();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        if (id) {
            fetch(`/api/tasks/${id}`)
            .then(response => response.json())
            
        }
    });

    const handleSubmit = (e: React.FormEvent) => {

        if (id) {
            console.log("Edit task with id:", id);
            return;
        }
        else {
            handleAddTask(e);
        }

    }

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();

        if (task.trim() === "") {
            showError("La tarea no puede estar vacía");
            return;
        }
        addTask(task);
        setTask("");
    };

    const showError = (message: string) => {
        setError({ msg: message, status: true });
        setTimeout(() => {
            setError({ msg: "", status: false });
        }, 2000);
    }

    return (
        <div className="w-full flex justify-center mt-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col gap-5 border border-gray-200"
            >
                <h2 className="text-2xl font-bold text-gray-800">Agregar Nueva Tarea</h2>

                <input
                    type="text"
                    placeholder="Escribe tu tarea..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {error.status && (
                    <div className="text-red-500 text-sm">
                        {error.msg}
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-blue-500 hover:underline mr-4">
                        Volver </Link>
                    <Button type="default" label="Agregar" />
                </div>
            </form>
        </div>
    );
}