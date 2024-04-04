import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const Layout = () => {

    const { counter, increment, decrement } = useCounter( 1 );

    const { data, isLoading, hasError } = useFetch( url + counter );

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />

            { /* !isLoading &&  <LoadingMessage /> */ }
            { isLoading ? <LoadingMessage /> : 
                <PokemonCard id={data.id} name={data.name} sprites={[
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                    data.sprites.front_default,
                    data.sprites.front_shiny 
                ]} /> } 

            { /*data !== null && <h2>{ data.name }</h2>*/ }
            { /*data !== null && <pre>{ JSON.stringify( data, null, 2)}</pre>*/ }

            <button onClick={ () => counter > 1 && decrement()  } className='btn btn-primary'>Anterior</button> 
            <button onClick={ () => increment() } className='btn btn-primary'>Siguiente</button> 
        </>
    )
}

