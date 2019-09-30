const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextid = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextid++,
    text,
  },
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

type TodoAction =
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type TodoState = Todo[];
const initialState: TodoState = [];

function todos(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    }
    case REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.payload);
    }
    case TOGGLE_TODO: {
      return state.map(todo => todo.id === action.payload ? {
        ...todo,
        done: !todo.done
      } :  todo );
    }
    default:
      return state;
  }
}
export default todos;
