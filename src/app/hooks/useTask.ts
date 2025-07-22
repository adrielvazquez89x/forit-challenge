import { useState } from "react";
import { ITask } from "../Interfaces/Interfaces";
import { completeTaskService, createTaskService, deleteTaskService, getTaskByIdService, getTasksService, updateTaskService } from "@/services/taskService";


export function useTasks() {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Get para todas las tareas
    const getTasks = async () => {
        try {
            setLoading(true);
            const response = await getTasksService();

            setTasks(response);

            return response;
        } catch (error) {
            console.error("Error al obtener tareas:", error);

        }
        finally {
            setLoading(false);
        }
    }
    // Get para una tarea por ID
    const getTaskById = async (id: string) => {
        try {
            setLoading(true);
            const response = await getTaskByIdService(id);
            setTasks([...tasks, response]);

            return response;
        }
        catch (error) {
            console.error("Error al obtener tarea por ID:", error);
        }
        finally {
            setLoading(false);
        }
    }

    // Post para agregar una tarea
    const addTask = async (task: string) => {

        try {
            setLoading(true);
            const response = await createTaskService(task);
            setTasks(prevTasks => [...prevTasks, response]);

            return response;
        }

        catch (error) {
            console.error("Error adding task:", error);

        }
        finally {
            setLoading(false);
        }
    }

    const updateTask = async (id: string, task: string) => {

        try {
            setLoading(true);
            const response: ITask = await updateTaskService(id, task);
            setTasks(prevTasks => [...prevTasks, response]);

            return response;
        }
        catch (error) {
            console.error("Error updating task:", error);
        }
        finally {
            setLoading(false);
        }
    }

    const completeTask = async (id: string, status: boolean) => {
        try {
            setLoading(true);
            const response: ITask = await completeTaskService(id, status);
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === response.id ? response : task
                )
            );
            return response;
        }
        catch (error) {
            console.error("Error completing task:", error);
        }
        finally {
            setLoading(false);
        }
    }

    // Delete para eliminar una tarea
    const deleteTask = async (id: string) => {
        try {
            setLoading(true);
            await deleteTaskService(id);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== parseInt(id)));
        }
        catch (error) {
            console.error("Error deleting task:", error);
        }
        finally {
            setLoading(false);
        }
    }

    return {
        tasks,
        loading,
        getTasks,
        getTaskById,
        addTask,
        completeTask,
        updateTask,
        deleteTask
    }
}