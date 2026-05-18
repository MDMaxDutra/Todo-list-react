import React, { useMemo } from "react";
import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos, toggleTodo, deleteTodo, filter } = useTodos();

  const filteredTodos = useMemo(() => {
  return todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });
}, [todos, filter]);

  return (
    <ul className="w-full max-w-md space-y-3 mt-6">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-white shadow p-3 rounded"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(TodoList);