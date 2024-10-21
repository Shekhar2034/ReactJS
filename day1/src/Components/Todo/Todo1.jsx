import React, { useState } from 'react'

const Todo1 = () => {
    const [todos, setTodos] = useState("");
    const [allTodo, setAllTodo] = useState([]);

    function handleChange(event) {
        setTodos(event.target.value);
    }

    function handleSubmit() {
        setAllTodo([...allTodo, todos])
        setTodos("")
    }

    function deleteTodo(index) {
        const newArray = [...allTodo];
        newArray.splice(index, 1);
        setAllTodo(newArray);
    }

  return (
    <div>
        <h1>TO Do list</h1>
        <input value={todos} type="text" onChange={handleChange}/>
        <button onClick={handleSubmit}>Add ToDo</button>
       {allTodo.map((todo, i) => (
        <div key={i}>
            <p>{" "} {i + 1}. {todo}</p>
            <button onClick={() => {deleteTodo(i)}}>Delete</button>
        </div>
        
       ))}
    </div>
  )
}

export default Todo1