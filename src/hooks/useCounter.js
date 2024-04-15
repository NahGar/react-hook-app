import { useEffect, useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);
    
    const increment = ( value = 1 ) => {
        //setCounter( counter + value );
        setCounter( (current) => current + value );
    }

    const decrement = ( value = 1 ) => {
        if( counter >= value ) {
            //setCounter( counter - value );
            setCounter( (current) => current - value );
        }
    }

    const resetCounter = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        resetCounter
    }
}