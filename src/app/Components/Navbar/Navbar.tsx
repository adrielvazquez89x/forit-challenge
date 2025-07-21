import NavbarElement from "./NavbarElement"
import { INavbarElement } from "@/app/Interfaces/Interfaces";

export default function Navbar() {

    const links: INavbarElement[] = [
        {
            url: "/",
            name: "Tareas"
        },
        {
            url: "/pages/add",
            name: "Agregar nueva tarea"
        }
    ];

    return (
        <nav className="w-full border-b border-gray-300 py-4 mb-6">
            <ul className="flex justify-center gap-8">
                {links.map((e) => (
                    <NavbarElement key={e.name} name={e.name} url={e.url} />
                ))}
            </ul>
        </nav>
    )
}
