import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState("");
    const [allTodo, setAllTodo] = useState([]);

    function handleChange(event){
        setTodos(event.target.value);
    }

    function handleSubmit(){
        setAllTodo([...allTodo, todos]);
        setTodos("");
    }

    function deleteTodo(index){
        const newArray = [...allTodo];
        newArray.splice(index, 1);
        setAllTodo(newArray);
    }
  return (
    <div>
        <h1>Todo List</h1>
        <input value={todos} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit Todo</button>
        {allTodo.map((todo, i) => (
            <div key={i} style={{
                display: "flex",
                width: "50%",
                margin: "auto",
                justifyContent: "space-around",
              }} >
                <p>{" "}{i + 1}. {todo}</p>
                <button onClick={() => deleteTodo(i)}>Delete.</button>                
            </div>
        ))}
    </div>
  );
};  

export default Todo;