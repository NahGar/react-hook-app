import { useCallback, useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { uuidGen } from "../shared/uuidGen";
import { dateTimeToString } from "../shared/dateTimeToString";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
    /*
    {
        id: uuidGen(),
        dateCreation: dateTimeToString(Date.now()),
        description: 'Recolectar la piedra del alma',
        done: false
    }
    */
]

const init = () => {
    //const init = localStorage.getItem("Todos");
    //if( init === null ) {
    //    return [];
    //}
    //return JSON.parse( init );

    //si es null retorna array vacío
    return JSON.parse( localStorage.getItem("Todos") ) || []; 
}


export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init );
    
    useEffect( () => {
        localStorage.setItem( "Todos", JSON.stringify(todos) );
    },[todos]);

    const handleAddTodo = ( newTodo ) => {

        const addTodoAction = {
            type: '[TODO] Add',
            payload: newTodo,
        }

        dispatchTodo( addTodoAction );
    };

    const handleDeleteTodo = ( id ) => {

        dispatchTodo({
            type: '[TODO] Delete',
            payload: id,
        });
    }
    
    return (
        <>
            <h1>TodoApp ({ todos === null ? 0 : todos.length }), <small>pendientes: { todos === null ? 0: todos.filter( (todo) => todo.done === false ).length }</small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
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
