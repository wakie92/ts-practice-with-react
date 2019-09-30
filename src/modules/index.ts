import { combineReducers } from 'redux';
import counter from './counter'
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

//root리듀서의 반환값
//컨테이너에서 이 타입을 불러서 사용해야함.
export type RootState = ReturnType<typeof rootReducer>;