import { useState } from "react";
import TodoContext from "./TodoContext";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}