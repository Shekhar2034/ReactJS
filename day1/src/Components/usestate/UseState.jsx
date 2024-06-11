import { useState } from "react";

function UseState(){
    const [counter, setCounter] = useState(1);
    const [counter1, setCounter1] = useState(10);

    function Increment(){
        setCounter(counter + 1);
    }

    function Decrement(){
        if(counter > 1){
            setCounter(counter - 1);
        }
    }


    function addOn(){
        setCounter1(counter1 + 10);
    }

    function downOn(){
        if(counter1 > 10){
            setCounter1(counter1 - 10);
        }
    }

    return(
        <div>
            <h1>Counter 1 :{counter} </h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>


            <h1>Counter 2 : {counter1} </h1>
            <button onClick={addOn}>+</button>
            <button onClick={downOn}>-</button>
        </div>
    )
}

export default UseState;