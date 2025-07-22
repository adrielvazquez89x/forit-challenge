"use client";

import { useRouter } from "next/navigation";
import { useTasks } from "@/app/hooks/useTask";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import TaskCard from "../TaskCard/TaskCard";

export default function TaskList() {

    const { completeTask, loading, tasks, getTasks, deleteTask } = useTasks();
    const router = useRouter();

    useEffect(() => {
        getTasks();
    }, []);

    const handlerEditTask = (id: string) => {
        console.log("Edit task with id:", id);
        router.push(`/pages/form?id=${id}`);
    }

    const handlerCompleteTask = (id: string, status: boolean) => {
        completeTask(id, !status);
    }

    const handlerDeleteTask = (id: string) => {
        deleteTask(id);
    }

    return (
        <div className="w-full max-w-md flex flex-col gap-4">
            {loading ? (
                <Loader />
            ) : tasks.length !== 0 ? (
                tasks.map((e) => (
                    <TaskCard
                        key={e.id}
                        task={e}
                        onEdit={handlerEditTask}
                        onDelete={handlerDeleteTask}
                        onComplete={handlerCompleteTask}
                    />
                ))
            ) : (
                <div className="text-center text-gray-500">No hay tareas pendientes.</div>
            )}
        </div>

    )
}
