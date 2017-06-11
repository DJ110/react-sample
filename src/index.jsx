/**
 * Created by dj110 on 6/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/* Redux */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index.jsx';
import thunkMiddleware from 'redux-thunk';

/* Page Components */
import HomePage from './pages/HomePage.jsx';
import LocalStatePage from './pages/LocalStatePage.jsx';
import ReduxFormHome from './pages/ReduxFormHome.jsx';
import ReduxFormValidation from './pages/ReduxFormValidation.jsx';
import FirstReduxSamplePageContainer from './pages/FirstReduxSamplePage.jsx';
import FetchSamplePageContainer from './pages/FetchSamplePage.jsx';

/* Initial State -> Can move */
const initialState = {
    firstsampleReducer: {
        value: ""
    },
    fetchsampleReducer: {
        isFetching: false,
        items: []
    }
};

/* Store */
const store = createStore(reducers,
    initialState,
    applyMiddleware(thunkMiddleware)); // reducer, initial state

/* React */
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/localstate" component={LocalStatePage}/>
                <Route exact path="/reduxfirst" component={FirstReduxSamplePageContainer} />
                <Route exact path="/fetch" component={FetchSamplePageContainer} />
                <Route exact path="/form" component={ReduxFormHome}/>
                <Route exact path="/form/validation" component={ReduxFormValidation}/>
            </Switch>
        </Router>
    </Provider>,                        // React Components
    document.getElementById('root')     // Position to render
);