import { useEffect, useState } from "react";

const localCache = {};

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
        
        if( localCache[url] ) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState();
        
        const resp = await fetch( url );

        //sleep para que se vea el Cargando...
        await new Promise( resolve => setTimeout( resolve, 200 ) );

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
        localCache[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}


