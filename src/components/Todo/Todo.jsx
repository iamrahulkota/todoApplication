import React, { useState } from 'react'

function Todo({finsishtodo, edittodos, text, isFinished, deleteTodo}) {

  const [isEditing, setisEditing] = useState(false);

  const [todoText, setTodoText] = useState(text);

  return (
    <> 
      <div>
        
        <input type='checkbox' checked={isFinished} onChange={()=>finsishtodo(!isFinished)}/>
        {isEditing ? <input value={todoText} onChange={(e)=> setTodoText(e.target.value)}/> : <span>{todoText}</span>}
        <button onClick={()=>{
          setisEditing(!isEditing)
          edittodos(todoText)}}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={deleteTodo}>Delete</button>
        
      </div>
    </>
  )
}

export default Todo