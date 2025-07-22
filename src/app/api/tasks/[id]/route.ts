import { ITask } from "@/app/Interfaces/Interfaces";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// Get de 1 tarea por id
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const taskId = parseInt(params.id);

    const task = await prisma.task.findUnique({
        where: { id: taskId }
    });

    if (!task) {
        return NextResponse.json({ error: "Tarea no encontrada" }, { status: 404 });
    }

    return NextResponse.json(task);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

    const id = parseInt(params.id);
    const body: ITask = await req.json();

    try {
        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                task: body.task,
                status: body.status
            }
        });

        return NextResponse.json(updatedTask);
    }
    catch (error) {
        console.error("Error updating task:", error);
        return NextResponse.json({ error: "Error al actualizar la tarea" }, { status: 500 });
    }

}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {

    const id = parseInt(params.id);
    const body: Partial<ITask> = await req.json();

    try {
        const patchedTask = await prisma.task.update({
            where: { id },
            data: {
                status: body.status,
                completedAt: body.status ? new Date() : null 
            }
        });

        return NextResponse.json(patchedTask);
    }
    catch (error) {
        console.error("Error patching task:", error);
        return NextResponse.json({ error: "Error al actualizar el estado de la tarea" }, { status: 500 });
    }

}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

    const id = parseInt(params.id);

    try {
        await prisma.task.delete({
            where: { id }
        });

        return NextResponse.json({ message: "Tarea eliminada correctamente" });
    }
    catch (error) {
        console.error("Error deleting task:", error);
        return NextResponse.json({ error: "Error al eliminar la tarea" }, { status: 500 });
    }
}