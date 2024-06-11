import React, { useState } from 'react'

const ChildComponent = (props) => {
    const [inputvalue, setInputvalue] = useState();

    function handleChange(event) {
        setInputvalue(event.target.value);
        // props(event.target.value);
    }

  return (
    <div>
        <label>input value</label>
        <input type="text" value={inputvalue} onChange={handleChange} />
    </div>
  )
}

export default ChildComponent