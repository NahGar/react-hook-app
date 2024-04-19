import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos');

const todos = [
    { id: 1, description: 'Primer todo', dateCreation: null, done: false },
    { id: 2, description: 'Segundo todo', dateCreation: null, done: true },
    { id: 3, description: 'Tercer todo', dateCreation: null, done: false }
];

describe('Pruebas en <TodoApp />', () => { 
    
    const mockHandleAddTodo = jest.fn();
    const mockHandleDeleteTodo = jest.fn();
    const mockHandleDoneTodo = jest.fn();

    useTodos.mockReturnValue({
        todos, 
        todosCount: 3, 
        todosPendCount: 1,
        handleAddTodo: mockHandleAddTodo, 
        handleDeleteTodo: mockHandleDeleteTodo, 
        handleDoneTodo: mockHandleDoneTodo
    });


    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe mostrar el componente correctamente', () => {

        render( <TodoApp /> );

        expect( screen.getByText('Primer todo (creado )') ).toBeTruthy();
        expect( screen.getByText('Segundo todo (creado )') ).toBeTruthy();
        expect( screen.getByText('Tercer todo (creado )') ).toBeTruthy();

        //textbox busca el input de agregar Todo
        expect( screen.getByRole('textbox') ).toBeTruthy();

        screen.debug();
    });

});