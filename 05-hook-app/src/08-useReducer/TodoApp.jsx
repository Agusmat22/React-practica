
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "../hooks/useTodo.js"



export const TodoApp = () => {

    const {todos, todosCount, pendingTodoCount, handleNewTodo, handleCheckTodo, handleRemoveTodo } = useTodo();
    

  return (
    <>

        <h1>TodoApp: {todosCount()},  <small>pendientes: {pendingTodoCount()}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                
                {
                    <TodoList 
                        todos={todos} 
                        removeTodo={handleRemoveTodo}
                        onCheckTodo = {handleCheckTodo}
                    />
                }

            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>


            
        </div>

    </>
  )
}
