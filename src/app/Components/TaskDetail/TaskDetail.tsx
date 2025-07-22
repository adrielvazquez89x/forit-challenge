"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ITask } from "@/app/Interfaces/Interfaces";
import Loader from "../Loader/Loader";

export default function TaskDetail({ id }: { id: string }) {
    const [task, setTask] = useState<ITask | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await fetch(`/api/tasks/${id}`);
                if (!res.ok) throw new Error("No se encontró la tarea");
                setTask(await res.json());
            } catch (error) {
                console.error(error);
                router.push("/404");
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id, router]);
    if (loading) return <Loader />;
    if (!task) return null;

    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{task.task}</h1>

            <Info label="Estado">
                <span className={task.status ? "text-green-600" : "text-red-500"}>
                    {task.status ? "Completada" : "Pendiente"}
                </span>
            </Info>

            <Info label="ID">{task.id}</Info>

            <Info label="Creada el">
                {task.createdAt ? new Date(task.createdAt).toLocaleString("es-AR") : "No disponible"}
            </Info>

            {task.completedAt && (
                <Info label="Completada el">
                    {new Date(task.completedAt).toLocaleString("es-AR")}
                </Info>
            )}
        </div>
    );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="mb-2">
            <span className="font-semibold text-gray-700">{label}:</span>{" "}
            <span className="text-gray-800">{children}</span>
        </div>
    );
}
