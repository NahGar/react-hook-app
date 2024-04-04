
import React, { useLayoutEffect, useRef } from 'react';

/*
//export const PokemonCard = ( { id, name, sprites = [] } ) => {
export const PokemonCard = ( {info} ) => {
    
    return (
        <section style={{ height: 200 }}>
          <h2 className='text-capitalize'>#{info?.id} - {info?.name}</h2>
        
          <div>
            <img src={ info.sprites.back_default } style={{ height: 200 }} />
            <img src={ info.sprites.back_shiny } style={{ height: 200 }} />
            <img src={ info.sprites.front_default } style={{ height: 200 }} />
            <img src={ info.sprites.front_shiny } style={{ height: 200 }} />
            
          </div>
        </section>
    )
}
*/

export const PokemonCard = ( {id, name, sprites = [] } ) => {
    
    const pRef = useRef();
    

    useLayoutEffect( () => {
        pRef.current.getBoundingClientRect();
    },[name]);

    return (
        <section style={{ height: 300 }} >
          <h2 ref={ pRef } className='text-capitalize'>#{id} - {name}</h2>
        
          <div>
            { 
                sprites.map( sprite => (
                    <img key={ sprite } src={ sprite } style={{ height: 200 }} alt={ name } />
                )) 
            }
          </div>
        </section>
    )
}