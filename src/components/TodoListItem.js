

function TodoListItem({todo, onRemove}){
    return(
        <div>
            <span>{todo.text}</span>
            <button onClick={()=>{onRemove(todo.id)}} style={{marginLeft:'20px'}}>Remove</button>
        </div>
    )
}

export default TodoListItem;