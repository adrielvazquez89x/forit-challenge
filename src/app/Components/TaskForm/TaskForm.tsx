"use client";
import { useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";


export default function TaskForm() {

    const [task, setTask] = useState("");
    const [error, setError] = useState({ msg: "", status: false });

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();

        if (task.trim() === "") {
            showError("La tarea no puede estar vacía");
            return;
        }

        console.log("Task added", task);
        setTask(""); // Reset the input field after adding the task
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
                onSubmit={handleAddTask}
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