import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [counter, setCounter] = useState(0);
    const preCounter = useRef();
    console.log(preCounter,"preCounter");

    useEffect(() => {
        console.log(counter, "counter");
        preCounter.current = counter;
      }, [counter]);
  return (
    <div>
        <h1>Previous Counter : {preCounter.current}</h1>
        <h1>Counter : {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default UseRef;