
import Todo from '../Todo/Todo'
import { useDispatch, useSelector } from 'react-redux';

function TodoList() {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);


  function onDeleteTodo(id){
    dispatch({type : 'delete_todo', payload : {id}})
  }

  function onEditTodo(id, newTodo){
    dispatch({type : 'edit_todo', payload : {id, newTodo}})
  }

  function onFinishtodo(id, state){
    dispatch({type : 'finish_todo', payload : {id, state}})
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