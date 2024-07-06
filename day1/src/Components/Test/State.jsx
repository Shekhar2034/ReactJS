import React, { useState } from 'react'

const State = () => {
  const [counter, setCounter] = useState(0);

  function Increment(){
    setCounter(counter + 1);
  }

  function Decrement(){
    setCounter(counter - 1);
  }

  function Reset(){
    setCounter(0);
  }
  

  return (
    <div>
      <h1>Counter :{counter} </h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>reset</button>
    </div>
  )
}

export default State