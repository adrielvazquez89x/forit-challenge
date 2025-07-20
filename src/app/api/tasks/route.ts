import { NextResponse } from "next/server";

const mockTasks = [
    {
        id: 1,
        task: "Barrer",
        status: false
    },
    {
        id: 2,
        task: "Comer",
        status: false
    },
    {
        id: 3,
        task: "Bailar",
        status: false
    }
];

export async function GET() {
    return NextResponse.json(mockTasks);
}