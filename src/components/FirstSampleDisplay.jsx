/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

class FirstSampleDisplay extends React.Component {
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
};

FirstSampleDisplay.propTypes = {
    data: PropTypes.string
};

export { FirstSampleDisplay as default };