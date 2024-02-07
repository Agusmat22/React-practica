

import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, removeTodo, onCheckTodo}) => {
  return (
        <ul className="list-group">
            {
                todos.map( (todo) =>(
                    <TodoItem 
                        key={todo.id}
                        id={todo.id} 
                        description={todo.description} 
                        done={todo.done}
                        remove={removeTodo}
                        check = {onCheckTodo}
                    />
                ) )
            }
                    

        </ul>
  )
}
