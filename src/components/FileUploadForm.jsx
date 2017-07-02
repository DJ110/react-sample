/**
 * Created by dj110 on 7/2/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { didMount } from '../actions/index.jsx';

import Dropzone from 'react-dropzone';

const renderDropzoneInput = (field) => {
    const files = field.input.value;
    return (
        <div>
            <Dropzone
                name={field.name}
                onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
            >
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
            {files && Array.isArray(files) && (
                <ul>
                    { files.map((file, i) => <li key={i}>{file.name}</li>) }
                </ul>
            )}
        </div>
    );
};

class FileUploadForm extends React.Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const { dispatch }  = this.props;
        dispatch(didMount({name:"Gesu", email:"dj@atmarkplant.com"}));
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>File</label>
                    <div>
                        <Field
                            name="file"
                            component={renderDropzoneInput}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        );
    }
};

FileUploadForm = reduxForm({
    form: 'fileuploadForm'
})(FileUploadForm);

export { FileUploadForm as default };