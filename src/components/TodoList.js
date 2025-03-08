import { useState } from "react";
import TodoListItem from "./TodoListItem";
import "../css/todoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = { id: Math.random(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const removeTodo = (id) => {
    const todosAferRemovedItem = todos.filter(
      (currentTodo) => currentTodo.id !== id
    );
    setTodos(todosAferRemovedItem);
  };

  return (
    <div className="container">
      <div className="mx-auto mt-5 p-1 rounded shadow bg title">
        <h3>To-do List </h3>
      </div>
      <div className="mt-4 rounded">
        <input className="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Add Task"
        />
        <button className="btnTodo" type="button" onClick={addTodo}>
          Add Task
        </button>
      </div>

      <div className="mt-5 rounded bg shadow">
        <ul className="list-group">
          {todos.map((currentTodo) => (
            <TodoListItem
              key={currentTodo.id}
              todo={currentTodo}
              onRemove={removeTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
