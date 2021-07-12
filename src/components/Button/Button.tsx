import React, { MouseEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Button.scss";

export interface ButtonProps {
    className?: string;
    text: string;
    disabled?: boolean;
    link?: string;
    onClick?: (e: MouseEvent<unknown, unknown>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    console.log(props);
    const location = useHistory();
    const [classes, _] = useState(`Button ${props.className}`);
    console.log(classes);

    if (props.link) {
        if (props.link !== location.location.pathname) {
            return (
                <Link
                    onClick={props.onClick}
                    to={props.link}
                    className={classes}
                >
                    {props.text}
                </Link>
            );
        } else {
            return null;
        }
    } else {
        return (
            <button
                onClick={props.onClick}
                className={classes}
                disabled={props.disabled}
            >
                {props.text}
            </button>
        );
    }
};

export default Button;
