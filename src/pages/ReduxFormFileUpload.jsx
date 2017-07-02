/**
 * Created by dj110 on 7/2/17.
 */
import React from 'react';
import FileUploadForm from '../components/FileUploadForm.jsx';

class ReduxFormFileUpload extends React.Component {

    submit(value) {
        console.log(value);
    };

    render() {
        return (
            <div>
                <FileUploadForm onSubmit={this.submit} />
            </div>
        )
    }
}


export { ReduxFormFileUpload as default };