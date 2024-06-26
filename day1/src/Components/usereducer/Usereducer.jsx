import {useReducer} from "react";
 

function reducer(state, action){
    switch(action.type){
        case "INCREMENT" :
            return {...state, counter : state.counter + 1};
        case "DECREMENT" :
            return {...state, counter : state.counter - 1};
        case "RESET" :
            return {...state, counter : 0};
        default :
            return state;
    }
}

const initialState = {counter : 0};
const Usereducer = () => {
    const[state, dispatch] = useReducer(reducer, initialState);
    function Increment(){
        dispatch({type : "INCREMENT"});
    }

    function Decrement(){
        dispatch({type : "DECREMENT"});
    }

    function Reset(){
        dispatch({type : "RESET"});
    }
    
  return (
    <div>
        <h1>Counter : {state.counter}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Usereducer;