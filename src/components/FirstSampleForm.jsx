/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import FirstSampleInput from './FirstSampleInput.jsx';
import FirstSampleDisplay from './FirstSampleDisplay.jsx';

class FirstSampleForm extends React.Component {
    render() {
        return (
            <div>
                <FirstSampleInput onChange={this.props.onChange} />
                <FirstSampleDisplay data={this.props.value}/>
            </div>
        );
    }
}

FirstSampleForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

export { FirstSampleForm as default };

