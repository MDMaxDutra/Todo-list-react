import { useTodos } from "../context/TodoContext";

export default function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div className="flex gap-2 mt-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Todos
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`px-3 py-1 rounded ${
          filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Pendentes
      </button>

      <button
        onClick={() => setFilter("done")}
        className={`px-3 py-1 rounded ${
          filter === "done" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Concluídos
      </button>
    </div>
  );
}