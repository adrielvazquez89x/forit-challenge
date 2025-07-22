"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { useTasks } from "@/app/hooks/useTask";
import { useSearchParams } from "next/navigation";
import Loader from "../Loader/Loader";


export default function TaskForm() {

    const [task, setTask] = useState("");
    const [notification, setNotification] = useState({ msg: "", status: false, type: "" });
    const { addTask, getTaskById, updateTask, loading } = useTasks();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {

        const fetchTask = async () => {
            if (id) {
                const taskData = await getTaskById(id);

                if (taskData) {
                    setTask(taskData.task);
                }
            }
        }

        fetchTask();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (task.trim() === "") {
            showNotification("La tarea no puede estar vacía", true);
            return;
        }

        if (id) {
            await updateTask(id, task);
            showNotification("Tarea editada con éxito", false);
        } else {
            await addTask(task);
            setTask("");
            showNotification("Tarea agregada con éxito", false);
        }
    };

    const showNotification = (message: string, isError: boolean) => {
        setNotification({ msg: message, status: true, type: isError ? "error" : "success" });
        setTimeout(() => {
            setNotification({ msg: "", status: false, type: "error" });
        }, 2000);
    }

    return (
        <div className="w-full flex justify-center mt-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col gap-5 border border-gray-200"
            >
                <h2 className="text-2xl font-bold text-gray-800">{id ? "Editar" : "Agregar nueva "} Tarea</h2>

                <input
                    type="text"
                    placeholder="Escribe tu tarea..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    disabled={loading}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {loading && <Loader />}
                {notification.status && (
                    <div
                        className={`text-white text-sm px-4 py-2 rounded-md shadow transition ${notification.type === "success" ? "bg-green-500" : "bg-red-500"
                            }`}
                    >
                        {notification.msg}
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-blue-500 hover:underline mr-4">
                        Volver </Link>
                    <Button type="default" label={` ${id ? "Editar" : "Agregar"} `} />
                </div>
            </form>
        </div>
    );
}