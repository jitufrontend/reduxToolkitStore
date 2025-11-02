import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incraseby1,
  incraseby10,
  decreaseby1,
  decreaseby10,
  increaseByValue
} from "../app/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello {count}</h1>
      <button onClick={() => dispatch(incraseby1())}>Increament 1</button>
      <button onClick={() => dispatch(incraseby10())}>Increament 10</button>

      <button onClick={() => dispatch(decreaseby1())}>Decrease 1</button>
      <button onClick={() => dispatch(decreaseby10())}>Decrease 10</button>

      <button onClick={()=>  dispatch(increaseByValue(1000))}>increase</button>
    </div>
  );
};

export default Counter;
