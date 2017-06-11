/**
 * Created by dj110 on 6/11/17.
 */
import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAIL } from '../const/constants.jsx';

export function fetchsampleReducer(state = {}, action) {

    switch(action.type) {
        case REQUEST_DATA:
        case REQUEST_DATA_SUCCESS:
        case REQUEST_DATA_FAIL:
            return Object.assign({}, state, {
                items: action.data,
                isFetching: action.isFetching
            });
        default:
            return state;
    }
}