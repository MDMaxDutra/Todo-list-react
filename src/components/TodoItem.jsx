import { useTodos } from "../context/TodoContext";
import React from "react";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li className="flex justify-between p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={todo.completed ? "line-through" : ""}
      >
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)}>❌</button>
    </li>
  );
}

export default React.memo(TodoItem);