import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { uuidGen } from "../shared/uuidGen";
import { dateTimeToString } from "../shared/dateTimeToString";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
    {
        id: uuidGen(),
        dateCreation: dateTimeToString(Date.now()),
        description: 'Recolectar la piedra del alma',
        done: false
    }
    ,
    {
        id: uuidGen(),
        dateCreation: dateTimeToString(Date.now()),
        description: 'Recolectar la piedra del poder',
        done: false
    }
];

export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState );

    console.log(todos);

    return (
        <>
            <h1>TodoApp (2), <small>pendientes: 2</small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div> 

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd />
                </div>
            </div>
            
        </>
    )
}
