import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => { 
    
    const todo = {
        id: 1,
        description: 'Todo prueba',
        done: false
    }
    
    const mockHandleDeleteTodo = jest.fn();
    const mockHandleDoneTodo = jest.fn();
    
    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe mostrar el Todo pendiente de completar', () => {

        render( <TodoItem todo={todo} handleDeleteTodo={mockHandleDeleteTodo} handleDoneTodo={mockHandleDoneTodo} /> );

        const liElement = screen.getByRole('listitem');
        
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect( spanElement.className ).toBe('align-self-center spanPointer ');
        
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

        //screen.debug();
    });

    test('debe mostrar el Todo completado', () => {

        todo.done = true;

        render( <TodoItem todo={todo} handleDeleteTodo={mockHandleDeleteTodo} handleDoneTodo={mockHandleDoneTodo} /> );

        const spanElement = screen.getByLabelText('span');
        
        expect( spanElement.className ).toContain('text-decoration-line-through');

        //screen.debug();
    });


    test('span debe llamar handleDoneTodo al hacer doble click', () => {

        render( <TodoItem todo={todo} handleDeleteTodo={mockHandleDeleteTodo} handleDoneTodo={mockHandleDoneTodo} /> );

        const spanElement = screen.getByLabelText('span');

        fireEvent.doubleClick( spanElement );

        expect( mockHandleDoneTodo ).toHaveBeenCalledWith( todo.id );

        //screen.debug();
    });

    test('button debe de llamar mockHandleDeleteTodo', () => {

        render( <TodoItem todo={todo} handleDeleteTodo={mockHandleDeleteTodo} handleDoneTodo={mockHandleDoneTodo} /> );

        const buttonDelete = screen.getByRole('button');

        fireEvent.click( buttonDelete );

        expect( mockHandleDeleteTodo ).toHaveBeenCalledWith( todo.id );

        screen.debug();
    });
});