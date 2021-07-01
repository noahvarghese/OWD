import React, { ChangeEvent, DragEvent, useState } from "react";
import { useCallback } from "react";
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
    const [dragged, setDrag] = useState(false);
    const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

    const filesDropped = useCallback((e: DragEvent<HTMLLabelElement>) => {
        if (inputRef !== null) {
            console.log(e);
            if (e.dataTransfer) {
                const newFiles = Array.from(e.dataTransfer.files).map((file) => file.name);
                console.log("Changed")
                setFiles(newFiles);

                inputRef.files = e.dataTransfer.files;
            }
        }
        e.preventDefault();
    }, [setFiles, inputRef]);

    const filesAdded = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        const newFiles: string[] = [];

        if (!files) {
            console.log("Earased")
            setFiles([]);
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            newFiles.push(file.name);
        }

        setFiles(newFiles);
        e.preventDefault();
    }, [setFiles]);

    return (
        <div className="FileInput">
            <label
                htmlFor={props.name}
                className={dragged ? "drag" : ""}
                onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrag(true);
                }}
                onDragLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrag(false)
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'copy';
                    filesDropped(e);
                    setDrag(false);
                }} >
                <div className="imgContainer">
                    <img src={File} alt="file" />
                </div>
                <div>{props.label ?? props.name}</div>
                {files.length > 0 && <p>Files added: {files.join(", ")}</p>}
                <input
                    ref={setInputRef}
                    type="file"
                    name={props.name}
                    id={props.name}
                    multiple={props.multipleFiles}
                    accept={props.accept}
                    onChange={(e) => filesAdded(e)}
                />
            </label>
        </div>
    );
};

export default FileInput;
