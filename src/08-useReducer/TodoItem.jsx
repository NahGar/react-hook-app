
export const TodoItem = ({ todo, handleDeleteTodo }) => {

    /*
    const onDeleteTodo = (event) => {
        handleDeleteTodo( event.target.id );
    }
    */

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description} (creado {todo.dateCreation})</span>
            <button className="btn btn-danger" onClick={ () => handleDeleteTodo( todo.id ) }>Borrar</button>
        </li>
    )
}
