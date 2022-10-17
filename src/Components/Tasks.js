import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Tasks = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Tasks;
