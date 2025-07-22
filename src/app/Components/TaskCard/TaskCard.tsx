"use client";

import { ITask } from "@/app/Interfaces/Interfaces";
import Button from "@/app/Components/Button/Button";
import Link from "next/link";

interface Props {
    task: ITask;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onComplete: (id: string, status: boolean) => void;
}

export default function TaskCard({ task, onEdit, onDelete, onComplete }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border border-pink-200 hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col">
                <span className="text-xl font-semibold text-pink-700 mb-1">
                    {task.task}
                </span>
                <span
                    className={`text-xs font-medium ${task.status ? "text-green-600" : "text-red-500"}`}
                >
                    {task.status ? "Completado" : "Pendiente"}
                </span>
                <span className="text-xs text-gray-500">
                    <Link href={`/pages/task/${task.id}`} className="hover:underline">
                        Ver mas detalles
                    </Link>
                </span>
            </div>
            <div className="flex gap-2">
                <Button type="edit" handler={() => onEdit(task.id.toString())} />
                <Button type="delete" handler={() => onDelete(task.id.toString())} />
                <Button type="complete" handler={() => onComplete(task.id.toString(), task.status)} />
            </div>
        </div>
    );
}