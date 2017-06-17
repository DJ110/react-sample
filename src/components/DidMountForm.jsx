/**
 * Created by dj110 on 6/17/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { didMount } from '../actions/index.jsx';

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
    enableReinitialize: true
})(DidMountForm);


const DidMountFormContainer = connect(
    mapStateToPropsDidMountForm
)(DidMountForm);

export { DidMountFormContainer as default };