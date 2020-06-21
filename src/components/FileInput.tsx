import React, {ChangeEvent} from 'react';

export interface Props {
    id: string,
    multiple?: boolean,
    fileTypes: string[],
    disabled?: boolean,
    className?: string,
    handle: (files: FileList) => void
}

export default function FileInput(props: Props) {

    const handle = (event: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = event.target.files;
        if (files !== null)
            props.handle(files);
    }

    return (
        <input
            type="file"
            id={props.id}
            className={props.className}
            accept={props.fileTypes.join(',')}
            multiple={props.multiple}
            disabled={props.disabled}
            onChange={handle}
        />
    );
}