import React from "react";
import Button, { ButtonProps } from "./Button";

const PrimaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            {...props}
            className={props.className ? `${props.className} ` : "Primary"}
        />
    );
};

export default PrimaryButton;
