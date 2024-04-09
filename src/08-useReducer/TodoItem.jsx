
export const TodoItem = ({ todo, handleDeleteTodo, handleDoneTodo }) => {

    /*
    const onDeleteTodo = (event) => {
        handleDeleteTodo( event.target.id );
    }
    */

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center spanPointer" onClick={ () => handleDoneTodo( todo.id ) }>{todo.description} (creado {todo.dateCreation})</span>
            <button className="btn btn-danger" onClick={ () => handleDeleteTodo( todo.id ) }>Borrar</button>
        </li>
    )
}
