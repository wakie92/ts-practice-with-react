import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

function TodoItem({ todo, onRemove, onToggle }: TodoItemProps) {
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: 'red',
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };
  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}
export default TodoItem;