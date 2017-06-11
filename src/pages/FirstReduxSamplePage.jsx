/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { change } from '../actions/index.jsx';

import FirstSampleForm from '../components/FirstSampleForm.jsx';

class FirstReduxSamplePage extends React.Component {
    render() {
        return (
            <div>
                <FirstSampleForm onChange={this.props.onChange} value={this.props.value} />
            </div>
        );
    }
}

FirstReduxSamplePage.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};


/* Connect to Redux */
function mapStateToProps(state) {
    return {
        value: state.firstsampleReducer.value    //http://qiita.com/usagi-f/items/ae568fb64c2eac882d05
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange(e) {
            dispatch(change(e.target.value));
        }
    };
}

/* Create Container */

const FirstReduxSamplePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstReduxSamplePage);

export { FirstReduxSamplePageContainer as default };