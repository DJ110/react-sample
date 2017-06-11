/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchData } from '../actions/index.jsx';

class FetchSamplePage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData());
    }


    render() {

        const { items } = this.props;

        var list = [];
        for (var index in items) {
            list.push(<li key={index}>{items[index].name}</li>);
        }

        return (
            <div>
                {list}
            </div>
        );
    }
}

FetchSamplePage.propTypes = {
    items: PropTypes.array
};


// Connect to Redux
function mapStateToProps(state) {
    return {
        items: state.fetchsampleReducer.items    //http://qiita.com/usagi-f/items/ae568fb64c2eac882d05
    }
}

const FetchSamplePageContainer = connect(
    mapStateToProps
)(FetchSamplePage)

export { FetchSamplePageContainer as default };