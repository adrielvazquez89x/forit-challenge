
import { Pencil, Trash2, Check } from 'lucide-react';
import { ButtonProps } from "@/app/Interfaces/Interfaces";

export default function Button({ type, handler }: ButtonProps) {

    const icons = {
        edit: <Pencil size={16} />,
        delete: <Trash2 size={16} />,
        complete: <Check size={16} />,
    };

    const labels = {
        edit: 'Editar',
        delete: 'Eliminar',
        complete: 'Completar',
    };

    return (
        <button
            onClick={handler}
            className="flex items-center gap-2 text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
            {icons[type]}
            {labels[type]}
        </button>
    );
}
