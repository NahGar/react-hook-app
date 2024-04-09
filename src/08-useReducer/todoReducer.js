
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
            console.log("result",result);
            return result;
            */
             
            return initialState.filter( (todo) => todo.id !== action.payload );

        default:
            return initialState;
    }
}
