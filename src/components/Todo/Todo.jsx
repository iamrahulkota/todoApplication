import React, { useState } from 'react'

function Todo({finsishtodo, edittodos, text, isFinished, deleteTodo}) {

  const [isEditing, setisEditing] = useState(false);

  const [todoText, setTodoText] = useState(text);

  return (
    <> 
      <div className='flex '>
        <div className='w-1/4'>
        <input 
          className='text-lg m-5'
          type='checkbox' checked={isFinished} onChange={()=>finsishtodo(!isFinished)}
        />
        {isEditing ? <input className='text-black m-5 border-0 font-medium text-lg px-4 py-3 w-6/12' value={todoText} onChange={(e)=> setTodoText(e.target.value)}/> : <span className='text-2xl px-4 py-3 '>{todoText}</span>}
        </div>
        <button 
          className='px-12 py-4 text-black bg-white font-medium text-lg border-0 m-2'
          onClick={()=>{
          setisEditing(!isEditing)
          edittodos(todoText)}}>{isEditing ? "Save" : "Edit"}
        </button>

        <button className='font-medium px-12 py-4 text-black bg-white text-lg border-0 m-2' onClick={deleteTodo}>Delete</button>
        
      </div>
    </>
  )
}

export default Todo