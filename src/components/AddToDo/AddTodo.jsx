import React, { useContext, useState } from 'react'
import TodoContext from '../TodoContext/TodoContext';

function AddTodo() {

    const { todos, settodos } = useContext(TodoContext);

    const [todoText,settodoText] = useState('');


 return (
    <>
        <input type='text' 
        onChange={(e)=>settodoText(e.target.value)}
        value={todoText}/>
        <button onClick={()=>{
            let nextId = todos.length+1;
            settodos([...todos, {id : nextId, text : todoText, isFinshed : false}]);
            settodoText('');
        }}>Submit</button>
    </>
  )
}

export default AddTodo