import React, { useContext } from 'react';
import { useParams , Link } from 'react-router-dom';
import { TodoDataContext } from '../context/TodoContext';
import TodoItemTemp from '../components/TodoItemTemp';

const TodoDetails = () => {
    const { todoId } = useParams()
    const {allTodo} = useContext(TodoDataContext)
    console.log(todoId);

    const userSelectedTodo = (todoList, selectedId) =>{
        return todoList.find(({id}) => id === +selectedId)
    }
    const selectedTodo = userSelectedTodo(allTodo, todoId)

    return (
        <div>
            <h1>Todo Details</h1> 
            <TodoItemTemp {...selectedTodo} />
            <Link to='/'>Back</Link>
        </div>
    )
}

export default TodoDetails
