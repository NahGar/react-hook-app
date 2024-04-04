import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const MultipleCustomHook = () => {

    const { counter, increment, decrement } = useCounter( 1 );

    const { data, isLoading, hasError } = useFetch( url + counter );
    
    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />

            { /* !isLoading &&  <LoadingMessage /> */ }
            { isLoading ? <LoadingMessage /> : <PokemonCard info={data} /> } 

            { /*data !== null && <h2>{ data.name }</h2>*/ }
            { /*data !== null && <pre>{ JSON.stringify( data, null, 2)}</pre>*/ }

            <button onClick={ () => counter > 1 && decrement()  } className='btn btn-primary'>Anterior</button> 
            <button onClick={ () => increment() } className='btn btn-primary'>Siguiente</button> 
        </>
    )
}
