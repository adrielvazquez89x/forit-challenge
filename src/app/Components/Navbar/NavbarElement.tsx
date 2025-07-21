import Link from "next/link";
import { INavbarElement } from "@/app/Interfaces/Interfaces";

export default function NavbarElement({ name, url }: INavbarElement) {
    return (
        <li>
            <Link
                href={url}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
                {name}
            </Link>
        </li>
    )
}
