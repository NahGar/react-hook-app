import { uuidGen } from "../shared/uuidGen";
import { dateTimeToString } from "../shared/dateTimeToString";
import { useForm } from "../hooks/useForm";


export const TodoAdd = ( { handleAddTodo, todos } ) => {
    
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    
    const onSubmit = (event) => {
        event.preventDefault();
    
        if( description.trim().length <= 1 ) return;
    
        const newTodo = {
            id: uuidGen(),
            dateCreation: dateTimeToString(Date.now()),
            description: description.trim(),
            done: false
        }
        
        if( todos !== null ) {
            const todosLower = todos.map( todo => {
                return todo.description.toLowerCase();
            });
    
            let flagRepeat = false;
            todosLower.forEach( (todo) => { 
                if( todo === newTodo.description.toLowerCase() ) {
                    flagRepeat = true;
                    return;
                }
            });
            if( flagRepeat ) return;
        }

        handleAddTodo( newTodo );
    
        onResetForm();
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input type="text" placeholder="¿Que hay que hacer?" className="form-control" name="description"
                value={ description } onChange={ onInputChange } />
            <button type="submit" className="btn btn-outline-primary mt-1" >Agregar</button>
        </form>
    )
}

/*
export const TodoAdd = ( { onAddTodo } ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
    
        if( inputValue.trim().length <= 1 ) return;
    
        const newTodo = {
            id: uuidGen(),
            dateCreation: dateTimeToString(Date.now()),
            todo: inputValue.trim(),
            done: false
        }
        
        const addTodoAction = {
            type: '[TODO] add',
            payload: newTodo,
        }
    
        onAddTodo( addTodoAction );
    
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input type="text" placeholder="¿Que hay que hacer?" className="form-control" 
                value={ inputValue } onChange={ onInputChange } />
            <button type="submit" className="btn btn-outline-primary mt-1" >Agregar</button>
        </form>
    )
}
*/