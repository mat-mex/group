import React from 'react';
import FileInput from "../components/FileInput";

export default function Courses() {
    const parseFile = (files: FileList) => {
        const reader: FileReader = new FileReader();
        const file: File = files[0];
        reader.readAsText(file);
        reader.onload = () => console.log(reader.result);
        reader.onerror = () => console.log(reader.error);
    }


    return (
        <div>
            <FileInput
                fileTypes={[".html"]}
                handle={parseFile}
                id="file-input"/>
        </div>
    );
}