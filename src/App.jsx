import React, { useEffect  } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTdo from './components/AddToDo/AddTodo'
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <div className='w-screen h-screen bg-[#0D0D0D] text-white'>
    <Provider store = {store}>
      <AddTdo />
      <TodoList />
    </Provider>
    </div>
    </>
  )
}

export default App
