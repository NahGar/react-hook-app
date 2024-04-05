import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //en este ejemplo se redibuja Showincrement aunque nada haya cambiado
    //const incrementFather = () => {
    //    setCounter(counter +1);
    //}

    //memoriza funciones y las ejecuta cuando algo cambia
    //si usa setCounter(counter + 1) no funciona porque counter siempre es 10
    const incrementFather = useCallback(
        //si necesita recibir parámetros es por acá
        ( incrementValue ) => {
            //setCounter(counter +1);
            setCounter( (value) => value + incrementValue );
        },
        []
    )

    return (
        <>
            <h1>useCallback-Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}

