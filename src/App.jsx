import React, { useEffect  } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTdo from './components/AddToDo/AddTodo'
import store from './store';
import { Provider } from "react-redux";

function App() {
  



  return (
    <>
    <Provider store = {store}>
      <AddTdo />
      <TodoList />
    </Provider>
    </>
  )
}

export default App
