import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

import { DropzoneArea } from 'material-ui-dropzone';
import { useHistory } from 'react-router-dom';

import './FileUpload.scss';

const FileUpload = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { uploadCat } = bindActionCreators(actionCreators, dispatch);

    const [files, setFiles] = useState<any>();

    const onSubmit = () => {
        uploadCat(files[0], history)
    }

    return <div className="uploadconatiner">
        <DropzoneArea acceptedFiles={['image/*']} filesLimit={1} onChange={(files) => setFiles(files)} />
        <button className="uploadbutton button" onClick={onSubmit}>Upload</button>
    </div>
}
export default FileUpload;
