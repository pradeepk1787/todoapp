import { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList(){
    
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const addTodo = ()=>{
        const newTodo = {id: Math.random(), text: inputValue};
        setTodos([...todos, newTodo]);
        setInputValue('');
    }

    const removeTodo = (id)=>{
        const todosAferRemovedItem = todos.filter(currentTodo =>currentTodo.id !== id);
        setTodos(todosAferRemovedItem);
    }

    return(
        <div className="container">
            <h2>Todo List Application!</h2>

            <input type="text"
                   value={inputValue}
                   onChange={(e)=>{ setInputValue(e.target.value) }}
                   placeholder="Add Task"
                    />
            <button onClick={addTodo} >Add Todo</button>

            <div style={{marginTop:'20px'}}>
                {todos.map(currentTodo=>(
                    <TodoListItem key={currentTodo.id} todo={currentTodo} onRemove={removeTodo} />
                ))}
            </div>
        </div>
    );
}
