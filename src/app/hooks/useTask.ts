import { useState } from "react";
import { ITask } from "../Interfaces/Interfaces";
import { createTaskService, getTasksService } from "@/services/taskService";

export function useTasks() {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getTasks = async () => {
        try {
            setLoading(true);
            const response = await getTasksService();

            setTasks(response);

            return response;
        } catch (error) {
            console.error("Error fetching tasks:", error);

        }
        finally {
            setLoading(false);
        }
    }

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

    return {
        tasks,
        loading,
        getTasks,
        addTask
    }
}