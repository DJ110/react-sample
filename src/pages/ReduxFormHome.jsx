/**
 * Created by dj110 on 6/10/17.
 */
import React from 'react';
import SampleForm from '../components/SampleForm.jsx';

class ReduxFormHome extends React.Component {

    submit(value) {
        console.log(value);
    };

    render() {
        return (
            <div>
                <SampleForm onSubmit={this.submit} />
            </div>
        )
    }
}


export { ReduxFormHome as default };