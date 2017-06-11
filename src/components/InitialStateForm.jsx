/**
 * Created by dj110 on 6/11/17.
 */

import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

let InitializeFormStateForm = (props) => {
    const { handleSubmit, load, pristine, reset, submitting } = props;

    return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>First Name</label>
              <div>
                  <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                  />
              </div>
          </div>
          <div>
              <label>Last Name</label>
              <div>
                  <Field
                      name="lastName"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                  />
              </div>
          </div>
          <div>
              <button type="submit" disabled={pristine || submitting}>Submit</button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
          </div>
      </form>
    );

};

function mapStateToProps(state) {
    return {
        initialValues: state.initformReducer.data    //http://qiita.com/usagi-f/items/ae568fb64c2eac882d05
    }
}

InitializeFormStateForm = reduxForm({
    form: 'initializeFromState' // a unique identifier for this form
})(InitializeFormStateForm);


const InitializeFormStateFormContainer = connect(
    mapStateToProps
)(InitializeFormStateForm)

export { InitializeFormStateFormContainer as default };