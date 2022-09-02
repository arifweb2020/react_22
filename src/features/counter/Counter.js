import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import SkeletonLoader from '../../comonents/skeleton/SkeletonLoader';
import Box from '../../comonents/box/Box';
import ErrorBoundary from '../../comonents/error-boundry/ErrorBoundry';

export default function Counter() {
  const name = useSelector(state => state.user.data)
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const [state, setState] = useState({ counts: 0, name: "Increment" })

  const sign = state.name;
  const total = state.counts;

  const Inc = ()=>{
    setState((prev)=>{
      return {...prev,counts:prev.counts+1}
    })
  }

  const Dec = ()=>{
    setState((prev)=>{
      return {...prev,name:"Decrement",counts:prev.counts-1}
    })
  }


  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>

      <h1>{name ? name[0]?.name : <SkeletonLoader width="200px" />}</h1>
      <ErrorBoundary>
        <Box text='' />
      </ErrorBoundary>

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount .
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
      <div>
        {sign}
        <button onClick={Inc}>+</button>
        {total}
      <button onClick={Dec}>-</button>
        </div >
     
    </div >
  );
}
