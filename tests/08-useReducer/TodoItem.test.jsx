import { render } from "@testing-library/react";
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
    });
});