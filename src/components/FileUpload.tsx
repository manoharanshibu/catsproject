import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { DropzoneArea } from 'material-ui-dropzone';

import { uploadCat } from '../state/action-creators';
import { fetchCats } from "../state/action-creators";

import './FileUpload.scss';

const FileUpload = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState<any>();

    const onSubmit = () => {
        uploadCat(files[0]).then(() => dispatch(fetchCats()))
    }

    return <div className="uploadconatiner">
        <DropzoneArea acceptedFiles={['image/*']} filesLimit={1} onChange={(files) => setFiles(files)} />
        <button className="uploadbutton button" onClick={onSubmit}>Upload</button>
    </div>
}
export default FileUpload;
