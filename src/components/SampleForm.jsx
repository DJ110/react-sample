/**
 * Created by dj110 on 6/10/17.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { reset } from 'redux-form';

var SampleForm = (props) => {

    const { handleSubmit, reset } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <div>
                    <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"/>
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field name="email"
                           component="input"
                           type="email"
                           placeholder="Email"/>
                </div>
            </div>
            <div>
                <label>Sex</label>
                <div>
                    <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
                    <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
                </div>
            </div>
            <div>
                <label>Select</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option></option>
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            <div>
                <label>Check</label>
                <div>
                    <Field name="yes" id="yes" component="input" type="checkbox"/>
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};


SampleForm = reduxForm({
    form: 'sampleform'   // unique name
})(SampleForm);

export { SampleForm as default };