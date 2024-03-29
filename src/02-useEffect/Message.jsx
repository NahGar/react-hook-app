import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });

    useEffect( () => {

        //se debe utilizar una función para luego poder hacer el removeEventListener
        const onMouseMove = ( event ) => {
            //const coords = { x:event.x, y:event.y };
            setCoords({ x:event.x, y:event.y });
        }
        window.addEventListener( 'mousemove', onMouseMove );

        return () => {
            console.log('Message unmounted');
            window.removeEventListener( 'mousemove', onMouseMove );
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    )
}