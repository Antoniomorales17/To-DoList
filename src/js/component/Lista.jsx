import React, { useState } from "react";

const Mylist = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
        setTodos ([...todos,inputValue  ])
    }
  }
  

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>ToDo-List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
              }
            }}
            placeholder="What to do now?"
          ></input>
        </li>
        {todos.map((item, index) => (
          <li key={index} className="task">
            <span>{item}</span>
            <button
              type="button"
              className="delete-btn"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mylist;