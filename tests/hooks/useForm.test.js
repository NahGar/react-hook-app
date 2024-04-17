import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Pepe',
        email: 'pepe@pepe.com'
    }

    test('debe regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    
    test('debe cambiar el nombre del formulario', () => {
        
        const event = {
            target: {
                name: 'name',
                value: 'prueba'
            }
        }

        const { result } = renderHook( () => useForm(initialForm) );
        
        const { onInputChange } = result.current;

        act(() => {
            /* fire events that update state */
            onInputChange(event);
        });

        //console.log("formState:",result.current.formState);

        expect( result.current.name ).toBe( event.target.value );

        expect( result.current.formState.name ).toBe( event.target.value );
    });

    test('debe realizar reset del formulario', () => {
        
        const event = {
            target: {
                name: 'name',
                value: 'prueba'
            }
        }

        const { result } = renderHook( () => useForm(initialForm) );
        
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            /* fire events that update state */
            onInputChange(event);

            onResetForm();
        });

        //console.log("formState:",result.current.formState);
        
        expect( result.current.name ).toBe( initialForm.name );

        expect( result.current.formState.name ).toBe( initialForm.name );
    });

});