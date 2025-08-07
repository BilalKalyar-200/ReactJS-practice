import { useState } from "react";
import Input from "./inputs";
import Item from "./items";

import { ContextTodo } from "../store/myTodostore";

function Todoo() {
  const [todos, setTodos] = useState([
    { name: "Drink Milk", Date: "16/23/1020" },
    { name: "Do Homework", Date: "2025-10-17" },
    { name: "Watch Movie", Date: "2025-10-17" },
  ]);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (index) => {
    const temp = [];
    for (let i = 0; i < todos.length; i++) {
      if (i != index) {
        temp.push(todos[i]);
      }
    }
    setTodos(temp);
  };
  return (
    <ContextTodo.Provider value={{ todos, handleDelete, handleNewTodo }}>
      <Input />
      <Item />
    </ContextTodo.Provider>
  );
}
export default Todoo;
