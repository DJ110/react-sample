/**
 * Created by dj110 on 6/10/17.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initformReducer } from './initformReducer.jsx';
import { firstsampleReducer } from './firstsampleReducer.jsx';
import { fetchsampleReducer } from './fetchsampleReducer.jsx';
import { didMountFormReducer } from './didMountFormReducer.jsx';

export const reducers = combineReducers({
    didMountFormReducer,
    form: formReducer,
    initformReducer,
    firstsampleReducer,
    fetchsampleReducer
});