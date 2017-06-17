/**
 * Created by dj110 on 6/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { enLocaleData } from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);

import { i18nConfig } from './config/i18nConfig.jsx';

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
import ReduxFormInit from './pages/ReduxFormInit.jsx';
import LocalizedPage from './pages/LocalizedPage.jsx';
import DidMountFormPage from './pages/DidMountFormPage.jsx';
import SubmitValidationFormPage from './pages/SubmitValidationFormPage.jsx';
import BootstrapPage from './pages/BootstrapPage.jsx';

/* Initial State -> Can move */
const initialState = {
    firstsampleReducer: {
        value: ""
    },
    fetchsampleReducer: {
        isFetching: false,
        items: []
    },
    initformReducer: {
        data: { firstName: 'Joe',
        lastName: 'Ito'}
    },
    didMountFormReducer: {
        data :{}
    }
};

/* Store */
const store = createStore(reducers,
    initialState,
    applyMiddleware(thunkMiddleware)); // reducer, initial state

/* React */
ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/localstate" component={LocalStatePage}/>
                    <Route exact path="/reduxfirst" component={FirstReduxSamplePageContainer} />
                    <Route exact path="/fetch" component={FetchSamplePageContainer} />
                    <Route exact path="/form" component={ReduxFormHome}/>
                    <Route exact path="/form/validation" component={ReduxFormValidation}/>
                    <Route exact path="/form/init" component={ReduxFormInit}/>
                    <Route exact path="/form/didmount" component={DidMountFormPage}/>
                    <Route exact path="/form/submitvalidation" component={SubmitValidationFormPage} />
                    <Route exact path="/localized" component={LocalizedPage} />
                    <Route exact path="/bootstrap" component={BootstrapPage} />
                </Switch>
            </Router>
        </IntlProvider>
    </Provider>,                        // React Components
    document.getElementById('root')     // Position to render
);