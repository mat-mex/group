import React from 'react';
import FileInput from '../../components/FileInput';
import {FilesToString} from '../../helpers/fileParser';

export default function Upload() {
    const parseFile = (files: FileList) => {
        FilesToString(files).then(console.log);
    }

    return (
        <div>
            <FileInput
                fileTypes={[".html", ".mhtml"]}
                handle={parseFile}
                id="file-input"/>
        </div>
    );
}