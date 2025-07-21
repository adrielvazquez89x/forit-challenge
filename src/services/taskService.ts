import { ITask } from "@/app/Interfaces/Interfaces";

export async function getTasksService(): Promise<ITask[]> {

    const response = await fetch("/api/tasks");

    if (!response.ok) {
        throw new Error("Error fetching tasks");
    }

    return await response.json();
}

export async function getTaskByIdService(id: string): Promise<ITask> {
    const response = await fetch(`/api/tasks/${id}`);

    if(!response.ok){
        throw new Error("Error");
    }

    const task: ITask = await response.json();
    return task;

}

export async function createTaskService(task: string): Promise<ITask> {

    const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    });

    if (!response.ok) {
        throw new Error("Error creating task");
    }
    return await response.json();
}