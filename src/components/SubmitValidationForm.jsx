/**
 * Created by dj110 on 6/17/17.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SubmitValidationForm extends React.Component {

    render() {
        const { error, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <span>{error && <strong>{error}</strong>}</span>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        );
    }
}


export default reduxForm({
    form: 'submitValidation' // a unique identifier for this form
})(SubmitValidationForm);