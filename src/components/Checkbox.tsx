import React from "react";
import "./Checkbox.scss";

interface CheckboxProps {
    name: string;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    return (
        <div className="Checkbox">
            <input type="checkbox" id={props.name} name={props.name} />
            <label htmlFor={props.name}>{props.label ?? props.name}</label>
        </div>
    );
};

export default Checkbox;
