import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe('Pruebas en useCounter', () => {

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        
        const { counter, decrement, increment, resetCounter } = result.current;

        expect(counter).toBe(10);

        expect(decrement).toEqual( expect.any( Function ) );
        expect(increment).toEqual( expect.any( Function ) );
        expect(resetCounter).toEqual( expect.any( Function ) );
    });

    const initialValue = 100;

    test('debe retornar el counter el valor enviado', () => {

        const { result } = renderHook( () => useCounter(initialValue) );
        
        const { counter } = result.current;

        expect(counter).toBe(initialValue);
    });

    test('debe incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        

        const { counter, increment } = result.current;
        
        act(() => {
            /* fire events that update state */
            increment();
            increment(2);
        });
        
        // no funciona usar counter porque los datos primitivos no los actualiza, hay que usar result.current.counter
        expect( result.current.counter ).toBe(13);
    });

    test('debe decrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        
        const { counter, decrement } = result.current;
        
        act(() => {
            /* fire events that update state */
            decrement();
            decrement(2);
        });
        
        // no funciona usar counter porque los datos primitivos no los actualiza, hay que usar result.current.counter
        expect( result.current.counter ).toBe(7);
    });


    test('debe resetear el contador', () => {

        const { result } = renderHook( () => useCounter() );
        
        const { counter, decrement, resetCounter } = result.current;
        
        act(() => {
            /* fire events that update state */
            decrement();
            decrement(2);
            resetCounter();
        });
        
        // no funciona usar counter porque los datos primitivos no los actualiza, hay que usar result.current.counter
        expect( result.current.counter ).toBe(10);
    });

});