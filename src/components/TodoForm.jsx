import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
      <input
        className="flex-1 border p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button className="bg-blue-500 text-white px-4 rounded">
        +
      </button>
    </form>
  );
}