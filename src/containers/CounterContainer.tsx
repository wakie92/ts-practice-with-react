import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';

export interface CounterContainerProps {}
const CounterContainer = (props: CounterContainerProps) => {

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  }
  const onDecrase = () => {
    dispatch(decrease());
  }
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  }
  return (
    <Counter
      count={count}
      onDecrease={onDecrase}
      onIncrease={onIncrease}
      onIncreaseBy={onIncreaseBy}
    />
  )
}
export default CounterContainer;