/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';
import SyncValidationForm from '../components/SyncValidationForm.jsx';

class ReduxFormValidation extends React.Component {

    submit(value) {
        console.log(value);
    };

    render() {
        return (
            <div>
                <SyncValidationForm onSubmit={this.submit} />
            </div>
        )
    }
}

export { ReduxFormValidation as default };