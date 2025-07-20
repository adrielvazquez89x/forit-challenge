export interface INavbarElement {
    url: string;
    name: string;
}

type ButtonType = 'edit' | 'delete' | 'complete';

export interface ButtonProps {
    type: ButtonType;
    handler: () => void;
}

export interface ITask {
    id: number;
    task: string;
    status: boolean;
}