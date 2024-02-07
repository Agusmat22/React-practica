import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer.js"


const init = ()=> {

    return JSON.parse( localStorage.getItem('todos') ) || [];
}



export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleNewTodo = ( todo )=>{

        //esta es la action que recibira mi reducer
        const action = {
            type: '[TODO] add todo',
            payload: todo,
        }

        dispatch( action );
    }

    const handleRemoveTodo = ( id )=>{

        const action = {

            type: '[TODO] remove todo',
            payload: id,
        }

        dispatch( action );
    }

    const handleCheckTodo = ( id ) =>{


        const action = {
            type: '[TODO] check todo',
            payload: id,
        }


        dispatch(action);   

    }

    const todosCount = ()=>{

        return todos.length;
    }

    const pendingTodoCount = ()=>{

        return todos.filter( (todo) => !todo.done).length;
    }

    useEffect( ()=>{

        localStorage.setItem('todos' ,JSON.stringify( todos));

    }, [todos] )




  return {
    todos,
    todosCount,
    pendingTodoCount,
    handleNewTodo,
    handleRemoveTodo,
    handleCheckTodo,
  }
}
