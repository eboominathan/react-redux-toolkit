import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementamount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    dispatch(reset());
    setIncrementamount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementamount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        Add Amount
      </button>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
};

export default CounterComponent;
