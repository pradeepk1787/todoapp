function TodoListItem({ todo, onRemove }) {
  return (
    // <li className="list-group-item">
    //     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    //     <label>{todo.text}</label>
    //     <button onClick={()=>{onRemove(todo.id)}} style={{marginLeft:'20px'}}>Remove</button>
    // </li>

    <li className="list-group-item d-flex justify-content-between align-items-left">
      <span>{todo.text}</span>
      <img src="/images/x-circle.svg" alt="Bootstrap" onClick={()=>{onRemove(todo.id)}} width="20" height="20" />   
    </li>
  );
}

export default TodoListItem;
