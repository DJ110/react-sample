/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

class FirstSampleInput extends React.Component {

    render() {
        return (
            <input type="text" defaultValue="" onChange={this.props.onChange} />
        );
    }
}

FirstSampleInput.propTypes = {
    onChange: PropTypes.func.isRequired
};

export { FirstSampleInput as default };
