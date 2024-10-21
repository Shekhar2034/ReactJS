import React, { useState } from 'react'

const State1 = () => {
    const [display, setDisplay] = useState("");

    function onChange(event){
        const val = event.target.value;
        setDisplay(val)
    }
  return (
    <div>
        <h1>{display}</h1>
        <input type="text" placeholder='Enter the name' value={display} onChange={onChange} />
    </div>
  )
}

export default State1