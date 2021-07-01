import React, { useState } from "react";
import File from "../assets/img/file.png";
import "./FileInput.scss";

interface FileInputProps {
    multipleFiles?: boolean;
    name: string;
    label?: string;
    accept?: string;
}
const FileInput: React.FC<FileInputProps> = (props) => {
    const [files, setFiles] = useState<string[]>([]);

    return (
        <div className="FileInput">
            <input
                type="file"
                name={props.name}
                id={props.name}
                multiple={props.multipleFiles}
                accept={props.accept}
            />
            <label htmlFor={props.name}>
                <div className="imgContainer">
                    <img src={File} alt="file" />
                </div>
                <div>{props.label ?? props.name}</div>
                {files.length > 0 && <div>{files.join(", ")}</div>}
            </label>
        </div>
    );
};

export default FileInput;
