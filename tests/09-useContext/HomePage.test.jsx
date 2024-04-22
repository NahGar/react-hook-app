import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => { 
    
    const user = {
        id: 1,
        name: 'Pepe'
    }

    test('debe mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("userData");
        expect( preTag.innerHTML ).toBe("null");

        //screen.debug();
    });

    test('debe mostrar el componente con el usuario', () => {

        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("userData");
        console.log(preTag.innerHTML);
        expect( JSON.parse( preTag.innerHTML) ).toEqual( user );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        expect( preTag.innerHTML ).toContain( user.name );

        //screen.debug();
    });

});