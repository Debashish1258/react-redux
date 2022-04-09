import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();

    const {c} = useSelector(state => state.custom);

    const addbtn = () => {
        dispatch({
            type : "increment"
        })
    };
    const subbtn = () => {
        dispatch({
            type : "decrement"
        })
    };
    const incrementByValue = () => {
        dispatch({
            type : "incrementByValue",
            payload : 25
        })
    };

  return (
    <div>
        <h2>{c}</h2>

        <button onClick={addbtn}>Increment</button>
        <button onClick={subbtn}>Decrement</button>
        <button onClick={incrementByValue}>Increment By 25</button>
        
    </div>
  )
}
