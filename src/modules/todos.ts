import {
  createStandardAction,
  createAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextid = 1;

export const addTodo = createAction(
  ADD_TODO,
  action => (text: string) =>
    action({
      id: nextid++,
      text,
    }),
);

export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();

// export const addTodo = (text: string) => ({
//   type: ADD_TODO,
//   payload: {
//     id: nextid++,
//     text,
//   },
// });

// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id,
// });

// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// });
const actions = {
  removeTodo,
  addTodo,
  toggleTodo,
}
type TodoAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type TodoState = Todo[];
const initialState: TodoState = [];

const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, action) => state.concat({...action.payload, done: false}),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo ),
  [REMOVE_TODO]: (state, { payload: id }) => state.filter(todo => todo.id !== id),
})
export default todos;
