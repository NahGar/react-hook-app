import { todoReducer } from "../../src/08-useReducer/todoReducer"


describe('Pruebas en todoReducer', () => {
  
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe regresar el estado inicial', () => {
    
        //envía action vacío para que devuelva initialState
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );

    });

    test('debe agregar un todo', () => {
    
        const action = {
            type: '[TODO] Add',
            payload: { id: 2, description: 'Todo n2', done: false}
        }

        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });

    test('debe eliminar un todo', () => {
    
        //agregamos
        const actionAdd = {
            type: '[TODO] Add',
            payload: { id: 2, description: 'Todo n2', done: false}
        }

        let newState = todoReducer(initialState, actionAdd);

        expect( newState.length ).toBe( 2 );

        const actionDelete = {
            type: '[TODO] Delete',
            payload: 2
        }

        newState = todoReducer(newState, actionDelete);
        expect( newState.length ).toBe( 1 );
        expect( newState ).toEqual( initialState );
        expect( newState ).not.toContain( actionAdd );

    });
    
    test('debe realizar el Toggle del todo', () => {
    
        const action = {
            type: '[TODO] Done',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action);

        expect( newState[0].done ).toBe( false );
        
    });
})
