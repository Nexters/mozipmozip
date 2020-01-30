import React from 'react';
import TodoList from "../components/Todos/TodoList"
import TodoInsert from "../components/Todos/TodoInsert"

export default function TodoPage() {
  return (
    <>
      <TodoInsert/>
      <TodoList/>
    </>
  );
}

