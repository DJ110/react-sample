/**
 * Created by dj110 on 6/10/17.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initFormReducer } from './initFormReducer.jsx';
import { firstsampleReducer } from './firstsampleReducer.jsx';
import { fetchsampleReducer } from './fetchsampleReducer.jsx';

export const reducers = combineReducers({
    form: formReducer,
    initFormReducer,
    firstsampleReducer,
    fetchsampleReducer
});