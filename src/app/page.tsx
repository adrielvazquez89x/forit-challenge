
import TaskList from "@/app/Components/Tasklist/TaskList";

export default async function Home() {

  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8 sm:p-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Tareas Pendientes
      </h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
