import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { uuidGen } from "../shared/uuidGen";
import { dateTimeToString } from "../shared/dateTimeToString";


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
                    <ul className="list-group">
                        {
                            todos.map( todo => (
                                <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">{todo.description}</span>
                                    <span className="align-self-center">{todo.dateCreation}</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div> 

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form>
                        <input type="text" placeholder="¿Que hay que hacer?" className="form-control" />
                        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
