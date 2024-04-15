//import { useCallback, useEffect, useReducer } from "react"
//import { todoReducer } from "./todoReducer";
//import { uuidGen } from "../shared/uuidGen";
//import { dateTimeToString } from "../shared/dateTimeToString";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const {todos, todosCount, todosPendCount, handleAddTodo, handleDeleteTodo, 
           handleDoneTodo} = useTodos();

    return (
        <>
            <h1>TodoApp ({ todosCount }), <small>pendientes: { todosPendCount }</small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleDoneTodo={handleDoneTodo}/>
                </div> 

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd todos={todos} handleAddTodo={handleAddTodo}/>
                </div>
            </div>
            
        </>
    )
}
