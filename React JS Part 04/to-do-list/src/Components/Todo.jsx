import React, { useState } from "react";

const Todo = () => {
  const [todoTasks, SettodoTasks] = useState([""]);

  const [NewTodo, SetNewTodo] = useState("");

  const AddnewTask = (event) => {
    console.log("I have been clicked !!! ");
    // SettodoTasks([...todoTasks, todoTasks]);
    SettodoTasks([...todoTasks, NewTodo]);
    // SetNewTodo("");
    SetNewTodo("");
  };

  const getTask = (event) => {
    // console.log("Changes have been made ");
    // console.log(event.target.value);
    SetNewTodo(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={NewTodo}
        placeholder="Add Todo"
        onChange={getTask}
      />
      <br />
      <button onClick={AddnewTask}>Add Task</button>

      <br />
      <br />
      <hr />

      <h3>Your All Todos</h3>
      <ul>
        {todoTasks.map((item) => {
          return (
            <li style={{ listStyle: "none" }} key={item}>
              {item}
            </li>
          ); // you should must return it by writing the return keyword , or use () these brackets
        })}
      </ul>
    </>
  );
};

export default Todo;
