export interface INavbarElement {
    url: string;
    name: string;
}

type ButtonType = "edit" | "delete" | "complete" | "add" | "default";

export interface ButtonProps {
    type: ButtonType;
    handler?: () => void;
    label?: string; 
}

export interface ITask {
    id: number;
    task: string;
    status: boolean;
    completedAt?: Date | null;
    createdAt?: Date | null;
}