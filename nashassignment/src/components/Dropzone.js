import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ open }) => {
    const { getRootProps, getInputProps,isDragActive, acceptedFiles } = useDropzone({});

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
    return (
        <div className="container">
            <div {...getRootProps({ className: "dropzone" })}>
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                <p className="dropzone-content">
                    Release to drop the files here
                </p>
                ) : (
                <p className="dropzone-content">
                    Drag’n’drop some files here, or click to select files
                </p>
                )}
                <button type="button" onClick={open} className="btn">
                    Click to select files
                </button>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
            </div>
        </div>
    );
}

export default Dropzone;