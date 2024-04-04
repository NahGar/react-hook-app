import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickSetFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input 
                ref={ inputRef } /* para vincular el input */
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={ onClickSetFocus } >Set focus</button>
        </>
    )
}
