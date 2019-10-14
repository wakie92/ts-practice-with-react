import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';
import { TodoState, TodoActions } from './types';
import { createReducer } from 'typesafe-actions';

const initialState: TodoState = [];

const todos = createReducer<TodoState, TodoActions>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo )),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
})

export default todos;