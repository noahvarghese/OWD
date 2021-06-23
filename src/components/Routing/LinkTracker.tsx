import React, { MouseEvent, ReactNode } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CustomAction } from "../../types/customAction";

interface LinkTrackerProps {
    to: string;
    id?: string;
    text?: string;
    setPath: (path: string) => CustomAction;
    className?: string;
    children?: ReactNode;
    onClick?: (e: MouseEvent<unknown, unknown>) => void;
}

const LinkTracker: React.FC<LinkTrackerProps> = ({
    to,
    text,
    className,
    onClick,
    children,
    id,
    ...props
}) => {
    if (!children && !text) throw new Error("No text or children provided");

    const click = (e: MouseEvent<unknown, unknown>) => {
        if (onClick) onClick(e);

        props.setPath(to);
    };

    return (
        <Link to={to} id={id} onClick={click} className={className}>
            {children ?? text}
        </Link>
    );
};

export default connect(
    (_) => ({}),
    (dispatch) => ({
        setPath: (path: string) =>
            dispatch({ type: "SET_PATH", payload: path }),
    })
)(LinkTracker);
