import { useState } from "react";
import { useTodos } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

export default function App() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;

    addTodo(text);
    setText("");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      <h1 className="text-3xl font-bold mb-6">
        Todo App Avançado 🚀
      </h1>

      {/* input */}
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nova tarefa..."
          className="border p-2 rounded w-64"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>
      <TodoFilters />

      {/* lista */}
      <TodoList />

    </div>
  );
}