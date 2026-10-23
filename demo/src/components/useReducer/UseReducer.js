import React,{useReducer} from 'react'

const initalState = 0;

const Reducer = (state , action) =>{
    switch(action){
        case 'increment' : return state + 1;
        case 'decrement' : return state - 1;
        case 'reset' : return initalState;
        default : return state;
    }
}

export const UseReducer = () => {

    const [count , dispatch] = useReducer(Reducer,initalState)

  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>dispatch('increment')}> + </button>
        <button onClick={()=>dispatch('decrement')}> - </button>
        <button onClick={()=>dispatch('reset')}> Reset </button>
    </div>
  )
}
