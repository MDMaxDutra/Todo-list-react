import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all"); // 👈 novo

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
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}