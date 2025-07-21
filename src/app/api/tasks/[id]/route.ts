import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const taskId = parseInt(params.id);

    const task = await prisma.task.findUnique({
        where: {id: taskId}
    });

    if(!task) {
        return NextResponse.json({ error: "Tarea no encontrada" }, { status: 404 });
    }

    return NextResponse.json(task);
}
