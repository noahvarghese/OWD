import React, { MouseEvent } from "react";
import LinkTracker from "../Routing/LinkTracker";
import "./Button.scss";

export interface ButtonProps {
    className?: string;
    text: string;
    link?: string;
    onClick?: (e: MouseEvent<unknown, unknown>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const classes = `Button ${props.className}`;

    if (props.link) {
        return (
            <LinkTracker
                onClick={props.onClick}
                to={props.link}
                className={classes}
                text={props.text}
            />
        );
    } else {
        return (
            <button onClick={props.onClick} className={classes}>
                {props.text}
            </button>
        );
    }
};

export default Button;
