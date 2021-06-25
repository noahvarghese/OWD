import React, { MouseEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Button.scss";

export interface ButtonProps {
    className?: string;
    text: string;
    link?: string;
    onClick?: (e: MouseEvent<unknown, unknown>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const location = useHistory();
    const classes = `Button ${props.className}`;

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
            <button onClick={props.onClick} className={classes}>
                {props.text}
            </button>
        );
    }
};

export default Button;
