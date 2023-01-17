import React, { memo } from 'react'
import { useReducer } from 'react'

const initialState={count:0}

type ACTIONTYPE={type:'increment';payload:number}|{type:'decrement';payload:number}


function reducer(state:typeof initialState,action:ACTIONTYPE){
    switch(action.type) {
        case "increment":
            return {count:state.count+action.payload}
        case "decrement":
            return {count:state.count-action.payload}
        default:
            throw new Error()
    }
}

const Counter = () => {
    console.log('counter component')
    const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div className='col-6 p-2 m-auto text-center mt-2 border rounded'>
        <h3>Counter Component</h3>
        <button className='p-3 m-1 boder-0 rounded-circle fs-5' onClick={()=>dispatch({type:"decrement",payload:1})}>-</button>
        <label className='fs-4'>{state.count}</label>
        <button className='p-3 m-1 boder-0 rounded-circle fs-5' onClick={()=>dispatch({type:"increment",payload:1})}>+</button>
    </div>
  )
}

export default memo(Counter)