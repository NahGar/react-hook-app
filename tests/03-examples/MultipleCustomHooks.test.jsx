import { render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => { 
    
    test('debe mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render ( <MultipleCustomHook /> );
        
        expect( screen.getByText("Cargando...") );
        expect( screen.getByText("Información de Pokemon") );
        
        const buttonAnterior = screen.getByRole('button', { name: 'Anterior' });
        expect( buttonAnterior.disabled ).toBeTruthy();

        const buttonSiguiente = screen.getByRole('button', { name: 'Siguiente' });
        expect( buttonSiguiente.disabled ).toBeTruthy();

        //screen.debug();
    });

    test('debe mostrar un pokemon', () => {
        
        useFetch.mockReturnValue({
            data: { 
                    id:1, 
                    name: 'bulbasaur',
                    sprites: {
                        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                    }
                },
            isLoading: false,
            hasError: null
        });

        render ( <MultipleCustomHook /> );
       
        expect( screen.getByText("#1 - bulbasaur") ).toBeTruthy();

        screen.debug();
    });
});