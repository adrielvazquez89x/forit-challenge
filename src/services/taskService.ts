import { ITask } from "@/app/Interfaces/Interfaces";

// Get para todas las tareas de la api
export async function getTasksService(): Promise<ITask[]> {

    const response = await fetch("/api/tasks");

    if (!response.ok) {
        throw new Error("Error al obtener tareas");
    }

    return await response.json();
}

//Get de 1 tarea por id de la api
export async function getTaskByIdService(id: string): Promise<ITask> {
    const response = await fetch(`/api/tasks/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener la tarea");
    }

    const task: ITask = await response.json();
    return task;

}

// Post para agregar una tarea a la api
export async function createTaskService(task: string): Promise<ITask> {

    const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    });

    if (!response.ok) {
        throw new Error("Error al crear tarea");
    }
    return response.json();
}

export async function updateTaskService(id: string, task: string): Promise<ITask> {

    const response = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    });

    if (!response.ok) {
        throw new Error("Error al actualizar tarea");
    }
    return response.json();
}

export async function completeTaskService(id: string, status: boolean): Promise<ITask> {

    const responce = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
    });

    if (!responce.ok) {
        throw new Error("Error al completar tarea");
    }
    return responce.json();
}

export async function deleteTaskService(id: string): Promise<void> {

    const response = await fetch(`/api/tasks/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Error al eliminar tarea");
    }
}