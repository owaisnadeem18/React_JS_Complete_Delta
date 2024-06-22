import { React, useState } from "react";

export const Todo = () => {
  const [Todo, SetTodo] = useState("");
  const [Todos, SetTodos] = useState([]);

  const getTask = (e) => {
    // console.log(e.target.value);
    SetTodo(e.target.value);
  };

  const btnfunc = () => {
    SetTodos([...Todos, Todo]);
    SetTodo("");
  };

  return (
    <>
      <h2>Todo List</h2>
      <input value={Todo} onChange={getTask} type="text" />
      <button onClick={btnfunc}>Add Task</button>

      <div className="container">
        <ul>
          {Todos.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
