import React from 'react'
import { useState } from "react";
import SideBar from '../components/SideBar';

function Todo() {
    const [todos, setTodos] = useState([
        { task: "Pick up groceries", done: false },
        { task: "Buy Milk", done: true },
        { task: "Complete Project X", done: false },
      ]);

      const handleChange = (done, i) => {
        let tmp = todos[i];
        tmp.done = !done;
        let todosClone = [...todos];
        todosClone[i] = tmp;
        setTodos([...todosClone]);
      };

  return (
    <div className="page-container">
      <SideBar id={3} />

    <div>

     <h1>My Tasks</h1>

      {todos.map(({ task, done }, i) => (
        <div key={i}>
          <label htmlFor={i}>
            <input
              type="checkbox"
              onChange={() => handleChange(done, i)}
              checked={done}
              id={i}
            />
            <span>{task}</span>
          </label>
        </div>
        ))}

    <h3>Total Completed: {todos.filter((todo) => todo.done).length}</h3>
    </div>
    </div>
    
  )
}

export default Todo
