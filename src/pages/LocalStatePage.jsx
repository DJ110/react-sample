/**
 * Created by dj110 on 6/11/17.
 */
import React from 'react';

class LocalStatePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        var data = [{"name":"joe"}, {"name":"qoo"}];
        this.setState({items: data});
    }

    render() {

        var tableItems = this.state.items.map(function(item, index) {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                </tr>
            )
        }.bind(this));

        return (
            <div>
                <h3>Local State</h3>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tableItems}
                    </tbody>
                </table>
            </div>
        )
    }
}


export { LocalStatePage as default };