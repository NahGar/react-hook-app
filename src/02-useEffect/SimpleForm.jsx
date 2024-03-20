import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'pepe',
        email: 'pepe@pepe.com'
    });

    const { username, email } = formState;

    const onInputChange = (event) => {

        if( event.target.name == "username") {
            setFormState({
                ...formState,
                username: event.target.value    
            });
        }
        if( event.target.name == "email") {
            setFormState({
                ...formState,
                email: event.target.value    
            });
        }
    }

    return (
        <>
            <h1>Formulario Simple</h1>  
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

        </>
    )
}
