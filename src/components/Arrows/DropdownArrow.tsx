import React, { MouseEvent, useEffect, useState } from "react";
import "./DropdownArrow.scss";

interface DropdownArrowProps {
    show?: boolean;
    onClick?: (e: MouseEvent<unknown, unknown>) => void;
    initColor?: string;
    finalColor?: string;
}
const DropdownArrow: React.FC<DropdownArrowProps> = (props) => {
    const [display, setDisplay] = useState(props.show);

    useEffect(() => {
        setDisplay(props.show);
    }, [props.show]);

    const onClick = (e: MouseEvent<unknown, unknown>) => {
        setDisplay(!display);
        if (props.onClick) props.onClick(e);
    };

    return (
        <div
            className={`${display ? "show " : ""}DropdownArrow`}
            onClick={onClick}
        >
            <button onClick={onClick}>
                <div
                    className="first"
                    style={{
                        backgroundColor: display
                            ? props.initColor
                            : props.finalColor,
                    }}
                ></div>
                <div
                    className="second"
                    style={{
                        backgroundColor: display
                            ? props.initColor
                            : props.finalColor,
                    }}
                ></div>
            </button>
        </div>
    );
};

export default DropdownArrow;
