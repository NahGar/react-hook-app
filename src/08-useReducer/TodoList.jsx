import { TodoItem } from "./TodoItem"

export const TodoList = ( { todos, handleDeleteTodo, handleDoneTodo } ) => {
    //console.log("TodoList",todos);
    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem key={todo.id} 
                    todo={ todo } 
                    handleDeleteTodo={handleDeleteTodo} 
                    handleDoneTodo={handleDoneTodo} />
                ))
            }
        </ul>
    )
}
