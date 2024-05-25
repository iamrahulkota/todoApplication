import React, { useState } from 'react'

import { useDispatch } from "react-redux";
function AddTodo() {

    const dispatch = useDispatch();

    const [todoText,settodoText] = useState('');

    function addTodo(todoText)
    {
        dispatch({type : 'add_todo', payload: {todoText}})
    }

 return (
    <>
        <input type='text' 
        onChange={(e)=>settodoText(e.target.value)}
        value={todoText}/>
        <button onClick={()=>{
            addTodo(todoText);
            settodoText('');
        }}>Submit</button>
    </>
  )
}

export default AddTodo