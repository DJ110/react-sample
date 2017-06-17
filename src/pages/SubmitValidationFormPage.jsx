/**
 * Created by dj110 on 6/17/17.
 */
import React from 'react';
import { SubmissionError } from 'redux-form';
import SubmitValidationForm from '../components/SubmitValidationForm.jsx';

class SubmitValidationFormPage extends React.Component {


    submit(values) {
        if (values.name !== 'reduxform') {
            throw new SubmissionError({
                name: 'Name is wrong',
                _error: 'Login failed!'
            })
        }
        else {
            alert('Submit!!! :' + JSON.stringify(values));
        }
    };

    render() {
        return (
            <div>
                <SubmitValidationForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export { SubmitValidationFormPage as default };