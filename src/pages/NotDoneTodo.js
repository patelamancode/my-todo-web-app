import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoDataContext } from '../context/TodoContext';
import TodoItemTemp from '../components/TodoItemTemp';

const NotDoneTodo = () => {
  const {allTodo} = useContext(TodoDataContext);

  return (
    <div>
      <h1>Not Done todo : {allTodo.filter(({isCompleted}) => !isCompleted).length}</h1>
      <Link to='/'>Back to home</Link>
      <ul>
        {allTodo.filter(item => !item.isCompleted).map(item => {
          return(
            <div key={item.id} style={{borderBottom: 'solid 1px black'}}>
              <TodoItemTemp {...item}/>
              <Link to={`/${item.id}`}>Expand Todo</Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default NotDoneTodo
