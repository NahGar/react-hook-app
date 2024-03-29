import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const loadingState = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    };

    const [state, setState] = useState(loadingState);

    //se ejecuta cuando se cambia url
    useEffect( () => {
        getFetch();
    }, [ url ])

    const setLoadingState = () => {
        setState(loadingState);
    }

    const getFetch = async() => {
        
        setLoadingState();
        
        const resp = await fetch( url );

        //sleep para que se vea el Cargando...
        await new Promise( resolve => setTimeout( resolve, 1000 ) );

        if( !resp.ok ) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }

        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });

        //Manejo del cache
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}


