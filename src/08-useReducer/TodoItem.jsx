
export const TodoItem = ({ todo }) => {
    console.log("Todoitem todo",todo);
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description} (creado {todo.dateCreation})</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}
