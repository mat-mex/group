export function FilesToString(files: FileList): Promise<string> {
    const reader: FileReader = new FileReader();
    reader.readAsText(files[0]);

    return new Promise<string>( (resolve, reject) => {
        reader.onerror = () => reject(reader.error);
        reader.onload = () => {
            if (typeof(reader.result) === 'string')
                resolve(reader.result);
        }
    });
}

