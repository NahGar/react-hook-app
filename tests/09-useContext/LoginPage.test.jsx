import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage />', () => { 
    
    const user = {
        id: 123, 
        name: 'Nahuel', 
        email:'abc@abc.com'
    };

    test('debe mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("userData");
        expect( preTag.innerHTML ).toBe( "null" );
        
        //screen.debug();
    });

    test('debe ejecutar setUser en el componente al hacer click', () => {

        const setUserMock = jest.fn();
        
        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage /> 
            </UserContext.Provider>
        );

        const button = screen.getByRole("button");
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith( user );

        screen.debug();
    });

});