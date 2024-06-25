import React, { useState } from "react";

export const Todo_Repractice = () => {
  const [Todos, SetTodos] = useState([]);
  const [NewTodo, SetNewTodo] = useState();

  const AddNewTask = () => {
    const trimmedTodo = NewTodo.trim();

    // SetTodos;
    if (trimmedTodo != "") {
      SetTodos([...Todos, trimmedTodo]);
      SetNewTodo("");
    } else {
      alert("Please Enter a Task First ... ");
    }
  };

  const getTask = (event) => {
    SetNewTodo(event.target.value);
  };

  return (
    <>
      <h2 style={{ fontSize: "30px" }}>Todo List Mini Project</h2>

      <input
        style={{
          padding: ".2rem 0.5rem",
          fontSize: "1.5rem",
          outline: "none",
          margin: "0rem 1rem",
        }}
        type="text"
        value={NewTodo}
        onChange={getTask}
      />
      <button type="submit" onClick={AddNewTask}>
        Add Task
      </button>

      <br />
      <br />
      <br />
      <br />
      <hr />

      <h2>Your Todos:</h2>
      <ul>
        {Todos.map((item) => (
          <li
            key={item}
            style={{ width: "88%", listStyle: "number", fontSize: "18px" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
