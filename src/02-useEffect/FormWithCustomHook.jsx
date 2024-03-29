import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    //Esto se pasa al hook useForm
    /*
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    const onInputChange = (event) => {
        
        //if( event.target.name == "username") {
        //    setFormState({
        //        ...formState,
        //        username: event.target.value    
        //    });
        //}
        //if( event.target.name == "email") {
        //    setFormState({
        //        ...formState,
        //        email: event.target.value
        //    });
        //}
        //  o se puede hacer asi
        //  [ event.target.name ] equivale a username: o email: 
        setFormState({
            ...formState,
            [ event.target.name ]: event.target.value,
        });
    }
    */

    const initialForm = {
        username: '',
        email: '',
        password: ''
    };

    const { formState, onInputChange, onResetForm, username, email, password } = useForm( initialForm );

    return (
        <>
            <h1>Formulario con custom hook</h1>  
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="usuario"
                name="username"
                value={username}
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={ onInputChange }
            />
            <input 
                type="password"
                className="form-control"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            />
            <button className="btn btn-primary" onClick={ onResetForm }>Reset</button>
        </>
    )
}
