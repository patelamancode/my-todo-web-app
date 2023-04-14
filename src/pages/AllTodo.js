import React, { useContext } from 'react'
import { TodoDataContext } from '../context/TodoContext'
import TodoItemTemp from '../components/TodoItemTemp';

const AllTodo = () => {

  const {isLoading, allTodo, markTodoAsCompleted} = useContext(TodoDataContext);

  // const markTodoAsCompleted = (todoItem) =>{
  //   console.log('clicked');
  //   setAllTodo([...allTodo, {...todoItem, isCompleted : true}])
  // }


  return (
    <>
      <h2>All todos</h2>
      <b>{isLoading && 'Loading...'}</b>
      <ul>
        {allTodo.map((todo) => {
          return(
            <div key={todo.id}>
              <TodoItemTemp {...todo}/>
              <button onClick={() => markTodoAsCompleted(todo)}>{todo.isCompleted ? 'Todo Completed' : 'Mark as done'}</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default AllTodo
