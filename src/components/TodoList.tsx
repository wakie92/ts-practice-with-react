import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Todo[],
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
function TodoList({todos, onRemove, onToggle}: TodoListProps) {
  if(todos.length === 0 ) return <p>등록된 항목이 없습니다.</p>
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}
export default TodoList;