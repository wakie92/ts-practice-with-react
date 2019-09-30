import React from 'react';
import TodoInsert from '../components/TodoInsert';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';
import { RootState } from '../modules';
import TodoList from '../components/TodoList';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
export default TodoApp;
