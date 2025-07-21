"use client";
import { ITask } from "@/app/Interfaces/Interfaces";
import Button from "@/app/Components/Button/Button";
import { useState } from "react";

export default function TaskList({ tasks }: { tasks: ITask[] }) {

    const [taskList, setTaskList] = useState([...tasks]);

    

    return (
        <div className="w-full max-w-md flex flex-col gap-4">
            {taskList.map((e, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between transition hover:scale-[1.02] hover:shadow-lg"
                >
                    <span className="text-lg text-gray-700">{e.task}</span>
                    <span
                        className={`text-sm font-medium ${e.status ? "text-green-600" : "text-red-500"
                            }`}
                    >
                        {e.status ? "Completado" : "Pendiente"}
                    </span>
                    <div>
                        <Button type="edit" handler={() => console.log("Edit task")} />
                        <Button type="delete" handler={() => console.log("Delete task")} />
                        <Button type="complete" handler={() => console.log("Complete task")} />
                    </div>
                </div>
            ))}
            {
                taskList.length === 0 && (
                    <div className="text-center text-gray-500">
                        No hay tareas pendientes.
                    </div>
                )
            }
        </div>
    )
}
