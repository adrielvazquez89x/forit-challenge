import TaskDetail from "@/app/Components/TaskDetail/TaskDetail";

export default function TaskPage({ params }: { params: { id: string } }) {
    return <TaskDetail id={params.id} />;
}

