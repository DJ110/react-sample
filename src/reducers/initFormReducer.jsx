/**
 * Created by dj110 on 6/11/17.
 */
import { LOAD } from '../const/constants.jsx';

export function initFormReducer (state = {}, action) {

    switch(action.type) {
        case LOAD:
            return {
                data: action.data
            };
        default:
            return state;
    }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data });