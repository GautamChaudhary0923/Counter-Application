import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"

import {
    Increment,
    Decrement
} from "../redux/action"

function Counter() {

    // const [count,setCount]=useState(0)
    const counter = useSelector((state)=>state.count)
    const dispatch =useDispatch()
   
    const handleDecrement =()=>{
        dispatch(Decrement())
    }
    const handleIncrement=()=>{
        dispatch(Increment())
    }

    return(
        <div>
            <button onClick={handleDecrement}>
                Decrement
            </button>

            <button onClick={handleIncrement}>
                Increment
            </button>
            <h2>Count is {counter}</h2>
        </div>
    )
}

export default Counter;