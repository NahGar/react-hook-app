import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

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

export const useTodo = ( ) => {

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

    const handleDoneTodo = ( id ) => {

        dispatchTodo({
            type: '[TODO] Done',
            payload: id,
        });
    }

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleDoneTodo
    }
}