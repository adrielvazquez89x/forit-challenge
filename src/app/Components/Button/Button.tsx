import { Pencil, Trash2, Check, Plus } from "lucide-react";
import { ButtonProps } from "@/app/Interfaces/Interfaces";
import clsx from "clsx";

export default function Button({ type = "default", handler, label }: ButtonProps) {
    const icons = {
        edit: <Pencil size={16} />,
        delete: <Trash2 size={16} />,
        complete: <Check size={16} />,
        add: <Plus size={16} />,
        default: null,
    };

    const colorStyles = clsx({
        "bg-green-100 text-green-700 hover:bg-green-200 hover:cursor-pointer": type === "complete",
        "bg-red-100 text-red-700 hover:bg-red-200 hover:cursor-pointer": type === "delete",
        "bg-purple-100 text-purple-700 hover:bg-purple-200 hover:cursor-pointer": type === "edit",
        "bg-blue-100 text-blue-700 hover:bg-blue-200 hover:cursor-pointer": type === "add",
        "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:cursor-pointer": type === "default",
    });

    const baseStyles = "transition hover:scale-105 active:scale-95 font-medium";

    const iconOnly = type !== "default" && !label;
    const textOnly = !!label && type === "default";

    return (
        <button
            onClick={handler}
            className={clsx(
                baseStyles,
                iconOnly && colorStyles,
                iconOnly && "w-9 h-9 rounded-full flex items-center justify-center",
                textOnly && "px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 ",
                !iconOnly && !textOnly && "flex items-center gap-2 px-3 py-1 rounded-md border border-gray-300"
            )}
            title={iconOnly ? type : undefined}
        >
            {iconOnly && icons[type]}
            {!iconOnly && !textOnly && (
                <>
                    {icons[type]}
                    {label}
                </>
            )}
            {textOnly && label}
        </button>
    );
}
