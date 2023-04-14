import { createContext, useEffect, useState } from "react";
import fakeFetch from "../pages/TodoData";

export const TodoDataContext = createContext(null);

export const TodoDataProvider = ({children}) =>{

    const [allTodo, setAllTodo] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

   

    const getData = async () =>{
        setIsLoading(true)
        try{
            const response = await fakeFetch('https://example.com/api/todos');
            if(response.status === 200){
                setAllTodo(response.data.todos)
                setIsLoading(false)
            }
        }
        catch(error){
            console.log('error found during fetch');
        }
    }
    useEffect(()=>{
        getData();
    }, [])

   

    const markTodoAsCompleted = (todoItem) =>{
        let selected = allTodo.find((item) => item === todoItem)
        selected.isCompleted = !selected.isCompleted;
        setAllTodo([...allTodo ])

        // Ankit bhaiya sol:
        // const updatedData = allTodo.map((todo) => {
        //     if(todo.id === todoItem.id){
        //         todo.isCompleted = true;
        //     }
        //     return todo;
        // })
        // setAllTodo(updatedData)
    }
   




    return( 
        <TodoDataContext.Provider value={{isLoading, allTodo, markTodoAsCompleted}}>
            {children}
        </TodoDataContext.Provider>
    )
} 