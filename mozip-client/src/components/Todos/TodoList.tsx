import React from 'react';
import { Todo } from '../../modules/todos';
import TodoItem from './TodoItem/TodoItem';
import useTodos from '../../hooks/Todos/useTodos'

function TodoList() {
  const todos = useTodos()
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;