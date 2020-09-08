import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    // uncomment the next line to see in the console the call
    // to this reducer by redux.
    // console.log('reducer action type: ' + action.type);

    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload }); // Also can be written return { ...state, searchField: action.payload }    
        default:
            return state;
    }
}