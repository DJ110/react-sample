/**
 * Created by dj110 on 6/17/17.
 */
import React from 'react';
import DidMountFormContainer from '../components/DidMountForm.jsx';

class DidMountFormPage extends React.Component {

    handleSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div>
                <DidMountFormContainer onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}


export { DidMountFormPage as default };