import React,{useState} from 'react'
import { Child } from './Child';

export const Parent = () => {
    const [count , setCount] = useState(0);
     console.log("Parent Rendering")
    return (
    <div>
        <button onClick={()=>setCount((c) => c+1)}> Click Me! - {count}</button>
        <button onClick={()=>setCount(0)}> Click Me - 0 </button>
        <button onClick={()=>setCount(5)}> Click Me- 5 </button>
        <Child/>
    </div>
  )
}