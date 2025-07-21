import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    console.log("Tasks fetched from database:", tasks);
    return NextResponse.json(tasks);
}

export async function POST(request: Request) {

    try {
        const body = await request.json();
        const { task } = body;

        if (!task || typeof task !== "string") {
            return NextResponse.json({ error: "Tarea invalida" }, { status: 400 });
        }

        const newTask = await prisma.task.create({
            data: {
                task,
                status: false
            }
        });

        return NextResponse.json(newTask, { status: 201 });
    }
    catch (error) {
        console.error("Error creating task:", error);
        return NextResponse.json({ error: "Error al crear la tarea" }, { status: 500 });
    }

}