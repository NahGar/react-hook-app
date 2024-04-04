
import React from 'react';

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
    
    return (
        <section style={{ height: 300 }} >
          <h2 className='text-capitalize'>#{id} - {name}</h2>
        
          <div>
            <img src={ sprites.back_default } style={{ height: 200 }} />
            <img src={ sprites.back_shiny } style={{ height: 200 }} />
            <img src={ sprites.front_default } style={{ height: 200 }} />
            <img src={ sprites.front_shiny } style={{ height: 200 }} />
            
          </div>
        </section>
    )
}