import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function useTodos() {
  return useContext(TodoContext);
}