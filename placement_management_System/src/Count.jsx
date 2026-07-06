import React, { useState } from 'react'

const Count = () => {
    // [initial state value,setup function]=useState(initial value)
    const[count,setCount]=useState(0);
    console.log(count);
  return (
    <>
       <h1>Count:{count}</h1>
       <button onClick={()=>setCount(count+1)}>Increament</button>
       <button onClick={()=>setCount(count-1)}>Decrement</button>
       <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default Count
