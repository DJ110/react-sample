/**
 * Created by dj110 on 6/17/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { didMount } from '../actions/index.jsx';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 100) {
        errors.name = "User name should be less than 100";
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors;
}

const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error }
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>))}
        </div>
    </div>
)


class DidMountForm extends React.Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {
       const { dispatch }  = this.props;
       dispatch(didMount({name:"Gesu", email:"dj@atmarkplant.com"}));
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
                        <Field
                            name="name"
                            component={renderField}
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
                            component={renderField}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        );
    }
};

function mapStateToPropsDidMountForm(state) {
    return {
        initialValues: state.didMountFormReducer.data
    }
}

DidMountForm = reduxForm({
    form: 'didMountFormState',
    enableReinitialize: true,
    validate,
})(DidMountForm);


const DidMountFormContainer = connect(
    mapStateToPropsDidMountForm
)(DidMountForm);

export { DidMountFormContainer as default };