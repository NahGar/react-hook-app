import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const MultipleCustomHook = () => {
yar
    const { counter, increment, decrement } = useCounter( 1 );

    const { data, isLoading, hasError } = useFetch( url + counter );

    console.log(data.id);
    console.log(data.name);
    console.log(data.sprites);

    return (
        <>
            <h1>Información1 de Pokemon</h1>
            <hr />

            { /* !isLoading &&  <LoadingMessage /> */ }
            { isLoading ? <LoadingMessage /> : <PokemonCard id={data.id} name={data.name} sprites={data.sprites} /> } 

            { /*data !== null && <h2>{ data.name }</h2>*/ }
            { /*data !== null && <pre>{ JSON.stringify( data, null, 2)}</pre>*/ }

            <button onClick={ () => counter > 1 && decrement()  } className='btn btn-primary'>Anterior</button> 
            <button onClick={ () => increment() } className='btn btn-primary'>Siguiente</button> 
        </>
    )
}
