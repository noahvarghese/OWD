import React from "react";
import "./DirectionalArrow.scss";

interface DirArrowProps {
    direction: "left" | "right";
}

const DirectionalArrow: React.FC<DirArrowProps> = ({ direction }) => {
    return (
        <div className="DirectionalArrow">
            <div className="body"></div>
            <div className={direction}></div>
        </div>
    );
};

export default DirectionalArrow;
