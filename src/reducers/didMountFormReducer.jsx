/**
 * Created by dj110 on 6/17/17.
 */
import { MOUNT_FORM_DATA } from '../const/constants.jsx';

export function didMountFormReducer(state = {}, action) {
    switch(action.type) {
        case MOUNT_FORM_DATA:
            return {
            data: action.data,              // As it is Don't change this part
        };
        default:
            return state;
    }
};