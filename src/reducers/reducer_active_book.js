/**
 * Created by Daniel on 12/09/2017.
 */
//State argument isnt application state,
//only the state the reducer is responsible for
export default function(state = null, action) {
    switch (action.type){
        case 'BOOK_SELECTED' :
            return action.payload;
    }
    return state;
}