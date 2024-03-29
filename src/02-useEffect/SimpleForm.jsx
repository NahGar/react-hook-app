import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'pepe',
        email: 'pepe@pepe.com'
    });

    const { username, email } = formState;

    const onInputChange = (event) => {
        /*
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
        */
        //  o se puede hacer asi
        //  [ event.target.name ] equivale a username: o email: 
        setFormState({
            ...formState,
            [ event.target.name ]: event.target.value,
        });
    }

    useEffect( () => {
        console.log("Se ejecuta al crear el componente y por única vez");
    }, []);

    useEffect( () => {
        console.log("Se cambió el estado");
    }, [formState]);

    useEffect( () => {
        console.log("Se cambió el email");
    }, [email]);

    useEffect( () => {
        console.log("Se cambió el usuario");
    }, [username]);

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
            {
                (username === 'pepe2') && <Message />
            }
            

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
