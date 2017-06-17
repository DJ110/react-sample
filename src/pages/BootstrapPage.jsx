/**
 * Created by dj110 on 6/17/17.
 */
import React from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

/* styles */
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class BootstrapPage extends React.Component {

    render() {
        return (
            <div>
                <div>Hello BootStrap</div>
                <button className="btn btn-primary">Push</button><br/><br/>
                <Button>Bootstrap Button</Button><br/>

                <DropdownButton title="Actions" id="dropdownaction">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2" active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3">Super Item</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}


export { BootstrapPage as default };