
export const todoReducer = ( initialState = [], action ) => {

    //console.log("TodoReducer initialState",initialState);
    switch ( action.type ) {
        case '[TODO] Add':
            return [ ...initialState, action.payload ];
    
        case '[TODO] Delete':
            /*
            let result = [];
            initialState.forEach( (todo) => {
                if( todo.id !== action.payload ) {
                    result.push( todo );
                }
            });
            return result;
            */
             
            return initialState.filter( (todo) => todo.id !== action.payload );

        case '[TODO] Done':
            /*
            let result = [];
            initialState.forEach( (todo) => {
                if( todo.id === action.payload ) {
                    todo.done = !todo.done;
                }
                result.push( todo );
            });
            return result;
            */

            return initialState.map( (todo) => {
                if( todo.id === action.payload ) {
                    todo.done = !todo.done;
                }
                return todo;
            });

        default:
            return initialState;
    }
}
