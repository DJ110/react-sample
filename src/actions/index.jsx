/**
 * Created by dj110 on 6/11/17.
 */
import 'whatwg-fetch';

import { CHANGE } from '../const/constants.jsx';
import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAIL } from '../const/constants.jsx';

/* This ActionCreator is for FirstReduxSample */
export function change(value) {
    return {
        type: CHANGE,
        value
    };
}


/* This ActionCreator is for FetchSample */
function invalidateData(e) {
    console.log(e);
    return {
        type: REQUEST_DATA_FAIL,
        data: [],
        isFetching: false
    }
}

function requestData() {
    return {
        type: REQUEST_DATA,
        isFetching: true
    }
}

function receiveData(json) {
    return {
        type: REQUEST_DATA_SUCCESS,
        data : json,
        isFetching: false
    }
}

export function fetchData() {
    return function (dispatch) {
        dispatch(requestData());
        return fetch('http://localhost:3000/data/data.json', {mode: 'cors', credentials: true})
            .then(response => response.json())
            .then(json => dispatch(receiveData(json.data)))
            .catch(e =>
                dispatch(invalidateData(e)));
    }
}