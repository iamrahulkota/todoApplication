import React, { useContext } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../TodoContext/TodoContext'

function TodoList() {

  const {todos, settodos} = useContext(TodoContext);

  function onDeleteTodo(id){
    const newTodoList = todos.filter(todo=>todo.id!=id);
    settodos(newTodoList);
  }

  function onEditTodo(id, newTodo){
    const newTodoList = todos.map(todo=>{
      if (todo.id==id)
        {
          todo.text = newTodo;
        }
        return todo;
    })
    settodos(newTodoList);
  }

  function onFinishtodo(id, state){
    const newTodoList = todos.map(todo=>{
      if(todo.id==id){
        todo.isFinished = state;
      }
      return todo;
    });
    settodos(newTodoList)
  }

  return (
    <>
    {
        
    todos && todos.map(
        (todo)=> <Todo
            key = {todo.id}
            text = {todo.text}
            id = {todo.id}
            isFinished = {todo.isFinished}
            edittodos = {(newTodo)=>onEditTodo(todo.id, newTodo)}
            deleteTodo = {()=>onDeleteTodo(todo.id)}
            finsishtodo={(state)=>onFinishtodo(todo.id,state)}
        />)
        
    }
    </>
  )
}

export default TodoList