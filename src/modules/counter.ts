import {
  createStandardAction,
  ActionType,
  createReducer,
  action,
} from 'typesafe-actions';

// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
// const INCREASE_BY = 'counter/INCREASE_BY';

// export const increase = createStandardAction(INCREASE)();
// export const decrease = createStandardAction(DECREASE)();
// export const increaseBy = createStandardAction(INCREASE_BY)<number>();

// const actions = { increase, decrease, increaseBy };
// type CounterAction = ActionType<typeof actions>;

const increase = createStandardAction('counter/INCREASE')();
const decrease = createStandardAction('counter/DECREASE')();
const increaseBy = createStandardAction('counter/INCREASE_BY')<number>();
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

//state와 반환값이 일치해야함.
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: state => ({ count: state.count + 1 }),
//   [DECREASE]: state => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

//메서드체이닝 방식
//state의 타입은 initialState를 참조하여 바로 유츄가능,
//액션 객체의 타입은은 액션 생성함수를 참조하여 유추하여 제네릭 생략 가능.
const counter = createReducer(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));
export default counter;
