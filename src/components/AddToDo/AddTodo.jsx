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
    <h1 className='text-2xl px-5 py-10'>To do Application</h1>
            <input 
            type='text' 
            onChange={(e)=>settodoText(e.target.value)}
            value={todoText}
            className='text-black text-2xl m-5 border-0 font-medium px-4 py-3 w-1/4 h-20'
            />
            <button 
                className='px-12 py-4 text-black bg-white font-medium text-lg border-0'
                onClick={()=>{
                addTodo(todoText);
                settodoText('');
            }}>Submit</button>
    </>
  )
}
// 

export default AddTodo