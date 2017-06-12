/**
 * Created by dj110 on 6/12/17.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

class LocalizedPage extends React.Component {

    render() {
        return (
            <div>

                <h3><FormattedMessage
                    id="app.welcome" /></h3>
                <FormattedMessage
                    id="app.greeting_message"
                    values={{ name: 'tororo' }} />
            </div>
        )
    }
}


export { LocalizedPage as default };