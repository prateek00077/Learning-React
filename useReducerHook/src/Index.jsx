import React, { useReducer } from 'react'

const initialstate = {
  count : 0,
  val : 0
}

function reducer (state,action){
  switch (action.type) {
      case "increment":
          return {...state, count: state.count + 1};
      case "decrement":
          return {...state, count: state.count - 1};
      case "reset":
        return {...state, count: 0};
      default:
          return {...state};
  }
}
const Index = () => {
    const [state,dispatch] = useReducer(reducer,initialstate);

  return (
    <>
    <div className="flex flex-col justify-center items-center h-lvh">
      <div>{state.count}</div>
      <button className="cursor-pointer" onClick={() => dispatch({type:"increment"})}>Increment</button>
      <button className='cursor-pointer' onClick={() => dispatch({type:"decrement"})}>Decrement</button>
      <button className='cursor-pointer' onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
    </>
  )
}

export default Index
