import { useContext, useState } from "react";
import { themeContect } from "../theme/theme.context";

function UseState(){
    const [counter, setCounter] = useState(1);
    const [counter1, setCounter1] = useState(10);
    const {themeState, dispatch} = useContext(themeContect);

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
        <div >
            <h1>Counter 1 :{counter} </h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>


            <h1>Counter 2 : {counter1} </h1>
            <button onClick={addOn}>+</button>
            <button onClick={downOn}>-</button><br /><br /><br /><br />

            <div style={{
            backgroundColor : themeState.theme === "light" ? "Green" : "GRAY"
        }}>
                <button onClick={
                    () => dispatch({type : themeState?.theme === "light" ? "DARK" : "LIGHT"})
                }>Change {themeState?.theme === "light" ? "light" : "dark"} theme</button>
            </div>
            
        </div>
    )
}

export default UseState;