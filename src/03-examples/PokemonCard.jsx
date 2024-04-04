
import React from 'react'

//export const PokemonCard = ( { id, name, sprites = [] } ) => {

export const PokemonCard = ( {info} ) => {
    console.log(info);
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
