import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTdo from './components/AddToDo/AddTodo'
import TodoContext from './components/TodoContext/TodoContext';

function App() {

  const [todos,settodos] = useState([
    {id : 1, text : "Todo-1", isFinished : true},
    {id : 2, text : "Todo-2", isFinished : false}
  ])


  useEffect(()=>{
    console.log(todos)
  })

  return (
    <>
    <TodoContext.Provider value={{todos, settodos}}>
      <AddTdo />
      <TodoList />
    </TodoContext.Provider>
    </>
  )
}

export default App
