/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';

import InitializeFormStateFormContainer from '../components/InitialStateForm.jsx';

class ReduxFormInit extends React.Component {

    submitHandle(value) {
        console.log(value);
    }

    render() {
        return (
            <div>
                <InitializeFormStateFormContainer onSubmit={this.submitHandle} />
            </div>
        );
    }
}

export { ReduxFormInit as default };