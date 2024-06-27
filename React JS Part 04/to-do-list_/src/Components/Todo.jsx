import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todoTasks, SettodoTasks] = useState([
    { task: "Sample task", id: uuidv4(), isCompleted: false },
  ]);

  const [NewTodo, SetNewTodo] = useState("");

  const AddnewTask = () => {
    // SettodoTasks([...todoTasks, todoTasks]);
    SettodoTasks((prevVal) => {
      return [...prevVal, { task: NewTodo, id: uuidv4(), isCompleted: false }];
    });
    // SetNewTodo("");
    SetNewTodo("");
  };

  const getTask = (event) => {
    // console.log("Changes have been made ");
    // console.log(event.target.value);
    SetNewTodo(event.target.value);
  };

  const DeleteTask = (e) => {
    let c = todoTasks.filter((item) => item.id != e);
    SettodoTasks(c);
  };

  const Convert_Upper_Case = () => {
    SettodoTasks((upperCase) =>
      upperCase.map((item) => {
        return {
          ...item,
          task: item.task.toUpperCase(),
        };
      })
    );
  };

  const Convert_Lower_Case = () => {
    SettodoTasks((LowerCase) =>
      LowerCase.map((item) => {
        return {
          ...item,
          task: item.task.toLowerCase(),
        };
      })
    );
  };

  const UpperCase_One = (e) => {
    SettodoTasks(
      todoTasks.map((item) => {
        if (item.id == e) {
          return {
            ...item,
            task: item.task.toUpperCase(),
          };
        } else {
          return item;
        }
      })
    );
  };

  const DoneTask = () => {
    console.log("Task Done ");
    SettodoTasks(
      todoTasks.map((item) => {
        return {
          ...item,
          isCompleted: true,
        };
      })
    );
  };

  const AllDone = () => {
    SettodoTasks(
      todoTasks.map((item) => {
        return {
          ...item,
          isCompleted: true,
        };
      })
    );
  };

  const AllNonDone = () => {
    SettodoTasks(
      todoTasks.map((item) => {
        return {
          ...item,
          isCompleted: false,
        };
      })
    );
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
            <li style={{ listStyle: "none" }} key={item.id}>
              <span
                style={
                  item.isCompleted ? { textDecorationLine: "line-through" } : {}
                }
              >
                {" "}
                {item.task}{" "}
              </span>
              &nbsp;
              <button onClick={() => DeleteTask(item.id)}>Delete</button>
              &nbsp; &nbsp;
              <button onClick={() => UpperCase_One(item.id)}>
                Upper Case One
              </button>
              &nbsp; &nbsp;
              <button onClick={() => DoneTask()}>Done</button>
              <br />
              <br />
            </li>
          ); // you should must return it by writing the return keyword , or use () these brackets
        })}
      </ul>
      <button onClick={Convert_Upper_Case}>Convert in Upper Case</button>
      <br></br>
      <br></br>
      <button onClick={Convert_Lower_Case}>Convert in Lower Case</button>
      <button onClick={AllDone}>Mark All as Done ...</button>
      <button onClick={AllNonDone}>Mark All as UnDone ...</button>
    </>
  );
};

export default Todo;
