import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [data, setData] = useState("");
    const [counter, setCounter] = useState(0);
    const expCount = useMemo(() => ExpensiveComponent(counter),[counter]);

  return (
    <div>
        <input onChange={(event) => setData(event.target.value)}/>
        <h1>Expensive Counter : {expCount}</h1>
        <h1>Counter : {counter} </h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

function ExpensiveComponent(counter){
    console.log("Expensive Component");
    var totalCount = 0;
    for(var i = 0; i < 1000000000; i++){
        totalCount += counter;
    }
    return totalCount;
}

export default UseMemo;