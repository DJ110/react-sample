/**
 * Created by dj110 on 6/11/17.
 */
import { CHANGE } from '../const/constants.jsx';

export function firstsampleReducer(state = {}, action) {
    switch(action.type) {
        case CHANGE:
            return Object.assign({}, state, {
                value: action.value,
            });
        default:
            return state;
    }
};