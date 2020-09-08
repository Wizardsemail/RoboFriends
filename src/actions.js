import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => {
    // uncomment the next line to see in the console the call
    // to this action by redux.
    // console.log('action text value: ' + text);

    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}